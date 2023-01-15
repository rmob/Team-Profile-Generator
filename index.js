const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const htmlContent = require('./lib/generateHTML')
const generateHtmlContent = require('./lib/generateHTML')
const boilerPlate = require('./lib/startHtml')


const questionsManager = [
    {
        type: 'input',
        message: 'Enter manager name',
        name: 'name',

    },

    {
        type: 'input',
        message: 'Enter manager employee ID',
        name: 'id',

    },

    {
        type: 'input',
        message: 'Enter manager email address',
        name: 'email',

    },

    {
        type: 'input',
        message: 'Enter manager office number',
        name: 'office',

    },

]

const questionsEngineer = [
    {
        type: 'input',
        message: 'Engineer name?',
        name: 'name'
    },

    {
        type: 'input',
        message: 'Engineer id?',
        name: 'id'
    },

    {
        type: 'input',
        message: 'Engineer email?',
        name: 'email'
    },

    {
        type: 'input',
        message: 'Engineer github username?',
        name: 'github'
    },

]

const questionsIntern = [
    {
        type: 'input',
        message: 'Intern name?',
        name: 'name'
    },

    {
        type: 'input',
        message: 'Intern id?',
        name: 'id'
    },

    {
        type: 'input',
        message: 'Intern email?',
        name: 'email'
    },

    {
        type: 'input',
        message: 'Intern school?',
        name: 'school'
    },

]

const questionAddAnother = [
    {
        type: 'list',
        message: 'add another team member?',
        name: 'member',
        choices:['Engineer', 'Intern', 'Finished'] 
    
    }
]

const writeHtmlStartFile = () => {
    fs.writeFile('./dist/index.html', `${boilerPlate}`, () => {
        return
    } )
}

const closeHtml = () => {
    fs.appendFile('./dist/index.html', `</main> \n </body>`, () => {
        return
    })
}

const addAnotherMember = () => {
    inquirer.prompt(questionAddAnother)
    .then(res => {
        if(res.member === 'Engineer') {
            inquirer.prompt(questionsEngineer)
            .then(res => {
                const engineer = new Engineer(res.name, res.id, res.email, res.github)
                addAnotherMember()
                fs.appendFile('./dist/index.html', `
       <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title" id="employee-name">${engineer.name}</h5>
             <p class="card-text" id="role"><i class="fa-sharp fa-solid fa-gear"></i> ${engineer.getRole()}</p>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item" id="employee-id">Employee ID: ${engineer.id}</li>
             <li class="list-group-item" id="email">Email: <a href='mailto:${engineer.getEmail()}'>${engineer.email}</a></li>
             <li class="list-group-item" id="third">Github: <a href='https://www.github.com/${engineer.github}'>${engineer.getGithub()}</a></li>
           </ul>
         </div>
   `, () => {
    return
   })
            })
        } else if (res.member === 'Intern') {
            inquirer.prompt(questionsIntern)
            .then(res => {
                const intern = new Intern(res.name, res.id, res.email, res.school)
                addAnotherMember()
                fs.appendFile('./dist/index.html', `
                
       <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title" id="employee-name">${intern.name}</h5>
             <p class="card-text" id="role"><i class="fa-sharp fa-solid fa-otter"></i> ${intern.getRole()}</p>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item" id="employee-id">Employee ID: ${intern.id}</li>
             <li class="list-group-item" id="email"><a href='mailto:${intern.getEmail()}'>Email: ${intern.email}</a></li>
             <li class="list-group-item" id="third">School: ${intern.getSchool()}</li>
           </ul>
         </div>
   `, () => {
    return
   })
            })
        } else {
            console.log('Finished building team')
            // add function to generate closing HTML shit
            closeHtml();
        }
        
    })
    
}

writeHtmlStartFile();

inquirer.prompt(questionsManager)
.then(res => {
    const manager = new Manager(res.name, res.id, res.email, res.office)
    addAnotherMember()
   fs.appendFile('./dist/index.html', `
   <header id="title">My Team</header>
   <main class="container">
       <div class="card" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title" id="employee-name">${manager.name}</h5>
             <p class="card-text" id="role"><i class="fa-sharp fa-solid fa-mug-hot"></i> ${manager.getRole()}</p>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item" id="employee-id">Employee ID: ${manager.id}</li>
             <li class="list-group-item" id="email"><a href='mailto:${manager.getEmail()}'>Email: ${manager.email}</a></li>
             <li class="list-group-item" id="third">Office Number: ${manager.officeNumber}</li>
           </ul>
         </div>
   `, () => {
    return
   })
  
})

