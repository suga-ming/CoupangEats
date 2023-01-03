import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import banner from "../assets/banner.png";
import Store from "../Components/Store";

const Container = styled.div`
  margin-top: 54px;
  margin-bottom: 74px;
`;

const Banner = styled.div`
  position: relative;
`;

const BannerImg = styled.img`
  width: 100%;
`;

const Event = styled.div`
  position: absolute;
  bottom: 9px;
  right: 6px;
  color: white;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 5px;
  font-size: 12px;
`;

const Food = styled.div`
  display: flex;
  padding: 10px 0 10px 20px;
  border-bottom: 1px solid #d7d6d6;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`;

const Img = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: pink;
  margin-bottom: 8px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const ImgText = styled.div`
  font-weight: 800;
`;

const Text1 = styled.div`
  font-weight: 800;
  padding: 15px 0 10px 25px;
`;

const TwoBox = styled.div`
  display: flex;
`;

const SmallBox = styled.div`
  display: flex;
  align-items: center;
  &:last-child {
    border-right: 1px solid #d7d6d6;
    padding-right: 5px;
  }
`;

const SmallText = styled.div`
  font-size: 12px;
  margin-right: 5px;
`;

const SamllImg = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #c869ff;
  margin-right: 5px;
  margin-left: 14px;
`;

const ResetBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 1px solid #d7d6d6;
  border-radius: 30px;
  padding: 4px;
  font-size: 12px;
  width: 80px;
  margin-left: 10px;
`;

const Svg5 = styled.svg`
  width: 14px;
  margin-right: 5px;
`;

const Reset = styled.div`
  font-size: 13px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Banner>
        <BannerImg src={banner} />
        <Event>이벤트 전체보기</Event>
      </Banner>
      <Food>
        <ImgBox>
          <Img />
          <ImgText>포장</ImgText>
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
          <ImgText>양식</ImgText>
        </ImgBox>
        <ImgBox>
          <Img />
          <ImgText>일식</ImgText>
        </ImgBox>
      </Food>
      <Text1>골라먹는 맛집</Text1>
      <TwoBox>
        <Flex>
          <SmallBox>
            <SamllImg />
            <SmallText>치타배달</SmallText>
          </SmallBox>
          <SmallBox>
            <SamllImg />
            <SmallText>이츠오리지널</SmallText>
          </SmallBox>
          <SmallBox>
            <SamllImg />
            <SmallText>블루리본</SmallText>
          </SmallBox>
        </Flex>
        <ResetBox>
          <Svg5 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
          </Svg5>
          <Reset>초기화</Reset>
        </ResetBox>
      </TwoBox>
      <Store />
      <Store />
      <Store />
    </Container>
  );
};

export default Home;
