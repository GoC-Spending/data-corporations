const fs = require('fs')
const path = require('path')
const load = require('load-json-file')
const write = require('write-json-file')
const geocoder = require('geocoder-geojson')

const corporations = load.sync(path.join(__dirname, 'data', 'corporations.json'))

const locations = []
async function main() {
  for (const corporation of corporations) {
    const mailingAddress = corporation.mailingAddress
    const locationAddress = corporation.locationAddress
    let location = locationAddress || mailingAddress || ''
    location = location.trim().toUpperCase()

    const filename = path.join(__dirname, 'geocodes', 'bing', location + '.geojson')
    if (location && !fs.existsSync(filename)) {
      const geojson = await geocoder.bing(location)
      if (geojson.features.length) {
        write.sync(filename, geojson)
        console.log('save:', location)
      }
    }
  }
}
main()
