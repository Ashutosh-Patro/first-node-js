function getWeatherData(location) {
    const weatherData = [
        {
            location: 'kolkata',
            tempC: '31.0',
            tempF: '88.0',

            condition: {
                text: 'Mist',
                humidity: '43',
                feelsLikeC: '30.7',
                feelsLikeF: '87.2'
            }

        },
        {
            location: 'london',
            tempC: '4.0',
            tempF: '39.2',

            condition: {
                text: 'Overcast',
                humidity: '75',
                feelsLikeC: '1.2',
                feelsLikeF: '34.2'
            }

        },
        {
            location: 'Ottawa',
            tempC: '-3.4',
            tempF: '25.9',

            condition: {
                text: 'Clear',
                humidity: '67',
                feelsLikeC: '-8.4',
                feelsLikeF: '16.9'
            }

        },
        {
            location: 'Mexico City',
            tempC: '20.0',
            tempF: '68.0',

            condition: {
                text: 'Clear',
                humidity: '26',
                feelsLikeC: '20.0',
                feelsLikeF: '68.0'
            }

        },
        {
            location: 'Brasilia',
            tempC: '19.0',
            tempF: '66.2',

            condition: {
                text: 'Clear',
                humidity: '94',
                feelsLikeC: '19.0',
                feelsLikeF: '66.2'
            }

        },
        {
            location: 'Paris',
            tempC: '1.0',
            tempF: '33.8',

            condition: {
                text: 'Mist',
                humidity: '93',
                feelsLikeC: '-2.0',
                feelsLikeF: '28.5'
            }

        }, {
            location: 'Chicago',
            tempC: '1.5',
            tempF: '34.7',

            condition: {
                text: 'Partly cloudy',
                humidity: '80',
                feelsLikeC: '-2.8',
                feelsLikeF: '27.0'
            }

        },
        {
            location: 'Bali',
            tempC: '27.7',
            tempF: '81.9',

            condition: {
                text: 'Light rain shower',
                humidity: '77',
                feelsLikeC: '31.2',
                feelsLikeF: '88.2'
            }

        },
        {
            location: 'Singapore',
            tempC: '25.0',
            tempF: '77.0',

            condition: {
                text: 'Moderate rain',
                humidity: '94',
                feelsLikeC: '27.9',
                feelsLikeF: '82.2'
            }

        },
        {
            location: 'Oslo',
            tempC: '-4',
            tempF: '24.8',
            condition: {
                text: 'Partly cloudy',
                humidity: '86',
                feelsLikeC: '-5.3',
                feelsLikeF: '22.5'
            }
        },
        {
            location: 'Moscow',
            tempC: '-1',
            tempF: '30.2',
            condition: {
                text: 'Light snow showers',
                humidity: '93',
                feelsLikeC: '-6.1',
                feelsLikeF: '21.1'
            }
        },
        {
            location: 'Kazan',
            tempC: '-9',
            tempF: '15.8',
            condition: {
                text: 'Light snow',
                humidity: '92',
                feelsLikeC: '-15.5',
                feelsLikeF: '4.2'
            }
        },
        {
            location: 'Adana',
            tempC: '21',
            tempF: '69.8',
            condition: {
                text: 'Partly cloudy',
                humidity: '35',
                feelsLikeC: '21',
                feelsLikeF: '69.8'
            }
        },
        {
            location: 'Budapest',
            tempC: '1',
            tempF: '33.8',
            condition: {
                text: 'Mist',
                humidity: '93',
                feelsLikeC: '0.3',
                feelsLikeF: '32.5'
            }
        },
        {
            location: 'Barcelona',
            tempC: '4',
            tempF: '39.2',
            condition: {
                text: 'Clear',
                humidity: '65',
                feelsLikeC: '2.1',
                feelsLikeF: '35.7'
            }
        },
        {
            location: 'Tokyo',
            tempC: '13',
            tempF: '55.4',
            condition: {
                text: 'Partly cloudy',
                humidity: '30',
                feelsLikeC: '12',
                feelsLikeF: '53.6'
            }
        },
        {
            location: 'Manchester',
            tempC: '3',
            tempF: '37.4',
            condition: {
                text: 'Overcast',
                humidity: '75',
                feelsLikeC: '1.1',
                feelsLikeF: '34.1'
            }
        },
        {
            location: 'Dubai',
            tempC: '24',
            tempF: '75.2',
            condition: {
                text: 'Sunny',
                humidity: '78',
                feelsLikeC: '25.6',
                feelsLikeF: '78'
            }
        },
        {
            location: 'Surat',
            tempC: '36.4',
            tempF: '97.5',
            condition: {
                text: 'Sunny',
                humidity: '26',
                feelsLikeC: '36.5',
                feelsLikeF: '97.7'
            }
        },
        {
            location: 'Panaji',
            tempC: '36.8',
            tempF: '98.2',
            condition: {
                text: 'Sunny',
                humidity: '31',
                feelsLikeC: '38.4',
                feelsLikeF: '101.1'
            }
        },
        {
            location: 'Doha',
            tempC: '22',
            tempF: '71.6',
            condition: {
                text: 'Sunny',
                humidity: '53',
                feelsLikeC: '23.8',
                feelsLikeF: '74.9'
            }
        },
        {
            location: 'Sydney',
            tempC: '22.0',
            tempF: '71.6',
            condition: {
                text: 'Partly Cloudy',
                humidity: '83',
                feelsLikeC: '24.5',
                feelsLikeF: '76.2'
            }
        }
    ]
    const response = weatherData.filter((data) => (data.location.toLowerCase() == location.toLowerCase()));
    console.log(response);
    return response
}

getWeatherData('tokyo');