const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = []

// Ask for manager info - name, id email, officenum
function askUserForManagerInfo() {

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please add Manager name here -->"

            },

            {
                type: "input",
                name: "id",
                message: "Please input your Managers id number here -->"
            },

            {
                type: "input",
                name: "email",
                message: "Please input your Managers email address here -->"
            },

            {
                type: "input",
                name: "officeNumber",
                message: "Please input your Managers office number here -->"
            }
        ]).then((managerData) => {
            const newManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);

            employeeList.push(newManager);

            askUserForEmployeeType();

            // createHtmlfile();
        });
}
// Ask user for next employee type - one option is no more team members
function askUserForEmployeeType() {
    return inquirer.prompt([
        {
            type: "list",
            name: "continue",
            message: "Please select another employee to add to your team.  Pick one of the following:",
            choices: ["Manager", "Engineer", "Intern", "Intern", "I am done building my team!"]
        }
    ]).then((newEmployeeChoiceData) => {
        // if manager selected
        if (newEmployeeChoiceData.continue === "Manager") {
        askUserForManagerInfo();
        } else if (newEmployeeChoiceData.continue === "Engineer") {
        // if engineer selected
        askUserForEngineerInfo();
        } else if (newEmployeeChoiceData.continue === "Intern") {
        // else if the user selected intern
        askUserForInternInfo();
        }
        // ELSE
        createHtmlfile();
    })

}
// // Ask user for engineer info - github
function askUserForEngineerInfo() {

    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please add Engineer name here -->"

    },

    {
        type: "input",
        name: "id",
        message: "Please input your Engineers id number here -->"
    },

    {
        type: "input",
        name: "email",
        message: "Please input your Engineers email address here -->"
    },

    {
        type: "input",
        name: "github",
        message: "Please input your Engineers Github user name here -->"
    }
]).then ((engineerData) => {
    const newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

    employeeList.push(newEngineer);

    askUserForEmployeeType();
})
}
// // Ask user for intern info - school
// function askUserForInternInfo() {

// }

function createHtmlfile() {
    const htmlContent = render(employeeList);

    // Use fs module to create output file
    fs.writeFile(outputPath, htmlContent, (err) => {
        if (err) throw err;
    } )
}

askUserForManagerInfo();



