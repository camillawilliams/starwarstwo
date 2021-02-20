import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import tatooine from "../../img/tatooine.jpg";
import { Context } from "../store/appContext";

export const PlanetDetails = props => {
	const params = useParams();
	const [plan, setPlan] = useState(null);
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			let planets = store.planets[params.theid];
			setPlan(planets);
		},
		[store.planets, params]
	);
	return (
		plan != null && (
			<div className="container text-white">
				<img className="planetImage" src={tatooine} />

				<div className="row">
					<div className="main-page">{plan.name}</div>
					<div className="gender col-md-2">{plan.diameter}</div>
					<div className="height col-md-2">{plan.gravity}</div>
					<div className="eye-color col-md-2">{plan.climate}</div>
				</div>
			</div>
		)
	);
};
PlanetDetails.propTypes = {
	Planet: PropTypes.object
};
