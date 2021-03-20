const leejiseok = {
	name: "Lee Ji Seok",
	age: 22,
	gender: "Male"
};

const resolvers = {
	Query: {
		person: () => leejiseok
	}
};

export default resolvers;