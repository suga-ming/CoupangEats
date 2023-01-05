import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import food from "../assets/food.png";
import chicken from "../assets/chicken.png";

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 74px;
`;

const ActiveList = styled.div`
  width: 50%;
  text-align: center;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1.5px solid black;
  font-weight: 500;
  color: black;
`;

const List = styled.div`
  width: 50%;
  text-align: center;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  color: #9ca3af;
  font-weight: 500;
`;

const ListArea = styled.div`
  padding: 16px;
  border: 1px solid #cdcdcd;
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

const StoreName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24px;
  font-weight: 500;
  width: 95%;
  margin-bottom: 3px;
`;

const Prepare = () => {
  const navigate = useNavigate();
  const prepareMatch = useMatch("/order/prepare");

  const goList = () => {
    navigate("/order");
  };

  return (
    <Container>
      <div className="flex justify-center mb-5">
        <List onClick={goList}>과거 주문 내역</List>
        <ActiveList className="w-6/12 text-center p-4 text-base text-gray-400">
          준비중
        </ActiveList>
      </div>
      <ListArea>
        <div className="flex justify-between px-2 py-1 mb-4">
          <div>
            <StoreName>후라이드 참 잘하는 집</StoreName>
            <div className="text-gray-500 mb-2">2023-01-05 오후 07:39</div>
            <div className="font-medium text-coupang_blue ml-5">
              메뉴 준비중
            </div>
          </div>
          <img src={chicken} className="w-20 h-20"></img>
        </div>
        <div className="flex items-start mb-5">
          <div className="bg-gray-100 w-4 h-4 text-center text-xs mr-2 mt-1 ml-2">
            1
          </div>
          <div>
            <div className="text-base font-medium">후라이드 치킨</div>
            <div className="text-base font-medium">순살</div>
          </div>
        </div>
        <div className="flex mb-8">
          <div className="font-medium mr-2 ml-2">합계:</div>
          <div className="font-semibold"> 18,000원</div>
        </div>
        <div className="mx-1 mb-9">
          <div className="w-full bg-coupang_blue text-white font-semibold py-3 rounded text-center">
            배달 현황 보기
          </div>
        </div>
        <Receipt>영수증 보기</Receipt>
      </ListArea>
      <Footer />
    </Container>
  );
};

export default Prepare;
