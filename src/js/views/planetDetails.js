import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import lukeskywalker from "../../img/lukeskywalker.jpg";
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
				<img className="planetImage" src={lukeskywalker} />

				<div className="row">
					<div className="main-page">{plan.name}</div>
					<div className="gender col-md-2">{plan.gender}</div>
					<div className="height col-md-2">{plan.height}</div>
					<div className="eye-color col-md-2">{plan.eye_color}</div>
				</div>
			</div>
		)
	);
};
PlanetDetails.propTypes = {
	Planet: PropTypes.object
};
