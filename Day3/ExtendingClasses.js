class Person {
    name
    age
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    getName() { return this.name }
    setName(newName) { this.name = newName }
    getAge() { return this.age }
    setAge(newAge) { this.age = newAge }
    toString() { return `Name: ${this.name} | Age: ${this.age}` }
    equals(person) { return person.getName === this.name && person.getAge === this.age }
}

class Employee extends Person {
    salary
    constructor({ name, age, salary }) {
        super(name, age)
        this.salary = salary
    }
    getSalary() { return this.salary }
    setSalary(newSalary) { this.salary = newSalary }
    toString() {
        return `${super.toString()} | Salary: ${this.salary} `
    }
    equals(employee) {
        super.equals(employee) && employee.getSalary === this.salary
    }
}


const santa = new Employee({ name: "Santa Clause", age: 1752, salary: 0 })
console.log(santa.toString())