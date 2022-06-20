// run this one time
const {db} = require('./db')
const {movie} = require('./movie')
let movieData = require('../movie-data-raw.json')


db.on('open', () => {
    movie.insertMany(movieData,console.log)
})
