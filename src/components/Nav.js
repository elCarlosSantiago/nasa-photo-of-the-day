import React from 'react';
import styled, { keyframes } from 'styled-components';


const kf = keyframes`
    100% {
        opacity:1;
    }
`;

const StyledNav = styled.div`
  opacity: 0;
  animation: ${kf} 0.8s ease-in-out forwards;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.darkBackground};
  font-family: ${(props) => props.theme.font};
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto 1.5%;

  h1 {
    &:hover {
      transform: scale(1.05);
      color: ${(props) => props.theme.secondColor};
      transition: all 0.4s ease-in-out;
    }
  }
  h2 {
    &:hover {
      transform: scale(1.05);
      color: ${(props) => props.theme.secondColor};
      transition: all 0.4s ease-in-out;
    }
  }
`;

export default function Nav(props) {
  const { title, date } = props;

  return (
    <StyledNav>
      <h1>{title}</h1>
      <h2>{date}</h2>
    </StyledNav>
  );
}
