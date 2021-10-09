class Employee{
    constructor(name, email, id){
        this.name = name
        this.email = email
        this.id = id
    }

    getName() {
        console.log('name: ' + this.name)
        return this.name
    }

    getEmail() {
        console.log('email: ' + this.email)
        return this.email
    }

    getId() {
        console.log('id: ' + this.id)
        return this.id
    }

    getRole() {
        return 'Employee'
    }
} 

module.exports = Employee;