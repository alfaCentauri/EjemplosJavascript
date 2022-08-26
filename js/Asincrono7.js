async function showGitHubInfo(){
    try{
        let response = await fetch("http://swapi.py4e.com");
        let repos = await response.json();
        console.log(repos);
    }catch(error){
        console.error(error);
    }
}

showGitHubInfo();