const mongoose = require('mongoose')

// {
//     "director": "Christopher Nolan",
//     "imdb_rating": 9.0,
//     "length": "2h 32min",
//     "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
//     "title": "The Dark Knight"
//  }
const movieSchema = new mongoose.Schema({
    id: { type: String, select:false},
    director: { type: [String], },
    imdb_rating: { type: Number, },
    length: { type: String, },
    poster: { type: String, },
    title: { type: String, },
    genres: { type: [String], },
    classification: { type: String, select:false,},
    cast: { type: [String], select:false,},
    backdrop: { type: String, select:false,},
    released_on: { type: mongoose.SchemaTypes.Date, select:false,},
    slug: { type: String, select:false,},
    overview: { type: String, select:false,},
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = { Movie }