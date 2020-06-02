
const OpenWeatherClient = require("./weather-client");
const myKey = require("../../config");
const API_KEY = myKey;

function formatData(data) {
    const result = `It is now ${data.main.temp}\u00B0C in ${data.name}, ${data.sys.country} `;
    const moreInfo = `Today's weather has ${data.weather
        .map((condition) => condition.description)
        .join(", ")} `;
    const moreInfo2 = `Feels like ${data.main.feels_like}`;
    return result + "\n" + moreInfo + "\n" + moreInfo2;
}

module.exports = async function weather(city, country) {
    const client = new OpenWeatherClient(API_KEY);
    // console.log(client);
    const currentData = await client.getWeather(city, country);
    // console.log(currentData);
    return formatData(currentData);
    //return `It is now ${currentData.main.temp}\u00B0C in ${currentData.name}, ${
    //     currentData.sys.country
    //   }
    //  Today's weather ${currentData.weather
    //    .map((condition) => condition.description)
    //    .join(", ")} `;
};