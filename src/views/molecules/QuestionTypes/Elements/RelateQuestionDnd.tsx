import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Grid, Typography } from "@mui/material";
import { DraggableOption } from "./DraggableOption";

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
    const res = []
    const length = options.length
    for (let i = 0; i < length; i++) {
      res.push({
        key: options[i]?.key,
        value: state[('answers' + i) as keyof Object].value
      })
    }
    return res
  }
  const checkAnswer = () => {
    console.log({ state, options })
    return !options.some((option, index) => option.key !== state[('answers' + index) as keyof Object][0]?.key
    )
  }

  useEffect(() => {
    const answers: any = {}
    const length = options.length
    for (let i = 0; i < length; i++) {
      answers[('answers' + i) as keyof Object] = new Array(0)
    }
    console.log({ answers })
    setState({ questions: [...options], ...answers })
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
              <DraggableOption key={q.id} option={q} index={i} />
            ))}
            {provided.placeholder}
          </QuestionsList>
        )}
      </Droppable>
      <Grid container justifyContent='center' alignItems='center' spacing={2}>
        {
          options.map((option, index) => {
            const droppableId = 'answers' + index
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
                        words && words.map((q: any, i: any) => (<DraggableOption key={q.id} option={q} index={i} />))
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
