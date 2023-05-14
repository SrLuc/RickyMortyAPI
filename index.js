async function getChar(id) {
  let url = "https://rickandmortyapi.com/api/character/" + id;
  await axios.get(url).then((res) => {
    const { name, image, status, species } = res.data;
    userName.textContent = name;
    userImage.src = image;
    userStatus.textContent = status;
    userSpecies.textContent = species;
  });
}

function searchChar() {
  ipt.addEventListener("keypress", () => {
    let id = ipt.value;
    getChar(id);
  });
  ipt.addEventListener("click", () => {
    let id = ipt.value;
    getChar(id);
  });
}
searchChar();
