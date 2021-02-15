import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { WeatherPage } from './components/reusable-components/weather-page/WeatherPage';
import 'antd/dist/antd.css';
import { Header } from './components/Header';
import { TopPage } from './components/TopPage';
import { NotFoundPage } from './NotFoundPage';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path='/metaweather-app' component={TopPage} />
          <Route exact path='/tokyo' render={() => <WeatherPage city='tokyo'/>} />
          <Route exact path='/nagoya' render={() => <WeatherPage city='nagoya'/>} />
          <Route exact path='/osaka' render={() => <WeatherPage city='osaka'/>} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

