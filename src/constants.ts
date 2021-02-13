interface DayWithColor {
  day: string,
  color?: string,
}

export const localWeather = (weather: string) => {
  switch(weather) {
    case 'Snow':
      return '雪'
    case 'Sleet':
      return 'みぞれ'
    case 'Hail':
      return '雹'
    case 'Thunderstorm':
      return '雷雨'
    case 'Heavy Rain':
      return '大雨'
    case 'Light Rain':
      return '小雨'
    case 'Showers':
      return 'にわか雨'
    case 'Heavy Cloud':
      return '曇り'
    case 'Light Cloud':
      return '曇のち晴れ'
    case 'Clear':
      return '晴れ'
    default:
      return '不明'
  }
}

export const localWindDirection = (windDirection: string) => {
  switch(windDirection) {
    case 'N':
      return '北'
    case 'NNE':
      return '北北東'
    case 'NE':
      return '北東'
    case 'ENE':
      return '東北東'
    case 'E':
      return '東'
    case 'ESE':
      return '東南東'
    case 'SE':
      return '南東'
    case 'SSE':
      return '南南東'
    case 'S':
      return '南'
    case 'SSW':
      return '南南西'
    case 'SW':
      return '南西'
    case 'WSW':
      return '西南西'
    case 'W':
      return '西'
    case 'WNW':
      return '西北西'
    case 'NW':
      return '北西'
    case 'NNW':
      return '北北西'
    default:
      return '不明'
  }
}

export const replaceDayOfWeek = (dayjsDayNumber: number): DayWithColor => {
  switch(dayjsDayNumber) {
    case 0:
      return { day: '日', color: 'red'}
    case 1:
      return { day: '月' }
    case 2:
      return { day: '火' }
    case 3:
      return { day: '水' }
    case 4:
      return { day: '木' }
    case 5:
      return { day: '金' }
    case 6:
      return { day: '土', color: 'blue' }
    default:
      return { day: '不明' }
  }
}
