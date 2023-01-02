import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BrowserPage = () => {
  return (
    <Wrapper>
      <p>모바일로 접속해주세요</p>
      <p>
        아쉽게도 PC는 지원하지 않아요😥 <br />
        모바일환경에서 이용해주세요!
      </p>
    </Wrapper>
  );
};

export default BrowserPage;
