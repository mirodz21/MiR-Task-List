import { useState } from "react";
import {
  ButtonContainer,
  ModalBody,
  ModalContainer,
  ModalInput,
  ModalButton,
  ConfirmEditButton,
  EditInput,
  Label,
} from "./modal.styles";
import { useDispatch } from "react-redux";
import { editTask } from "../../slice/todo.slice";

const TaskModal = ({ setEditMode, toEditTask }) => {
  const [taskEdit, setTaskEdit] = useState(toEditTask.name);
  // const [noteEdit, setNoteEdit] = useState(toEditTask.note);

  const dispatch = useDispatch();

  const editSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editTask({
        ...toEditTask,
        name: taskEdit,
      })
    );
    setEditMode(false);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };
  return (
    <ModalBody>
      <ModalContainer onSubmit={null}>
        <h2>Edit Task</h2>
        <EditInput>
          <Label htmlFor="" name="taskNote">
            Update:
          </Label>
          <ModalInput
            type="text"
            id="editTask"
            value={taskEdit}
            onChange={(e) => {
              setTaskEdit(e.target.value);
            }}
            placeholder="Update Task"
            required
            maxLength={40}
          />
        </EditInput>
        <EditInput>
          <Label htmlFor="" name="taskNote">
            Status:
          </Label>
          <span>
            {toEditTask.status === "complete" ? "Task Complete" : "On Process"}
          </span>
        </EditInput>
        <ButtonContainer>
          <ConfirmEditButton onClick={editSubmit}>Confirm</ConfirmEditButton>
          <ModalButton onClick={closeEditMode}>Close</ModalButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalBody>
  );
};

export default TaskModal;
