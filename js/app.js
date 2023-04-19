'use strict';

let duckArray = [];

let myContainer = document.querySelector('section');

let image1 = document.querySelector('section img:first-child');

let image2 = document.querySelector('section img:nth-child(2)');

let image3 = document.querySelector('section img:nth-child(3)');

let viewResultsBtn = document.querySelector('section ~ div');

let counter = 0;
let maxCounter = 25;

function Duck(name, fileExtention = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtention}`;
  this.views = 0;
  this.votes = 0;
}

let babyMob = new Duck('sweep', 'png');
let R2Dbag = new Duck('bag');
let bananaSlicer = new Duck('banana');
let iTP = new Duck('bathroom');
let toeBoots = new Duck('boots');
let selfDiner = new Duck('breakfast');
let ballGum = new Duck('bubbleGum');
let badChair = new Duck('chair');
let cthulhu = new Duck('cthulhu');
let duckMuzzle = new Duck('dog-duck');
let dMeat = new Duck('dragon');
let pentensils = new Duck('pen');
let dogBroom = new Duck('pet-sweep');
let sliceCutter = new Duck('scissors');
let sharkingBag = new Duck('shark');
let hanSolo = new Duck('tauntaun');
let uMeat = new Duck('unicorn');
let badContainer = new Duck('water-can');
let decanter = new Duck('wine-glass');

duckArray.push(babyMob, R2Dbag, bananaSlicer, iTP, toeBoots, selfDiner, ballGum, badChair, cthulhu, duckMuzzle, dMeat, pentensils, dogBroom, sliceCutter, sharkingBag, hanSolo, uMeat, badContainer, decanter);

function selectRandomDuckNumber() {
  return Math.floor(Math.random() * duckArray.length);
}

function renderDucks() {
//   let duck1 = selectRandomDuckNumber();
//   let duck2 = selectRandomDuckNumber();
//   let duck3 = selectRandomDuckNumber();
  let selectedImages = [];

  while (selectedImages.length < 3) {
    let randomIndex = selectRandomDuckNumber();
    // let selectedImage = duckArray[randomIndex];
    console.log(randomIndex);
    if (!selectedImages.includes(randomIndex)) {
      selectedImages.push(randomIndex);
    }
  }

  let imageOneIndex = selectedImages.shift();
  let imageTwoIndex = selectedImages.shift();
  let imageThreeIndex = selectedImages.shift();




  image1.src = duckArray[imageOneIndex].src;
  image1.alt = duckArray[imageOneIndex].name;
  duckArray[imageOneIndex].views++;
  image2.src = duckArray[imageTwoIndex].src;
  image2.alt = duckArray[imageTwoIndex].name;
  duckArray[imageTwoIndex].views++;
  image3.src = duckArray[imageThreeIndex].src;
  image3.alt = duckArray[imageThreeIndex].name;
  duckArray[imageThreeIndex].views++;
}

function handleDuckClick(event) {
  counter++;
  console.log(event.target.alt);
  let clickedDuck = event.target.alt;
  for (let i = 0; i < duckArray.length; i++) {
    if (clickedDuck === duckArray[i].name) {
      duckArray[i].votes++;
      console.log(duckArray);
    }
  }
  if (counter < maxCounter) {
    renderDucks();
  } else {
    // remove event listeners
    myContainer.removeEventListener('click', handleDuckClick);
    viewResultsBtn.addEventListener('click', viewResults);
  }
}

function viewResults() {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let result = ``;
  for (let i = 0; i < duckArray.length; i++) {
    result += `${duckArray[i].name} had ${duckArray[i].views} views, and ${duckArray[i].votes} votes. `;
  }
  li.textContent = result;
  ul.appendChild(li);
}

renderDucks();

myContainer.addEventListener('click', handleDuckClick);

console.log(duckArray.votes);
