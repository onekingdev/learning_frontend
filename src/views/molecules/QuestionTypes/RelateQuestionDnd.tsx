import { useState, memo, forwardRef, useImperativeHandle, useEffect } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { Grid, Typography } from "@mui/material";
import { DndDragItem } from "./DndDragItem";

interface QuestionOption {
  id: string;
  key: string;
  value: string;
}

interface QuestionOptionProps {
  option: QuestionOption;
  index: number;
}

const QuestionOption = memo(({ option, index }: QuestionOptionProps) => {
  return (
    <Draggable draggableId={option.id} index={index}>
      {(provided, snapshot) => (
        <DndDragItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Typography variant='h5'>
            {option.value}
          </Typography>
        </DndDragItem>
      )}
    </Draggable>
  );
});


interface RelateQuestionDndProps {
  options: Array<any>
}
export const RelateQuestionDnd = forwardRef<any, RelateQuestionDndProps>(({ options }, ref) => {
  const [state, setState] = useState<any>(null);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      return;
    }
    const sourceList: any = state[source.droppableId as keyof Object]
    const destinationList: any = state[destination.droppableId as keyof Object]
    const temp = { ...state }
    destinationList.splice(destination.index, 0, sourceList[source.index])
    sourceList.splice(source.index, 1)
    temp[source.droppableId as keyof Object] = sourceList
    temp[destination.droppableId as keyof Object] = destinationList
    setState(temp)
    return
  }

  useImperativeHandle(
    ref,
    () => ({
      checkAnswer,
      getCurrentAnswer
    })
  )

  const getCurrentAnswer = () => {
    return [
      {
        key: options[0]?.key,
        value: state.answers1[0]?.value
      },
      {
        key: options[1]?.key,
        value: state.answers2[0]?.value
      },
    ]
  }
  const checkAnswer = () => {
    return options[0]?.key === state.answers1[0]?.key && options[1]?.key === state.answers2[0]?.key
  }

  useEffect(() => {
    setState({ questions: [...options], answers1: new Array(0), answers2: new Array(0), })
  }, [options])
  return (
    state &&
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId='questions' direction="horizontal">
        {(provided, snapshot) => (
          <QuestionsList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {state.questions.map((q: any, i: number) => (
              <QuestionOption key={q.id} option={q} index={i} />
            ))}
            {provided.placeholder}
          </QuestionsList>
        )}
      </Droppable>
      <Grid container justifyContent='center' alignItems='center' spacing={2}>
        {
          options.map((option, index) => {
            const droppableId = 'answers' + (index + 1)
            const words: any = state[droppableId as keyof Object]
            return (
              <Grid item key={option.id}>
                <Typography color='white' variant='h5'>{option.key}</Typography>
                <Droppable droppableId={droppableId} direction="horizontal">
                  {(provided, snapshot) => (
                    <AnswersList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      isDraggingOver={snapshot.isDraggingOver}
                    >
                      {
                        words.map((q: any, i: any) => (<QuestionOption key={q.id} option={q} index={i} />))
                      }
                      {provided.placeholder}
                    </AnswersList>
                  )}
                </Droppable>
              </Grid>
            )
          }
          )
        }
      </Grid>
    </DragDropContext >
  );
})



const QuestionsList = styled.div<{ isDraggingOver: boolean }>`
  border: dashed 1px gray;
  transition: background 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100px;
  max-width: 500px;
  background-color: ${props =>
    props.isDraggingOver ? "rgba(10,10,10,0.3)" : "inherit "};
  margin-bottom: 20px;
`;
const AnswersList = styled.div<{ isDraggingOver: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  border: dashed 1px gray;
  height: 80px;
  background-color: ${props =>
    props.isDraggingOver ? "rgba(10,10,10,0.3)" : "inherit "};
  width: 100%;
  min-width: 200px;
`;
