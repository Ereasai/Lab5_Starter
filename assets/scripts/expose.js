// expose.js
// import JSConfetti from './js-confetti.browser.js';

window.addEventListener('DOMContentLoaded', init);


function init() {
  const jsConfetti = new JSConfetti()

  let playButton = document.querySelector("button");
  playButton.addEventListener('click', function() {
    audioElement.play();
    if (isPartyHorn) {
      
      jsConfetti.addConfetti({
        emojis: ['🎉', '🥳', '🎈'],
     })
    }
  })

  

  let volumeControl = document.querySelector("[name='volume']");
  volumeControl.addEventListener('input', function(e) {

    audioElement.volume = e.target.value/100; // change volume.

      // console.log(e);

    if (e.target.value == 0) {
      volumeImage.src = "./assets/icons/volume-level-0.svg";
    } else if (e.target.value < 33) {
      volumeImage.src = "./assets/icons/volume-level-1.svg";
    } else if (e.target.value < 67) {
      volumeImage.src = "./assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "./assets/icons/volume-level-3.svg";
    }
  })

  let audioElement = document.querySelector("audio, .hidden");
  audioElement.volume = volumeControl.value/100;
  
  
  let hornImage = document.querySelector("img");
  let volumeImage = document.querySelector("img[src='assets/icons/volume-level-2.svg']");

  let hornSelect = document.getElementById('horn-select');
  let isPartyHorn = false;
  hornSelect.addEventListener('input', function(e) {
    // console.log(e.target.value);

    isPartyHorn = false;

    // select values based on the option.
    if (e.target.value == "air-horn") {
      hornImage.src = "./assets/images/air-horn.svg";
      hornImage.alt = "air horn"
      audioElement.src = "./assets/audio/air-horn.mp3";
    } else if (e.target.value == "car-horn") {
      hornImage.src = "./assets/images/car-horn.svg";
      hornImage.alt = "car horn"
      audioElement.src = "./assets/audio/car-horn.mp3";
    } else if (e.target.value == "party-horn") {
      hornImage.src = "./assets/images/party-horn.svg";
      hornImage.alt = "parrty horn"
      audioElement.src = "./assets/audio/party-horn.mp3";
      isPartyHorn = true;
    } else {
      hornImage.scr = null;
      hornImage.alt = null;
      audioElement.src = null;
    }
  })


  
}