import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_MOVIES } from "./Home";


export default function MovieForm() {

	const navigate = useNavigate();

	const CREATE_MOVIE = gql`
		mutation createMovie(
            _id: ID!
            title: String!
            image: String
            description: String
            likes: Int
		) {
			createMovie(title: $title, image: $image, description: $description, likes: $likes); {
				_id
				title
                description
			}
		}
	`;


	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState( "" );
	
	const [createMovie] = useMutation( CREATE_MOVIE, {
		//fetch the list of the current documents in the database
		refetchQueries : [{query : GET_MOVIES}]
	})


	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card">
					<div className="card-body">
						<form
							onSubmit={ async( e ) => {
								e.preventDefault();
								//creating the new document in the collection
								await createMovie( { variables: { title, image, description } } )
								//redirect to the list
								navigate("/")
								
							}}
						>
							<div class="mb-3">
								<label for="title" class="form-label">
									Title
								</label>
								<input
									type="text"
									className="form-control"
									value={title}
									onChange ={ (e) => setTitle(e.target.value)}
								/>
							</div>
							<div class="mb-3">
								<label for="author" class="form-label">
									Author
								</label>
								<input
									type="text"
									className="form-control"
									value={image}
									onChange ={ (e) => setImage(e.target.value)}
								/>
							</div>
							<div class="mb-3">
								<label for="content" class="form-label">
									Content
								</label>
								<input
									type="text"
									className="form-control"
									value={description}
									onChange ={ (e) => setDescription(e.target.value)}
								/>
							</div>

							<button class="btn btn-success btn-block">
									Save
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
