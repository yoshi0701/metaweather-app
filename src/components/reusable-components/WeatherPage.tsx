import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { WeatherPageItem } from './WeatherPageItem';
import axios from 'axios';
import { Card, Tabs, Spin } from 'antd';

interface City {
  city: string;
}

export const WeatherPage: React.FC<City> = (city) => {
  interface WeatherResponse {
    id: number;
    weather_state_abbr: string;
    applicable_date: string;
    weather_state_name: string;
    max_temp: number,
    wind_direction_compass: string;
  }

  const style: { [key: string]: string} = {
    paddingTop: '50px',
    textAlign: 'center',
    fontSize: 'x-large',
    color: 'lightskyblue',
  }

  const { TabPane } = Tabs;
  const cityName = city;

  const [forecastData, setForecastData] = useState<WeatherResponse[]>([
    { id: 0,
      weather_state_abbr: '',
      applicable_date: '',
      weather_state_name: '',
      max_temp: 0,
      wind_direction_compass: ''
    }]
  )

  const [reportData, setReportData] = useState<WeatherResponse[]>([
    { id: 0,
      weather_state_abbr: '',
      applicable_date: '',
      weather_state_name: '',
      max_temp: 0,
      wind_direction_compass: ''
    }]
  )

  const [isLoading, setIsLoading] = useState(false);

  const cityCode = (): number | undefined => {
    switch (cityName.city) {
      case 'tokyo':
        return 1118370
      case 'nagoya':
        return 1117817
      case 'osaka':
        return 15015370
      default:
        console.error('city does not match')
    }
  }

  useEffect(() => {
    const fetchForecastData = async () => {
      setIsLoading(true);
      const weatherArray: any[] = [];
      for (let date = 0; date < 7; date++) {
        const incrementDay = dayjs().add(date, 'day').format('YYYY/MM/DD')
        const response = await axios.get(
          process.env.REACT_APP_PROXY_URL + `https://www.metaweather.com/api/location/${cityCode()}/${incrementDay}`
        );

        weatherArray.push(response.data[0]);
      }
      setForecastData(weatherArray)
      setIsLoading(false);
    };

    const fetchReportData = async () => {
      const weatherReportArray: any[] = [];
      for (let date = 1; date < 7; date++) {
        const decrementDay = dayjs().subtract(date, 'day').format('YYYY/MM/DD')
        const response = await axios.get(
          process.env.REACT_APP_PROXY_URL + `https://www.metaweather.com/api/location/${cityCode()}/${decrementDay}`
        );

        weatherReportArray.push(response.data[0]);
      }
      setReportData(weatherReportArray.reverse())
    };
    fetchReportData();
    fetchForecastData();
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div style={style} className="loading-status">
            Loading ...
            <Spin size="large" />
          </div>
        ) : ( <Tabs defaultActiveKey="2" type="card" size="large">
            <TabPane tab="先週の天気" key="1">
              <Card title="先週の天気">
                {reportData.map(data =>
                  <WeatherPageItem data={data} key={data.id} />
                )}
              </Card>
            </TabPane>
            <TabPane tab="今週の天気" key="2">
              <Card title="今週の天気">
                {forecastData.map(data =>
                  <WeatherPageItem data={data} key={data.id} />
                )}
              </Card>
            </TabPane>
          </Tabs>
        )}
      </div>
    </>
  )
};
