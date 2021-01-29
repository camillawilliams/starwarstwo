import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import starwarsRobot from "../../img/starwarsRobot.jpg";
import { Context } from "../store/appContext";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src={starwarsRobot} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text"> {props.planet.height}</p>
				<p className="card-text"> {props.planet.climate}</p>
				<Link to={`/planetdetails/${props.index}`}>
					<span href="#" className="btn btn-primary">
						CLick for more
					</span>
				</Link>
				<button onClick={() => actions.setFavorite(props.planet.name)}>Add Favorite</button>
				{/* this button runs an onCLick event. Passes an argument which is the .name of the character */}
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	planet: PropTypes.object,
	index: PropTypes.number
};
