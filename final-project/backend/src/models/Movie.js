import { Schema, model } from "mongoose";

const movieSchema = new Schema({
	
    title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: true,
	},
    likes: {
        type: Schema.Types.Number,
        required: false,
    }
});

export default model("Movie", movieSchema);
