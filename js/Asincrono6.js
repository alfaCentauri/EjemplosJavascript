let request = require('request');

async function showGitHubInfo(){
    let response = await request("http://swapi.py4e.com");
    let repos = await response.json();
    console.log(repos);
}

showGitHubInfo();
