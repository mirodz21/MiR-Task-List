import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  padding: 10px;
`;
export const OutsideDiv = styled.div`
  width: 650px;
  height: auto;
  margin: auto;
  background: #e5e7e6;
  box-shadow: rgba(0, 0, 0.3) 0px 5px 10px;
  align-items: center;
  text-align: left;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  @media (max-width: 390px) {
    width: 350px;
  }
`;

export const Title = styled.h3`
  color: white;
  font-size: 25px;
`;
