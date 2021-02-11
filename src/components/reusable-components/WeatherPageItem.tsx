import React from 'react';
import { Card } from 'antd';

interface Data {
  id: number;
  weather_state_abbr: string,
  applicable_date: string;
  weather_state_name: string;
  wind_direction_compass: string;
  max_temp: number;
}

interface Props {
  data: Data,
  key: number,
}

export const WeatherPageItem: React.FC<Props> = ({ data}) => {
  const iconUrl = `https://www.metaweather.com/static/img/weather/png/64/${data.weather_state_abbr}.png`;

  return (
    <Card type="inner" title={data.applicable_date}>
      <div>
        <div className='weather-icon'>
          <img src={iconUrl} alt='icon'/>
        </div>
        weather: {data.weather_state_name}
        wind direction: {data.wind_direction_compass}
        Max temperature: {Math.round(data.max_temp * 10) / 10}
      </div>
    </Card>
  )
}
