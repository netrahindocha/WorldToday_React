import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15; 
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<News pageSize={this.pageSize} key="general" country='in' category='general' />} />
            <Route path="/business" element={<News pageSize={this.pageSize} key="business" country='in' category='business' />} />
            <Route path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" country='in' category='entertainment' />} />
            <Route path="/health" element={<News pageSize={this.pageSize} key="health" country='in' category="health" />} />
            <Route path="/science" element={<News pageSize={this.pageSize} key="science" country='in' category="science" />} />
            <Route path="/sports" element={<News pageSize={this.pageSize} key="sports" country='in' category="sports" />} />
            <Route path="/technology" element={<News pageSize={this.pageSize} key="technology" country='in' category="technology" />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
// rgb(114 174 129)
// rgb(235, 175, 64)
// rgb(242, 133, 116)
// rgb(174, 187, 224)