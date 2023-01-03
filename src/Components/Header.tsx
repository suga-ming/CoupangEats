import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: white;
`;

const Box1 = styled.div`
  display: flex;
  align-items: center;
`;

const Svg1 = styled.svg`
  width: 15px;
  margin-right: 10px;
`;

const Svg2 = styled.svg`
  width: 15px;
  transform: rotate(180deg);
  margin-left: 3px;
`;

const Svg3 = styled.svg`
  width: 20px;
`;

const Svg4 = styled.svg`
  width: 20px;
  margin-left: 25px;
`;

const Header = () => {
  return (
    <Container>
      <Box1>
        <Svg1 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
        </Svg1>
        <div>서울 영등포구 양평동 4가</div>
        <Svg2 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
        </Svg2>
      </Box1>
      <Box1>
        <Svg3 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
        </Svg3>
        <Svg4 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </Svg4>
      </Box1>
    </Container>
  );
};

export default Header;
