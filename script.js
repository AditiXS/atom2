const play = document.querySelectorAll(".playbtn");
const main = document.querySelector(".container");
const main1 = document.querySelector(".cont");
const song = document.querySelector(".play-container");
const song1 = document.querySelector(".play-cont");
const back = document.querySelectorAll(".backbtn");



play[0].addEventListener('click', () => {
  song.classList.toggle('hide');
  main.classList.toggle('hide');
})

play[1].addEventListener('click', () => {
  song1.classList.toggle('hide');
  main1.classList.toggle('hide');
})

back[0].addEventListener('click', () => {
  song.classList.toggle('hide');
  main.classList.toggle('hide');
});

back[1].addEventListener('click', () => {
  song1.classList.toggle('hide');
  main1.classList.toggle('hide');
});