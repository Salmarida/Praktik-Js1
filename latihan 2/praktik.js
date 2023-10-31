const req = {
    body: {
        name: "Salma",
        age: 20,
        major: "Informatics",
    },
};

// 
const { age,name,major } = req.body;

console.log(age, name, major);