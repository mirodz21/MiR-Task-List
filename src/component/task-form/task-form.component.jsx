import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledForm,
  StyledDiv,
  Input,
  FormButton,
  Title,
} from "./task-form.styles";
import { addToDo } from "../../slice/todo.slice";

const TaskForm = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addToDo({
        name: task,
        status: "incomplete",
        note: "",
        id: Date.now(),
        time: new Date().toLocaleString(),
      })
    );
    setTask("");
  };

  return (
    <StyledDiv>
      <Title for="task">Task List</Title>
      <StyledForm onSubmit={onSubmitHandler}>
        <Input
          type="text"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
          required
          maxLength={20}
        />
        <FormButton variant="primary" type="submit">
          ADD TASK
        </FormButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default TaskForm;
