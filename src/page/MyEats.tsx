import styled from "styled-components";
import Footer from "../Components/Footer";

const Container = styled.div`
  margin-top: 54px;
  margin-bottom: 74px;
`;

const MyEats = () => {
  return (
    <Container>
      <div className="text-xl font-semibold text-center">김보영</div>
      <div className="font-medium text-center">010-****-9701</div>
      <div className="flex justify-between px-16 mt-5">
        <div className="flex flex-col items-center">
          <div className="font-semibold text-xl">2</div>
          <div className="text-xs">내가 남긴 리뷰</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold text-xl">1</div>
          <div className="text-xs">도움이 됐어요</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold text-xl">3</div>
          <div className="text-xs">즐겨찾기</div>
        </div>
      </div>
      <div>자세히 보기</div>
      <img></img>
      <div>
        <span>주소 관리</span>
      </div>
      <div>
        <span>즐겨찾기</span>
      </div>
      <div>
        <span>할인쿠폰</span>
      </div>
      <div>
        <span>진행중인 이벤트</span>
      </div>
      <div>
        <span>이츠 룰렛</span>
      </div>
      <div>
        <span>결제관리</span>
      </div>
      <div>
        <span>배달파트너 모집</span>
      </div>
      <div>
        <span>자주 묻는 질문</span>
      </div>
      <div>
        <span>고객 지원</span>
      </div>
      <div>
        <span>설정</span>
      </div>
      <div>
        <span>공지 사항</span>
      </div>
      <div>
        <span>약관 * 개인정보 처리방침</span>
      </div>

      <Footer />
    </Container>
  );
};

export default MyEats;
