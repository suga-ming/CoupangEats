import styled from "styled-components";
import logo from "../assets/Logo.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Logo = styled.img`
  width: 300px;
  height: 99px;
`;

const MobilePage = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};

/** styled components */

export default MobilePage;
