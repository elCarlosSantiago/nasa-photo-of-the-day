import React, { useState, useEffect } from 'react';
import './App.css';
import { BASE_URL, API_KEY } from './constants/index';
import axios from 'axios';
import Nav from './components/Nav';
import Explain from './components/Explain';
import Footer from './components/Footer';
import Picture from './components/Picture';

function App() {
  const [dailyPicture, setDailyPicture] = useState(null);
  const [date, setDate] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchDate = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          setDate(res.data.date);
        })
        .catch((err) => {
          debugger;
        });
    };
    fetchDate();
  }, []);

  useEffect(() => {
    const fetchTitle = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          setTitle(res.data.title);
        })
        .catch((err) => {
          debugger;
        });
    };
    fetchTitle();
  }, []);

  useEffect(() => {
    const fetchPictures = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          setDailyPicture(res.data.url);
        })
        .catch((err) => {
          debugger;
        });
    };
    fetchPictures();
  }, []);

  useEffect(() => {
    const fetchExplanation = () => {
      axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((res) => {
          setExplanation(res.data.explanation);
        })
        .catch((err) => {
          debugger;
        });
    };
    fetchExplanation();
  }, []);

  return (
    <div className="App">
      <Nav date={date} title={title}/>
      <Picture dailyPicture={dailyPicture}/>
      <Explain explanation={explanation}/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
