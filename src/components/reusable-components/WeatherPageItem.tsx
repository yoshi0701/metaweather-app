import React from 'react';
import { Card, Space } from 'antd';

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

  const style: { [key: string]: string} = {
    display: 'flex',
    fontSize: 'large'
  }

  const descriptionStyle : { [key: string]: string} = {
    paddingLeft: '15%',
    paddingTop: '10px',
  }

  return (
    <Card type="inner" title={data.applicable_date}>
      <div className="weather-container" style={style}>
        <div className='weather-icon'>
          <img src={iconUrl} alt='icon'/>
        </div>
        <div style={descriptionStyle} className="weather-description-wrapper">
          <Space size="middle">
            天気: {data.weather_state_name}
            風向き: {data.wind_direction_compass}
            最高気温: {Math.round(data.max_temp * 10) / 10}
          </Space>
        </div>
      </div>
    </Card>
  )
}
