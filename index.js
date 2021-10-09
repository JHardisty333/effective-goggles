const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engingeertemp = require('./srcTemps/Engineertemp');
const Interntemp = require('./srcTemps/Interntemp');
const Managertemp = require('./srcTemps/Managertemp');
const generatePage = require('./srcTemps/generatePage');


const employees = []

function addMember() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Employees name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Employees id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Employees email address'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Select the Employee role',
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        }])
        .then(function({name, id, email, role}) {
            let roleDetails = '';
            if (role === 'Engineer'){
                roleDetails = 'github username'
            } else if (role === 'Intern') {
                roleDetails = 'school name'
            } else {
                roleDetails = 'office phone number'
            }
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'roleDetails',
                    message: `Enter team members ${roleDetails}`
                },
                {
                    type: 'confirm',
                    name: 'addMore',
                    message: 'Would you like to add more team members?'
                }
            ])
            .then(function(data) {
                let allData = {...data, name, id, email, role}
                htmlRender(allData)
                
                if(data.addMore) {
                    addMember()
                } else {
                    let finalHtml = generatePage(employees)

                    fs.writeFileSync(path.resolve('./dist/finalHtml.html'), finalHtml)
                }
            })
        })
}