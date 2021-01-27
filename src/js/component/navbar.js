import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import starwarsLogo from "../../img/starwarsLogo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white">
					<img className src={starwarsLogo} style={{ width: 240, height: 160 }} />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
						<span className="badge badge-secondary">{store.favorites.length}</span>
					</button>

					<div
						className={store.favorites.length > 0 ? "dropdown-menu show dropdown-menu-right" : "d-none"}
						aria-labelledby="dropdownMenuLink">
						<ul className="w-25 pl-0">
							{store.favorites &&
								store.favorites.map((item, index) => {
									return (
										<li className="dropdown-item" href="#" key={index}>
											{item}
											<button onClick={() => actions.deleteFavorites(index)}>X </button>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
