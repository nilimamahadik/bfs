const apiKey = '6954855361469ac576aa3838e286954d';

export const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export const getCurrCityWeather = async (coords) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}