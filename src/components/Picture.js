import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    100% {
        opacity:1;
    }
`;
const StyledPicture = styled.div`
  opacity: 0;
  animation: ${kf} 0.8s ease-in-out forwards;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.darkBackground};
  font-family: ${(props) => props.theme.font};
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto 2%;
  border-radius: 10%;
  width: 95%;
  img {
    border-radius: 10%;
    margin: 2% auto;
    &:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.02);
    }
  }
  &:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.02);
    }
`;

export default function Picture(props) {
  const { dailyPicture } = props;

  return (
    <StyledPicture>
      <img alt="Nasa's Daily and ever-changing photograph" src={dailyPicture} />
    </StyledPicture>
  );
}
