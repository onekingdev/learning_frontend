import * as React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable, DropResult  } from "react-beautiful-dnd";
const { useState, memo } = React;

const data = {
  tasks: {
    task1: {
      id: "task1",
      content: "Take out the bins"
    },
    task2: {
      id: "task2",
      content: "Watch TV"
    },
    task3: {
      id: "task3",
      content: "Charge phone"
    },
    task4: {
      id: "task4",
      content: "Cook dinner"
    }
  },
  columns: {
    col1: {
      id: "col1",
      title: "Todo",
      taskIds: ["task1", "task2", "task3", "task4"]
    },
    col2: {
      id: "col2",
      title: "Progress",
      taskIds: []
    },
    col3: {
      id: "col3",
      title: "Done",
      taskIds: []
    }
  },
  columnOrder: ["col1", "col2", "col3"]
};

const TaskContainer = styled.div<{ isDragging: boolean }>`
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "red" : "white")};
  transition: background 0.1s;
`;

interface Task {
  id: string;
  content: string;
}

interface TaskProps {
  task: Task;
  index: number;
}

const Task = memo(({ task, index }: TaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </TaskContainer>
      )}
    </Draggable>
  );
});

const Container = styled.div<{ isDragging: boolean }>`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDragging ? "lightgreen" : "white")};
`;
const Title = styled.h3`
  padding: 8px;
`;
const List = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  transition: background 0.1s;
  background-color: ${props =>
    props.isDraggingOver ? "lightgrey" : "inherit "};
  flex-grow: 1;
`;

const Columns = styled.div`
  display: flex;
`;

interface Column {
  id: string;
  title: string;
}

interface ColumnProps {
  tasks: Task[];
  index: number;
  column: Column;
}

const Column = memo(({ column, tasks, index }: ColumnProps) => (
  <Draggable draggableId={column.id} index={index}>
    {(provided, snapshot) => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        isDragging={snapshot.isDragging}
        ref={provided.innerRef}
      >
        <Title {...provided.dragHandleProps}>{column.title}</Title>
        <Droppable droppableId={column.id} type="task">
          {(provided, snapshot) => (
            <List
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks.map((t, i) => (
                <Task key={t.id} task={t} index={i} />
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </Container>
    )}
  </Draggable>
));


export const SortOrderBeautifulDnd: React.FC = () => {
  const [state, setState] = useState(data);

  const onDragEnd = ({ destination, source, draggableId, type }: DropResult) => {
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startcol: any = state.columns[source.droppableId as keyof Object];
    const endcol: any = state.columns[destination.droppableId as keyof Object];

    if (startcol === endcol) {
      const tasks = Array.from(startcol.taskIds);
      tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, draggableId);

      const newCol = {
        ...startcol,
        taskIds: tasks
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newCol.id]: newCol
        }
      };

      setState(newState);
      return;
    }
    const startTaskIds = Array.from(startcol.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...startcol,
      taskIds: startTaskIds
    };
    const endTaskIds = Array.from(endcol.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEnd = {
      ...endcol,
      taskIds: endTaskIds
    };
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd
      }
    };
    setState(newState);
  }
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId="columns" direction="horizontal" type="column">
        {provided => (
          <Columns {...provided.droppableProps} ref={provided.innerRef}>
            {state.columnOrder.map((id, i) => {
              const col: any = state.columns[id as keyof Object];
              const tasks = col.taskIds.map((taskid: any) => state.tasks[taskid as keyof Object]);
              return <Column key={id} column={col} tasks={tasks} index={i} />;
            })}
            {provided.placeholder}
          </Columns>
        )}
      </Droppable>
    </DragDropContext>
  );
}
