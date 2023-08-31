const url = "https://dog.ceo/api/breeds/list/all";

// create the dom element..........................................

const dropdown = document.getElementById("breedList");
const imgGrid = document.getElementById("imgGrid");

// fetch the data...........................................
async function loadData() {
  try {
    // fetch the data
    const response = await fetch(url);
    const data = await response.json();
    //   create the dropdown
    createDropdown(data.message);
  } catch (error) {
    console.log(error);
  }
}
// create the dropdowm menu....................................

function createDropdown(input) {
  const list = Object.keys(input);
  list.unshift("Choose a Breed");
  list.forEach(function (breedname) {
    // console.log(breedname);
    const option = document.createElement("option");
    option.innerHTML = breedname;
    option.value = breedname;
    dropdown.appendChild(option);
  });
}

async function showBreedImgs(breedname) {
  if (breedname !== "Choose a Breed") {
    imgGrid.innerHTML = "";
    const breedurl = `https://dog.ceo/api/breed/${breedname}/images`;
    const response = await fetch(breedurl);
    const data = await response.json();
    console.log(data.message);
    createGrid(data.message);
  }
}

function createGrid(imgList) {
  imgList.forEach(function (img) {
    const imgElement = document.createElement("img");
    imgElement.src = img;
    imgGrid.appendChild(imgElement);
  });
}

loadData();
