const { Movie } = require("../models/movie")

exports.movieByGenre = async()=>{
    let resData = []
    let genres = await Movie.distinct("genres")
    for (let genre of genres) {
        let movieData = await Movie.find({
            genres: genre,
        }).select("-_id -__v")
        resData.push({category: genre , movies:movieData})
    }
    return resData
}