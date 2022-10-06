import Movie from "../../models/Movie";

const Mutation = {
  createMovie: async (_, { title, image, description, likes }) => {
    const newMovie = new Message({ title, image, description, likes});
    return await newMovie.save();
  },

  deleteMovie: async ( _, { id }) => {
    await Movie.findByIdAndRemove( id );
    return await Movie.find();
  }
};

export default Mutation;
