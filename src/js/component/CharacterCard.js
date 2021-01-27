import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import starwarsRobot from "../../img/starwarsRobot.jpg";
import { Context } from "../store/appContext";

export const CharacterCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src={starwarsRobot} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">{props.character.height}</p>
				<p className="card-text">{props.character.hair_color}</p>
				{/* <a href="#" className="btn btn-primary" /> */}
				<Link to={`/characterdetails/${props.index}`}>
					{" "}
					{/* className="btn btn-sm"> */}
					<span href="#" className="btn btn-primary">
						CLick for more
					</span>
				</Link>
				<button onClick={() => actions.setFavorite(props.character.name)}>Add Favorite</button>
				{/* this button runs an onCLick event. Passes and argument which is the name of the character */}
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object
};
CharacterCard.propTypes = {
	index: PropTypes.number
};
