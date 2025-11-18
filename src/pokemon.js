// start: url pokemon list
// target: array of object yang berisikan name dan abilities
// [{name: string, abilites: string[]}]

// fetching url, proses response
// ambil nama, url abilities
// fetching url abilites
// ambil list abilites dalam array

export const pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

export const getPokemonNameWithAbilites = async (url) => {
	// const result = [];
	try {
		const body = await fetchUrlToJSON(url);
		const nameWithURL = body.results;
		for (let i = 0; i < nameWithURL.length; i++) {
			try {
				const body = await fetchUrlToJSON(nameWithURL[i].url);
				const abilities = [];
				for (let i = 0; i < body.abilities.length; i++) {
					abilities[abilities.length] = body.abilities[i].ability.name;
				}
				result[result.length] = {
					name: nameWithURL[i].name,
					abilities,
				};
			} catch (error) {
				throw error;
			}
		}
		// console.log(result);
		// const result = nameWithURL.map(async (item) => {
		// 	try {
		// 		const detail = await fetchUrlToJSON(item.url);
		// 		const abilities = detail.abilities.map((abilityItem) => {
		// 			return abilityItem.ability.name;
		// 		});
		// 		return {
		// 			name: item.name,
		// 			abilities,
		// 		};
		// 	} catch (error) {
		// 		throw error;
		// 	}
		// });
		// return await Promise.all(result);
		return result;
	} catch (error) {
		console.log(error.message);
	}
};

const fetchUrlToJSON = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok)
			throw new Error(`${response.status} ${response.statusText}`);
		const body = await response.json();
		return body;
	} catch (error) {
		return error;
	}
};
