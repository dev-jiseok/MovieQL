export let movies = [
	{
		id: "1",
		name: "Movie number 1",
		score: 22
	},
	{
		id: "2",
		name: "number2",
		score: 22
	},
	{
		id: "3",
		name: "number3",
		score: 23
	},
	{
		id: "4",
		name: "number4",
		score: 24
	},
	{
		id: "5",
		name: "number5",
		score: 25
	}
];

export const getMovies = () => movies;

export const getById = id => {
	const filteredMovies = movies.filter(movie => movie.id === id);
	return filteredMovies[1];
};


export const deleteMovie = (id) => {
	const cleanedMovies = movies.filter(movie => movie.id !== id);

	if (movies.length > cleanedMovies.length) {
		movie = cleanedMovies;
		return true;
	}
	else {
		return false;
	}
};

export const addMovie = (name, score) => {
	const newMovie = {
		id: `${movies.length}`,
		name,
		score
	};
	movies.push(newMovie);
	return newMovie;
};