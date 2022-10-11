// eslint-disable-next-line
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
import { gql, useQuery, useMutation } from "@apollo/client";
import "../styles/Home.css";

export const GET_MOVIES = gql`
	{
		getMovies {
			_id
			title
			image
			description
		}
	}
`;

const DELETE_MOVIE = gql`
    mutation deleteMovie($id: ID!) {
        deleteMovie(id: $id ) {
            _id
            title
			description
        }
    }
`;


const MovieList = () => {

	// useQuery y useLazyQuery tienen funcionalidades muysimilares
	// eslint-disable-next-line
	const { loading, error, data } = useQuery(GET_MOVIES);

	// eslint-disable-next-line
	const [deleteMovie] = useMutation( DELETE_MOVIE)
		if (error) return <p>{error.message}</p>;
		if (loading) return <p>Loading...</p>;

		function onTrashClick(evt) {

			const { currentTarget } = evt;
			const { id } = currentTarget;

			deleteMovie({
				variables: {
					id
				}
			});
		}

	if (error) {
		return <h1>Error : {{ error }}</h1>;
	}

	if (data) {
		console.log(data);
	}

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3 three-columns">
				 { data && data.getMovies.map(({ _id, title, image, description } ) => (
					<div key={_id} data-id={_id} className="card m-2">
						<div className="card-body">
							<h4>{title}</h4>
							<p>{image}</p>
							<p>{description}</p>
						 </div>
						 <button 
						 	className="btn btn-danger"
							//  onClick={async (e) => {
							// 	var target = e.target;
							// 	var getDocumentId = target.parentElement.getAttribute( "data-id" );
							// 	return await [].removeAll({
							// 		variables: { id: getDocumentId },
							// 	});
							// }}
							id={_id} onClick={onTrashClick}
							> 
						 		Delete
						</button>
					</div>
				))} 
			</div>
			
		</div>
	);
};

export default MovieList;
