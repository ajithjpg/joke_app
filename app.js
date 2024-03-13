
var joke_container = document.getElementById("joke");
var btn = document.getElementById("btn");


var url = "https://sv443.net/jokeapi/v2/joke/Programming?type=single"



let getjoke = async() =>{
    btn.innerHTML = "Loading..."
    let response = await fetch(url);
    const myJson = await response.json();
    console.log(myJson)
    joke_container.innerHTML = myJson.joke
    btn.innerHTML = "Get A Random Joke"
}

btn.addEventListener('click', getjoke);
getjoke()