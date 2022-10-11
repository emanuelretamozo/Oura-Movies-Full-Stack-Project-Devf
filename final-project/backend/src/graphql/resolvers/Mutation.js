import Movie from "../../models/Movie";

const Mutation = {
  createMovie: async (_, { title, image, description, likes }) => {
    const newMovie = new Movie({ title, image, description, likes});
    return await newMovie.save();
  },

  deleteMovie: async ( _, { id }) => {
    await Movie.findByIdAndRemove( id );
    return await Movie.find();
  },

//encontrar el document 
// find by id
// modificar objeto
// guardar

  updateLikes: async (_, { likes }) => {
    const newLike = await Movie.findOneAndUpdate({likes}, (error, data) => {
      if ( error ) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
    return await newLike.save();
  }
};

export default Mutation;
