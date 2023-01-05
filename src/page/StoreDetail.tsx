import styled from "styled-components";
import banner from "../assets/storeBanner.png";
import fast from "../assets/Fast.jpeg";
import cat from "../assets/cat.jpeg";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";

const Banner = styled.div`
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 222px;
`;

const Coupon = styled.div`
  border: 1.5px solid rgba(0, 175, 252);
  color: rgba(0, 175, 252);
  width: 100%;
  padding: 12px 0;
  text-align: center;
  margin-top: 8px;
  font-weight: 700;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StoreInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d1d5db;
  background-color: white;
  box-shadow: 0px 1px 4px -1px rgba(106, 111, 109);
`;

const Lists = styled.div`
  border-bottom: 1px solid #ebeced;
`;

const ActiveList = styled.div`
  width: 50%;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 175, 252);
  border-bottom: 3px solid rgba(0, 175, 252);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  width: 50%;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  color: black;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownSvg = styled.svg`
  width: 14px;
  height: 14px;
  transform: rotate(270deg);
  /* transform: ; */
`;

const Review = styled.div`
  border: 1px solid #d1d5db;
  border-radius: 8px;
  display: flex;
  padding: 16px;
  margin-top: 18px;
`;

const StoreDetail = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };
  return (
    <div className="relative">
      <Banner />
      <svg
        onClick={goHome}
        className="rotate-180 w-6 h-6 absolute top-12 left-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="white"
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        />
      </svg>
      <svg
        className="w-6 h-6 absolute top-12 right-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="white"
          d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        />
      </svg>
      <svg
        className="w-6 h-6 absolute top-12 right-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="white"
          d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
        />
      </svg>
      <div className="bg-black opacity-40 text-white absolute top-36 px-3 h-5 right-5 text-xs rounded-full flex items-center">
        1 / 3
      </div>
      <div className="px-5 w-full absolute top-44">
        <StoreInfo>
          <div className="text-2xl font-bold mb-2">과일샵CAFE.리치 서초점</div>
          <div className="flex items-center mb-4">
            <img className="w-13 h-4 mr-2" src={fast} />
            <div className="flex items-center">
              <img className="w-6 h-6" src={star} />
              <div>4.8(150)</div>
            </div>
          </div>
          <div className="px-3 w-full">
            <Coupon>
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="rgba(0,175,252)"
                  d="M344 240h-56L287.1 152c0-13.25-10.75-24-24-24h-16C234.7 128 223.1 138.8 223.1 152L224 240h-56c-9.531 0-18.16 5.656-22 14.38C142.2 263.1 143.9 273.3 150.4 280.3l88.75 96C243.7 381.2 250.1 384 256.8 384c7.781-.3125 13.25-2.875 17.75-7.844l87.25-96c6.406-7.031 8.031-17.19 4.188-25.88S353.5 240 344 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
                />
              </svg>
              포장 1,000원 쿠폰 받기
            </Coupon>
          </div>
        </StoreInfo>
      </div>
      <Lists className="flex justify-center mt-36">
        <ActiveList>
          <div className="mr-1 font-semibold">배달</div>
          <div> 12-22분</div>
        </ActiveList>
        <List>
          <div className="mr-1 font-semibold">포장</div>
          <div> 10-20분</div>
        </List>
      </Lists>
      <div className="flex justify-between px-5 py-4">
        <div className="flex items-center">
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
          </svg>
          <div className="font-semibold ml-1 text-sm">도착까지 약 12-22분</div>
        </div>
        <div className="flex items-center">
          <div className="mr-1 text-sm">매장 * 원산지정보</div>
          <DownSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </DownSvg>
        </div>
      </div>
      <div className="pl-5">
        <div className="flex mb-2 items-center">
          <div className="text-sm text-gray-600 font-medium mr-12">배달비</div>
          <div className="text-sm font-medium mr-2">무료배달~</div>
          <div className="text-sm bg-gray-100 p-2 h-6 rounded-full flex justify-center items-center">
            자세히
          </div>
        </div>
        <div className="flex">
          <div className="text-sm text-gray-600 font-medium mr-9">최소주문</div>
          <div className="text-sm font-medium">9,800원</div>
        </div>
      </div>
      <div className="px-4 flex">
        <Review>
          <img className="w-16 h-16 mr-3" src={cat} />
          <div className="flex flex-col justify-between">
            <div>저희집 고양이도 탐내는 수박,,</div>
            <div className="flex">
              <img className="w-5 h-5" src={star} />
              <img className="w-5 h-5" src={star} />
              <img className="w-5 h-5" src={star} />
              <img className="w-5 h-5" src={star} />
              <img className="w-5 h-5" src={star} />
            </div>
          </div>
        </Review>
      </div>
    </div>
  );
};

export default StoreDetail;
