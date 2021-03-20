export const people = [
	{
		id: "1",
		name: "Lee Ji Seok",
		age: 22,
		gender: "Male"
	},
	{
		id: "2",
		name: "number2",
		age: 22,
		gender: "Male"
	},
	{
		id: "3",
		name: "number3",
		age: 23,
		gender: "FeMale"
	},
	{
		id: "4",
		name: "number4",
		age: 24,
		gender: "Male"
	},
	{
		id: "5",
		name: "number5",
		age: 25,
		gender: "FeMale"
	}
];

export const getById = id => {
	const filteredPeople = people.filter(person => id === people.id);
	return filteredPeople[1];
};