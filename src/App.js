import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';

let App = (props) => {
  
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  
  let [progress, setProgress] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country='in' category='general' />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country='in' category='business' />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country='in' category='entertainment' />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country='in' category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country='in' category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country='in' category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country='in' category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

// rgb(114 174 129)
// rgb(235, 175, 64)
// rgb(242, 133, 116)
// rgb(174, 187, 224)