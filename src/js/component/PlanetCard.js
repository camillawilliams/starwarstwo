import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import starwarsPlanet from "../../img/starwarsPlanet.jpg";

export const PlanetCard = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src={starwarsPlanet} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text">{props.planet.climate}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	planet: PropTypes.object

	// imageURL: PropTypes.string
	// description: PropTypes.string
};
