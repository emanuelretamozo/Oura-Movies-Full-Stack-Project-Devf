import { Schema, model } from "mongoose";

const userSchema = new Schema({
	_id: {
        type: ID,
        required: true
    },
    user: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	}
});

export default model("User", userSchema);
