import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WeatherPage from './components/reusable-components/WeatherPage';
import 'antd/dist/antd.css';
import { Header } from './components/Header';
import { TopPage } from './components/TopPage';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={TopPage} />
          <Route exact path='/tokyo' render={() => <WeatherPage city='tokyo'/>} />
          <Route exact path='/nagoya' render={() => <WeatherPage city='nagoya'/>} />
          <Route exact path='/osaka' render={() => <WeatherPage city='osaka'/>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

