import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Character = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">{props.character.text}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Character.propTypes = {
	character: PropTypes.object,
	title: PropTypes.string,
	text: PropTypes.string
};
