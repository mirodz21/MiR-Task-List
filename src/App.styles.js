import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  padding: 10px 10px 10px 10px;
`;

// BEIGE BOX
export const OutsideDiv = styled.div`
  width: 650px;
  height: auto;
  margin: auto;
  background: #e5e7e6;
  box-shadow: rgba(0, 0, 0.3) 0px 5px 10px;
  align-items: center;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 500px) {
    width: 370px;
  }
`;

export const Title = styled.h3`
  color: white;
  font-size: 25px;
`;
