import Movie from "../../models/Movie";

const Query = {

    getMovies: async () => {
        return await Movie.find();
    }

};

export default Query;
