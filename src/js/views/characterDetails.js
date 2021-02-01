import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import lukeskywalker from "../../img/lukeskywalker.jpg";
import { Context } from "../store/appContext";

export const CharacterDetails = props => {
	const params = useParams();
	const [char, setChar] = useState(null);
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			let character = store.characters[params.theid];
			setChar(character);
		},
		[store.characters, params]
	);
	return (
		char != null && (
			<div className="container text-white">
				<img className="characterImage" src={lukeskywalker} />

				<div className="row">
					<div className="main-page">{char.name}</div>
					<div className="col-md-2">{char.gender}</div>
					<div className="col-md-2">{char.height}</div>
					<div className="col-md-2">{char.eye_color}</div>
				</div>
			</div>
		)
	);
};
CharacterDetails.propTypes = {
	character: PropTypes.object
};
