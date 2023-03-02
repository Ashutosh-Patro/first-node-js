function getWeatherData(location) {
    const weatherData = [
        {
            location: 'kolkata',
            lat: '22',
            lng: '12',
            condition: {
                feelslike_c: 29.8,
                is_Day: 1,
            },
            country: 'India',
            region: 'West Bengal'
        }
    ]
    const result = weatherData.filter((item) => (item === weatherData[0].location))
    console.log(result)
    return result
}

getWeatherData('kolkata')