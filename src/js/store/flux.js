const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addFavorites: newItem => {
				var storeCopy = getStore();
				var updatedFavorites = storeCopy.favorites.concat(newItem);

				setStore({ favorites: updatedFavorites });
			},
			// Use getActions to call a function within a fuction
			// setFavorite: addItem => {
			// 	var storeCopy = getStore();
			// 	var checkItem = storeCopy.favorites.find(() => {
			// 		return newItem == storeCopy;
			// 	// we make a copy of storeCopy to manipulate it without the need of adjusting the main getState.
			// 	var checkItem = storeCopy.favorites.find(value => {
			// 		// we are searching for any value with similar names
			// 		return value == newItem;
			// 	});
			// 	if (newItem != checkItem) {
			// 		var setFavorites = storeCopy.favorites.concat();
			// 	// we use if else statement to correctly display no more than one  of each value on newItem, only allow when item is not defined.
			// 	if (checkItem == undefined) {

			// 		var newFavorites = storeCopy.favorites.concat(newItem);

			// 		setStore({ favorites: newFavorites });
			// 	}
			// 	setStore({ favorites: setFavorites });
			// },
			// we create a new function to delete from the favorite list
			deleteFavorites: deletedItem => {
				var storeCopy = getStore();

				var newFavorites = storeCopy.favorites.filter((value, index) => {
					return value != deletedItem;
				});
				setStore({ favorites: newFavorites });
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						//Read the response as json.
						return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(function(responseAsJson) {
						setStore({ characters: responseAsJson.results }); //.results means grabbing the value of the propery results
						console.log(characters);
						//
					})
					.catch(function(error) {
						//error handling
						console.log("Looks like there was a problem: \n", error); //this will print on the console the exact object received from the server
					});
				fetch("https://swapi.dev/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						//Read the response as json.
						return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(function(responseAsJson) {
						setStore({ planets: responseAsJson.results }); //.results means grabbing the value of the propery results
						console.log(planets);
						//
					})
					.catch(function(error) {
						//error handling
						console.log("Looks like there was a problem: \n", error); //this will print on the console the exact object received from the server
					});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
