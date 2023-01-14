import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin: auto;
  border-radius: 5px;
  align-items: center;
  background: #295135;
  padding: 10px 20px;
  margin-top: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: auto;
`;

export const Input = styled.input`
  width: 90%;
  padding: 7px;
  margin-right: 10px;
  font-size: 15px;
  outline: none;
  background: #e5e7e6;
`;

export const FormButton = styled.button`
  width: 5rem;
  height: 2rem;
  font-weight: bold;
  font-size: 0.7rem;
  background-color: #0e402d;
  border: 2px solid #e5e7e6;
  color: #e5e7e6;
  &:hover {
    color: #0e402d;
    background-color: #a3b18a;
    transition: all 0.5s ease-in-out;
    transform: scale(1.05, 1.05);
    border: 1px solid gray;
  }
`;

export const Title = styled.label`
  color: #e5e7e6;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: "Norican";
  font-weight: 500;
`;
