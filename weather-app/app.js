const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (address) {
  geocode(address, (error, {latitude, longitude, location} = {}) => {
    if (error) {
      return console.log(address + ' not found.')
    } 
    
    forecast(latitude, longitude, location, (error, foreCastData) => {
      if (error) {
        return console.log(error)
      }
      
      console.log('Data: ', foreCastData)
    })
  })
} else {
  console.log('Please provide an address !!')
}
