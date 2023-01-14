import styled from "styled-components";

// MODAL BODY
export const ModalBody = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
// MODAL
export const ModalContainer = styled.form`
  width: 500px;
  height: auto;
  border-radius: 12px;
  background-color: #e7ecef;
  box-shadow: 2px 3px #7b904b;
  border: 0.5px solid #002400;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: absolute;
  top: 30%;
  @media (max-width: 390px) {
    width: 300px;
  }
`;

export const ModalInput = styled.input`
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  @media (max-width: 390px) {
    margin-top: 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;
export const ConfirmEditButton = styled.button`
  width: 5rem;
  height: 2rem;
  font-weight: bold;
  font-size: 0.7rem;
  background-color: #0e402d;
  border: 1px solid #e5e7e6;
  color: #e5e7e6;
  margin-right: 8px;
  &:hover {
    color: #0e402d;
    background-color: #a3b18a;
    border: 1px solid gray;
  }
`;
export const ModalButton = styled.button`
  width: 5rem;
  height: 2rem;
  font-weight: bold;
  font-size: 0.7rem;
  background-color: #0e402d;
  border: 1px solid #e5e7e6;
  color: #e5e7e6;
  &:hover {
    color: #0e402d;
    background-color: #a3b18a;
    border: 1px solid gray;
  }
`;

export const EditInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
`;
