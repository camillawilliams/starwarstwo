import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Planets = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.planets.name}</h5>
				<p className="card-text">title</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Planets.propTypes = {
	planets: PropTypes.object
	// characterTitle: PropTypes.string
};
