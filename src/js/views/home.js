import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
    const [characters, setCharacters] = useState([{name:"Luke", name: "Anakyn"}]);
    const [planets, setPlanets] = useState([{name:"Death Star", name: "The Republic"}]);
    return (
	<div className="container-fluid mt-5">
        <div>
		<h1>Characters</h1>
        <div>
            {characters.map((value, index) => {
                return 
            })}
        </div>
        </div>
		<div>
			<h1>Planets</h1>
		</div>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
        
	</div>
);
 }