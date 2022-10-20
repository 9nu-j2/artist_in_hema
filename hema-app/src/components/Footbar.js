import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const BigText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #90949b;
`;

const SmallText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #90949b;
`;

const Blank = styled.div`
  height: 40px;
  background-color: white;
`;

const Footbar = () => {
  return (
    <Container>
      <About>
        <Blank></Blank>
        <BigText>서비스</BigText>
        <SmallText>기능건의👉</SmallText>
        <SmallText>문의사항👉</SmallText>
      </About>
      <About>
        <Blank></Blank>
        <BigText>안내</BigText>
        <SmallText>이메일: jungu269@gmail.com</SmallText>
        <SmallText>Hosted on google firebase</SmallText>
      </About>
    </Container>
  );
};

export default Footbar;
