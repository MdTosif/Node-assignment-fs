exports.auth =  async function (req, res, next) {
    let {authorization} = req.headers;
    authorization == "FSMovies2021"
       ? next() : next(new Error("You are not authorized"))
}