import React, { useState, useEffect, useContext } from "react";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text center mt-5 container-fluid">
			<div>
				<h3>Characters</h3>
				<div className="row">
					{store.characters.map((value, index) => {
						//map the characters array
						return <CharacterCard key={index} character={value} index={index} />; //character has access to character details now
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div className="row">
					{store.planets.map((value, index) => {
						return <PlanetCard key={index} planet={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
