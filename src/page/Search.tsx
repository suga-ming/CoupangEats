import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 74px;
`;

const Input = styled.input`
  border: 1px solid rgba(192, 192, 192, 0.8);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgb(192 192 192 / 64%);
  width: 280px;
  height: 37px;
  margin-right: 20px;
  padding: 15px;
  &::placeholder {
    color: #3b3b3b;
    font-weight: 500;
  }
`;

const Food = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  /* width: 290px; */
  place-items: center;
  padding: 0 15px;
`;

const Img = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: orange;
  margin-bottom: 8px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

const ImgText = styled.div`
  font-weight: 800;
`;

const Search = () => {
  return (
    <Container>
      <form className="flex justify-center items-center p-2 mb-4">
        <Input placeholder="먹고 싶은 메뉴를 찾아보세요!" />
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#515151"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
          />
        </svg>
      </form>
      <Food>
        <ImgBox className="relative">
          <Img />
          <ImgText>포장</ImgText>
          <div className="absolute bg-red-600 rounded-full w-8 h-8 flex justify-center items-center text-white font-semibold text-xs p-4 right-1">
            New
          </div>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>한식</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>치킨</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>분식</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>돈까스</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>족발/보쌈</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>찜/탕</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>구이</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>피자</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>중식</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>일식</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>회/해물</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>일식</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>일식</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>일식</ImgText>
        </ImgBox>
      </Food>
      <Footer />
    </Container>
  );
};

export default Search;
