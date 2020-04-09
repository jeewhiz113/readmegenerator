const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkDown");
let info={};
const questions = [
    {
        type:"input",
        message: "Please provide your github username: ",
        name:"username"
    },
    {
        type:"input",
        message: "Please provide your project title: ",
        name:"title"
    },
    {
        type:"input",
        message: "Please provide your project description: ",
        name:"description"
  
    },
    {
        type:"input",
        message: "Please provide the steps required to intall your project: ",
        name:"installation"
  
    },
    {
      type:"input",
      message: "Please provide the usage your project: ",
      name:"usage"
    },
    {
        type:"input",
        message: "Please provide a license",
        name:"license"
  
    },
    {
      type:"input",
      message: "Please provide a guidelines to contribute to this project: ",
      name:"contribution"

    },
    {
      type:"input",
      message: "Please provide the name of your test file and examples on how to run them: ",
      name:"test"
    }
];

async function promptForInfo(){
  let response = await inquirer.prompt(questions)
    info = response;
    //console.log(generateMD(info));
    info.queryUrl = `https://api.github.com/users/${response.username}`; 
    axios
      .get(info.queryUrl).then((response) => {
        //info.avatar_url = response.avatar_url;
        //console.log(response.avatar_url);
        console.log(response.data.avatar_url);
        let data = generateMD(info);
        writeToFile(data);
      })

}
promptForInfo();
function writeToFile(data) {
  fs.writeFile("Readme.md", data, (err)=>{
    if (err){
      console.log(err);
    }
    console.log("Success!");
  })
}

function init() {

}

