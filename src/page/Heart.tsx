import React from "react";
import styled from "styled-components";
import fast from "../assets/Fast.jpeg";
import star from "../assets/star.png";

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 74px;
`;

const Heart = () => {
  return (
    <Container>
      <div className="flex justify-between items-center px-6 mb-4">
        <svg
          className="rotate-180 w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
        <div className="font-bold text-2xl">즐겨찾기</div>
        <div className="text-blue-400 font-semibold text-lg">수정</div>
      </div>
      <div className="flex justify-between items-center px-6 py-3">
        <div className="font-extrabold text-xl">총 1개</div>
        <div className="flex items-center">
          <span className="font-semibold mr-1">자주 주문한 순</span>
          <svg
            className="rotate-180  w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
          </svg>
        </div>
      </div>
      <div className="p-1 bg-gray-100"></div>
      <div className="flex p-4">
        <div className="w-28 h-28 bg-yellow-300 shadow-none mr-1"></div>
        <div className="p-2">
          <div className="flex items-center mb-1">
            <div className="font-bold mr-3 text-base">버거킹 신논현역점</div>
            <img className="w-14 h-4" src={fast}></img>
          </div>
          <div className="flex items-center mb-1">
            <img className="w-4 h-4 mr-1" src={star}></img>
            <span className="font-medium text-sm">4.6(7,420)</span>
          </div>
          <div className="flex">
            <div className="mr-1 font-medium text-sm">1.2km * 15-25 분 *</div>
            <div className="font-semibold text-sm">무료배달~</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Heart;
