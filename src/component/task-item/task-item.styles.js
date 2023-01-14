import styled from "styled-components";

import { Delete } from "@styled-icons/material/Delete";
import { Edit } from "@styled-icons/boxicons-solid/Edit";

import { Note } from "@styled-icons/fluentui-system-regular/Note";

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px;
  padding: 8px;
  width: 500px;
  border: 1.4px solid #002400;
  box-shadow: 4px 5px #dbd2e0;
  margin-bottom: 10px;
  @media (max-width: 390px) {
    width: 300px;
  }
`;

export const ListItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const TaskPar = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 0px;
  text-decoration-thickness: 10%;
  ${({ checked }) => checked && "text-decoration: line-through;"};
  @media (max-width: 390px) {
    font-size: 0.8rem;
  }
`;
export const TimePar = styled.p`
  font-size: 10px;
  color: #273b09;
  @media (max-width: 390px) {
    font-size: 0.5rem;
  }
`;

export const EditIcon = styled(Edit)`
  width: 30px;
  height: 30px;
  color: #548687;
  border: 1px solid #548687;
  border-radius: 20px;
  margin: 0;
  padding: 2px;
  margin-left: 4px;
  &:hover {
    color: #548687;
    border: 1px solid #548687;
    transition: all 0.5s ease-in-out;
    transform: scale(1.1, 1.1);
  }
`;

export const DeleteIcon = styled(Delete)`
  width: 30px;
  height: 30px;
  color: #b0413e;
  border-radius: 20px;
  border: 1px solid #b0413e;
  margin-left: 4px;
  &:hover {
    color: #b0413e;
    border: 1px solid #b0413e;
    transition: all 0.5s ease-in-out;
    transform: scale(1.1, 1.1);
  }
`;

export const NoteIcon = styled(Note)`
  width: 30px;
  height: 30px;
  color: #2176ae;
  border-radius: 20px;
  border: 1px solid #2176ae;
  &:hover {
    color: #2176ff;
    border: 1px solid #2176ff;
    transition: all 0.5s ease-in-out;
    transform: scale(1.1, 1.1);
  }
`;
export const TaskItemDiv = styled.div`
  display: flex;
  align-items: center;
`;
