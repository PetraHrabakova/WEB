function createPerson(name, age) {
    return {
        getName: () => name,
        getAge: () => age,
        setName: newName => (name = newName),
        setAge: newAge => (age = newAge),
        equals: person => person.getName() === name && person.getAge === age,
        toString: () => `Name: ${name} | Age: ${age}`,
    }
}

function createEmployee({ name, age, salary }) {
    const person = createPerson(name, age)
    return {
        ...person,  // used to spread the properties of the 'person' object into the new object being created
        getSalary: () => salary,
        setSalary: newSalary => (salary = newSalary),
        equals: employee => person.equals(employee) && employee.getSalary() === salary,
        toString: () => `${person.toString()} | Salary: ${salary}`,
    }
}

const santa = createEmployee({ name: "Santa Clause", age: 1752, salary: 20 })
console.log(santa.toString())

const bugs = createEmployee({ name: "Bugs Bunny", age: 5, salary: 2000 })
console.log(bugs.toString())

console.log(santa.equals(bugs))