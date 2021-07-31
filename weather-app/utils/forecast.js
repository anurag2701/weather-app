const request = require('request')

const forecast = (lat, long, place, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=3ffa8c3c1f4c50dfb12f059735976875&units=m&query=" + lat + ',' + long
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback(error, undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + ' is expected in ' + place + '. Todays temperature is '+ body.current.temperature +' deg C, Feels like ' + body.current.feelslike + ' degree C.'
            )
        }
    })

}

module.exports = forecast