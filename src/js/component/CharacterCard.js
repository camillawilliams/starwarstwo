import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

export const CharacterCard = props => {
	// const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">{props.character.height}</p>
				<p className="card-text">{props.character.hair_color}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
				{/* <Link to={`/charterdetails/${props.index}`}>
					<span href="#" className="btn btn-primary">
						Click for more
					</span>
				</Link>
                <button onClick = {()} => actions.addFavorites()}>Add Favorite</button> */}
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object
};
