import styled from "styled-components";
import Footer from "../Components/Footer";
import food from "../assets/food.png";

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 74px;
`;

const Svg = styled.svg`
  transform: scaleX(-1);
  width: 15px;
  height: 15px;
  margin-right: 8px;
  margin-left: 13px;
`;

const ActiveList = styled.div`
  width: 50%;
  text-align: center;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1.5px solid black;
  font-weight: 500;
`;

const ListArea = styled.div`
  padding: 16px;
  border: 1px solid #b5b5b5;
  margin: 0 20px 10px 20px;
  border-radius: 10px;
  position: relative;
`;

const Reviw = styled.div`
  border: 1px solid rgba(0, 175, 252);
  color: rgba(0, 175, 252);
  width: 100%;
  padding: 12px 0;
  text-align: center;
  margin-top: 8px;
  font-weight: 600;
  border-radius: 4px;
`;

const Receipt = styled.div`
  background-color: #f3f3f3;
  margin-top: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 8px 0;
  text-align: center;
  font-weight: 500;
  font-size: 13px;
`;

const OrderList = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <ActiveList>과거 주문 내역</ActiveList>
        <div className="w-6/12 text-center p-4 text-base text-gray-400">
          준비중
        </div>
      </div>
      <div className="flex items-center bg-blue-100 p-3">
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#6d6d6d"
            d="M144 208C126.3 208 112 222.2 112 239.1C112 257.7 126.3 272 144 272s31.1-14.25 31.1-32S161.8 208 144 208zM256 207.1c-17.75 0-31.1 14.25-31.1 32s14.25 31.1 31.1 31.1s31.1-14.25 31.1-31.1S273.8 207.1 256 207.1zM368 208c-17.75 0-31.1 14.25-31.1 32s14.25 32 31.1 32c17.75 0 31.99-14.25 31.99-32C400 222.2 385.8 208 368 208zM256 31.1c-141.4 0-255.1 93.12-255.1 208c0 47.62 19.91 91.25 52.91 126.3c-14.87 39.5-45.87 72.88-46.37 73.25c-6.624 7-8.373 17.25-4.624 26C5.818 474.2 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25c28.87 9 60.16 14.25 92.9 14.25c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM256 400c-26.75 0-53.12-4.125-78.36-12.12l-22.75-7.125L135.4 394.5c-14.25 10.12-33.87 21.38-57.49 29c7.374-12.12 14.37-25.75 19.87-40.25l10.62-28l-20.62-21.87C69.81 314.1 48.06 282.2 48.06 240c0-88.25 93.24-160 207.1-160s207.1 71.75 207.1 160S370.8 400 256 400z"
          />
        </Svg>
        <div className="text-sm">아직 리뷰를 작성하지 않은 주문이</div>
        <div className="text-sm font-semibold mx-1">1건</div>
        <div className="text-sm">있어요</div>
      </div>
      <div className="flex px-6 py-3 w-full items-center">
        <input
          className="bg-gray-100 p-3 w-full mr-4 rounded-md"
          placeholder="  주문한 메뉴/매장을 찾아보세요"
        />
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#515151"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
          />
        </svg>
      </div>
      <ListArea>
        <div className="flex justify-between px-2 py-1 mb-4">
          <div>
            <div className="text-2xl font-semibold">카레섬 소바다</div>
            <div className="text-gray-500 mb-2">2021-10-25 오전 11:41</div>
            <div className="font-medium">배달 완료</div>
          </div>
          <img src={food} className="w-20 h-20"></img>
        </div>
        <div className="flex items-start mb-5">
          <div className="bg-gray-100 w-4 h-4 text-center text-xs mr-2 mt-1 ml-2">
            1
          </div>
          <div>
            <div className="text-sm font-medium">[시그니처]보물섬카레</div>
            <div className="text-sm font-medium">
              기본, 밥 추가, 시트추가 없음
            </div>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="font-medium mr-2 ml-2">합계:</div>
          <div className="font-semibold"> 12,900원</div>
        </div>
        <div className="mx-1">
          <div className="w-full bg-coupang_blue text-white font-semibold py-3 rounded text-center">
            재주문하기
          </div>
          <Reviw className="w-full border-4 border-black">리뷰 쓰기</Reviw>
        </div>
        <div className="text-gray-400 text-sm mt-2 mb-9 ml-1">
          리뷰 작성 기간이 10일 남았습니다.
        </div>
        <Receipt>영수증 보기</Receipt>
      </ListArea>
      <Footer />
    </Container>
  );
};

export default OrderList;
