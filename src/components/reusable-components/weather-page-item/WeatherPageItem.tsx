import React from 'react';
import dayjs from 'dayjs';
import { Card, Space, Descriptions } from 'antd';
import { localWeather, localWindDirection, replaceDayOfWeek } from '../../../constants';
import './WeatherPageItem.style.scss';

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

  const isToday = (date: string): boolean => {
    return dayjs(data.applicable_date).format('MM/DD') === dayjs().format('MM/DD');
  }

  const dateWithDay = (): string => {
    return dayjs(data.applicable_date).format('MM/DD')
      + '('
      + replaceDayOfWeek(dayjs(data.applicable_date).day()).day
      + ')';
  }

  return (
    <Card type="inner" title={dateWithDay()}>
      <div className="weather-container">
        <div className='weather-icon'>
          <img src={iconUrl} className="weather-icon-item" alt='icon'/>
        </div>
        <div className="weather-description-wrapper">
          <Descriptions bordered>
            <Descriptions.Item label="天気">{localWeather(data.weather_state_name)}</Descriptions.Item>
            <Descriptions.Item label="風向き">{localWindDirection(data.wind_direction_compass)}</Descriptions.Item>
            <Descriptions.Item label="最高気温">{Math.round(data.max_temp * 10) / 10}℃</Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </Card>
  )
}
