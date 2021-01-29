import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import starwarsRobot from "../../img/starwarsRobot.jpg";
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
			<div className="container text-blue">
				<div className="characterImage" src={starwarsRobot} />
				<div className="main-page">{char.name}</div>
				<div className="row">
					<div className="col-md-2">{char.gender}</div>
					<div className="col-md-2">character test 3</div>
					<div className="col-md-2">character test 4</div>
				</div>
			</div>
		)
	);
};
CharacterDetails.propTypes = {
	character: PropTypes.object
};
