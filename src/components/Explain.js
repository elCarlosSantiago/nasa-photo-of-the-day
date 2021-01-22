import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    100% {
        opacity:1;
    }
`;

const StyledExplain = styled.div`
  opacity: 0;
  animation: ${kf} 0.1s ease-in-out forwards;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.darkBackground};
  font-family: ${(props) => props.theme.font};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin: 0 auto;
  text-align: center;
  p {
    &::selection {
      color: ${(props) => props.theme.lightBackground};
    }
  }
  span {
    margin: 0 auto;
    font-size: 0.6rem;
    &::selection {
      color: ${(props) => props.theme.lightBackground};
    }
  }
`;

export default function Explain(props) {
  const { explanation, copyright } = props;

  return (
    <StyledExplain>
      <p>{explanation}</p>
      <p>Copyright: {copyright}</p>
      <span>Demo by elCarlosSantiago</span>
    </StyledExplain>
  );
}
