import { useSelector } from "react-redux";
import TaskItem from "../task-item/task-item.component";
import { TaskListUL } from "./task-list.styles";

const TaskList = ({ deleteTask, setEditMode }) => {
  const todoList = useSelector((state) => state.todo.todoList);
  const taskListArr = [...todoList];
  return (
    <TaskListUL>
      {taskListArr
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            setEditMode={setEditMode}
          />
        ))}
    </TaskListUL>
  );
};

export default TaskList;
