import { ListItem } from "./task-item.styles";
import {
  TimePar,
  TaskPar,
  ListItemDiv,
  EditIcon,
  DeleteIcon,
  TaskItemDiv,
} from "./task-item.styles";
import CheckBox from "../checkbox/checkbox.component";
import { deleteTask, editTask } from "../../slice/todo.slice";
import { useDispatch } from "react-redux";
import TaskModal from "../modal-component/modal.component";
import { useEffect, useState } from "react";

const TaskItem = ({ task }) => {
  const [editMode, setEditMode] = useState(false);
  const [toEditTask, setToEditTask] = useState();
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const checkBoxHandler = () => {
    setChecked(!checked);
    dispatch(
      editTask({
        ...task,
        status: checked ? "incomplete" : "complete",
      })
    );

    console.log(checked);
  };
  const deleteTaskHandler = () => {
    dispatch(deleteTask(task.id));
  };
  const editTaskHandler = () => {
    setEditMode(true);
    setToEditTask(task);
  };

  useEffect(() => {
    if (task.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [task.status]);

  return (
    <div>
      <ListItem>
        <TaskItemDiv>
          <CheckBox
            checked={checked}
            setChecked={setChecked}
            checkBoxHandler={checkBoxHandler}
          />
          <ListItemDiv>
            <TaskPar checked={checked}>{task.name}</TaskPar>
            <TimePar>{task.time}</TimePar>
          </ListItemDiv>
        </TaskItemDiv>
        <div>
          <EditIcon type="button" onClick={() => editTaskHandler(task)} />
          <DeleteIcon onClick={() => deleteTaskHandler(task.id)} />
        </div>
      </ListItem>
      {editMode && (
        <TaskModal setEditMode={setEditMode} toEditTask={toEditTask} />
      )}
    </div>
  );
};

export default TaskItem;
