import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:seacrhTerm">
            
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
