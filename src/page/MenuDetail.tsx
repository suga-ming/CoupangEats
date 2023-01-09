import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import juice from "../assets/juice.jpeg";

const Img = styled.img`
  width: 100%;
`;

const Solid = styled.div`
  background-color: #e6e9ee;
  width: 100%;
  height: 1px;
`;

const Minus = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const Plus = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const MenuDetail = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };
  const [quantity, setQuantity] = useState(0);

  const onMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity);
    }
  };
  const onPlus = () => {
    if (quantity > 100) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-between ">
      <svg
        onClick={goHome}
        className="rotate-180 w-6 h-6 absolute top-12 left-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="white"
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        />
      </svg>
      <svg
        className="w-6 h-6 absolute top-12 right-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="white"
          d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        />
      </svg>
      <div className="flex flex-col">
        <Img src={juice} />
        <div className="px-5">
          <div className="font-semibold text-xl mb-3 mt-5">꿀 수박 쥬스</div>
          <div className="text-sm text-gray-400 mb-4">
            고당도 수박으로 보내드려요
          </div>
        </div>
        <Solid />
        <div className="flex justify-between px-5 py-5">
          <div className="font-semibold">가격</div>
          <div>4,000원</div>
        </div>
        <div className="flex justify-between px-5 py-2">
          <div className="font-semibold">수량</div>
          <div className="flex items-center justify-center">
            <Minus onClick={onMinus}>-</Minus>
            <div className="px-2">{quantity}</div>
            <Plus onClick={onPlus}>+</Plus>
          </div>
        </div>
      </div>
      <div className="w-full bg-coupang_blue text-white font-medium text-center pt-5 pb-10">
        배달 카트에 담기
      </div>
    </div>
  );
};

export default MenuDetail;
