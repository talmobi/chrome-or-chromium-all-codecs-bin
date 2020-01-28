// give bin path to downloaded Chromium
const fs = require( 'fs' )
const path = require( 'path' )

const chromeFinder = require( 'chrome-finder' )

let binPath = ''
try {
  const p = chromeFinder()
  binPath = p
} catch ( err ) {
  binPath = fs.readFileSync( path.join( __dirname, 'bin-path.txt' ), 'utf8' )
}

module.exports = function () {
  return path.relative( process.cwd(), binPath )
}
module.exports.absolute = binPath
