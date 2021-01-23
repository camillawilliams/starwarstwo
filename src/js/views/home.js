import React, { useState, useEffect, useContext } from "react";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid mt-5">
			<div>
				<h1>Characters</h1>
				<div className="d-flex" />
				<div>
					{store.characters.map((value, index) => {
						//map the characters array
						return <CharacterCard key={index} character={value} />; //character has access to character details now
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div className="d-flex" />
				<div>
					{store.planets.map((value, index) => {
						return <PlanetCard key={index} planet={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
