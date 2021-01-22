import React, { useState, useEffect } from 'react';
import './App.css';
import { BASE_URL, API_KEY } from './constants/index';
import axios from 'axios';
import Nav from './components/Nav';
import Explain from './components/Explain';
import Picture from './components/Picture';
import styled, { keyframes } from 'styled-components';

function App() {
  const [dailyPicture, setDailyPicture] = useState(null);
  const [date, setDate] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [copyright, setCopyright] = useState('');

  const kf = keyframes`
      100% {
          opacity:1;
      }
  `;
  const StyledApp = styled.div`
    opacity: 0;
    animation: ${kf} 0.8s ease-in-out forwards;
    color: ${(props) => props.theme.firstColor};
    background-color: ${(props) => props.theme.lightBackground};
    font-family: ${(props) => props.theme.font};
  `;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          setTitle(res.data.title);
          setExplanation(res.data.explanation);
          setDailyPicture(res.data.url);
          setDate(res.data.date);
          setCopyright(res.data.copyright);
        })
        .catch((err) => {
          debugger;
        });
    };
    fetchData();
  }, []);

  return (
    <StyledApp>
      <Nav date={date} title={title} />
      <Picture dailyPicture={dailyPicture} />
      <Explain explanation={explanation} copyright={copyright} />
    </StyledApp>
  );
}

export default App;
