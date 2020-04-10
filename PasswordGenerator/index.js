const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkDown");
let info={};

var config = {
  headers : {
    'Authorization' : 'token beb2332676472d14b098c4e246784b018ee1d4fd',
  }
}

const gitAPI = 'beb2332676472d14b098c4e246784b018ee1d4fd';
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
    info.queryUrl = `https://api.github.com/users/${info.username}`; 
    axios
      .get(info.queryUrl, config).then((response) => {
        console.log(response.data.email);
        info.avatar_url = response.data.avatar_url;
        info.userEmail = response.data.email;
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

