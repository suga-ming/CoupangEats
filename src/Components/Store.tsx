import styled from "styled-components";
import { Flex } from "../page/Home";
import fast from "../assets/Fast.jpeg";
import star from "../assets/star.png";

const Container = styled.div`
  margin-bottom: 10px;
`;
const StoreImgBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Img2Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
`;
const Img1 = styled.div`
  width: 248px;
  height: 184px;
  background-color: red;
  margin-top: 4px;
`;
const Img2 = styled.div`
  width: 90px;
  height: 90px;
  background-color: red;
  margin-top: 4px;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 5px 5px;
`;
const StoreText = styled.div`
  font-weight: 800;
  margin-left: 11px;
  margin-top: 3px;
`;
const FastImg = styled.img`
  width: 55px;
  height: 16px;
  margin-left: 10px;
`;

const StarImg = styled.img`
  width: 16px;
  height: 16px;
`;
const TimeText = styled.div`
  margin-right: 15px;
  font-size: 13px;
  font-weight: 500;
`;
const SubText = styled.div`
  margin-left: 15px;
  font-size: 12px;
  margin-bottom: 6px;
`;
const Packaging = styled.div`
  color: white;
  background-color: black;
  padding: 3px;
  border-radius: 5px;
  width: 54px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 16px;
  text-align: center;
`;

const Store = () => {
  return (
    <Container>
      <StoreImgBox>
        <Img1 />
        <Img2Box>
          <Img2 />
          <Img2 />
        </Img2Box>
      </StoreImgBox>
      <TextBox>
        <Flex>
          <StoreText>응큼떡볶이</StoreText>
          <FastImg src={fast} />
        </Flex>
        <TimeText>16-26 분</TimeText>
      </TextBox>
      <SubText>
        <Flex>
          <StarImg src={star} />
          4.8 (1,729) * 1.1km * 무료배달~
        </Flex>
      </SubText>
      <Packaging>포장 가능</Packaging>
    </Container>
  );
};

export default Store;
