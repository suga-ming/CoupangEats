import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  useEffect(() => {
    let timer = setTimeout(() => {
      navigate("/home");
    }, 1500);
  });

  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};

/** styled components */

export default MobilePage;
