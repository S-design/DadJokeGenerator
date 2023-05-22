const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  const divington = document.createElement("div");
  const divIcon = document.createElement("div");
  const Icon = document.createElement("i");

  newLI.append(divIcon);
  newLI.append(divington);
  divIcon.append(Icon);
  divington.append(jokeText);
  jokes.append(newLI);

  newLI.className="card";
  divIcon.className="icon";
  divington.className="content";
  Icon.className="fa-solid fa-circle-star";
  newLI.style="--color:#ececec; --bg-color:#032437";  
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

button.addEventListener("click", addNewJoke);

setTimeout(function() {
  $('#stop').fadeOut('fast');
}, 2000);

jokes.addEventListener('click', function(e) {
  e.target.nodeName === 'LI' && e.target.remove();
});

