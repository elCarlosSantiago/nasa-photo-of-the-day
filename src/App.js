import React, { useState, useEffect } from 'react';
import './App.css';
import { BASE_URL, API_KEY } from './constants/index';
import axios from 'axios';
import Nav from './components/Nav';
import Explain from './components/Explain';
import Picture from './components/Picture';

function App() {
  const [dailyPicture, setDailyPicture] = useState(null);
  const [date, setDate] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');
  const [copyright, setCopyright] =useState('');

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          setTitle(res.data.title);
          setExplanation(res.data.explanation)
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
    <div className="App">
      <Nav date={date} title={title}/>
      <Picture dailyPicture={dailyPicture}/>
      <Explain explanation={explanation} copyright={copyright}/>
    </div>
  );
}

export default App;
