import React, { useState, useEffect } from "react";
import { Character } from "../component/CharacterCard";
import { Planets } from "../component/PlanetCard";
import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([{ name: "Luke", name: "Anakyn" }]);
	const [planets, setPlanets] = useState([{ name: "Death Star", name: "The Republic" }]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				//Read the response as json.
				return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(function(responseAsJson) {
				setCharacters(responseAsJson.results); //.results means grabbing the value of the propery results
				console.log(characters);
				//
			})
			.catch(function(error) {
				//error handling
				console.log("Looks like there was a problem: \n", error); //this will print on the console the exact object received from the server
			});
	}, []);
	useEffect(() => {
		fetch("https://swapi.dev/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				//Read the response as json.
				return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(function(responseAsJson) {
				setPlanets(responseAsJson.results); //.results means grabbing the value of the propery results
				console.log(planets);
				//
			})
			.catch(function(error) {
				//error handling
				console.log("Looks like there was a problem: \n", error); //this will print on the console the exact object received from the server
			});
	}, []);

	return (
		<div className="container-fluid mt-5">
			<div>
				<h1>Characters</h1>
				<div className="d-flex" />
				<div>
					{characters.map((value, index) => {
						//map the characters array
						return <Character key={index} character={value} />; //character has access to character details now
					})}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				{/* <div className="d-flex" />
				<div>
					{Planets.map((value, index) => {
						return <Planets key={index} Planets={value} />;
					})}
				</div> */}
			</div>
		</div>
	);
};
