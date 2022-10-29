// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  

  let synth = window.speechSynthesis;
  let elementVoiceSelect = document.getElementById("voice-select");
  let utterance = new SpeechSynthesisUtterance();
  utterance.pitch = 1;
  let elementFaceIcon = document.querySelector("img");

  // when utterance is speaking/done, change icon.
  utterance.addEventListener("start", () => {
    elementFaceIcon.src = "assets/images/smiling-open.png";
  });

  utterance.addEventListener("end", () => {
    elementFaceIcon.src = "assets/images/smiling.png";
  });

  // update list of voices when the voice is loaded.
  synth.onvoiceschanged = function() {
    let voices = synth.getVoices();

    elementVoiceSelect.addEventListener('input', (e) => {
      let selectedIndex = e.target.value;
      utterance.voice = voices[selectedIndex];
    });
    
    // populate voices
    for (let i = 1; i < voices.length; i++) {
      let option = document.createElement("option");
      option.textContent = voices[i].name;
      option.value = i;

      elementVoiceSelect.appendChild(option);
    }
  }

  let elementTalkButton = document.querySelector("button");

  elementTalkButton.addEventListener("click", (e) => {
    synth.speak(utterance);
  });

  let elementTextBox = document.getElementById("text-to-speak");
  elementTextBox.addEventListener("change", (e) => {
    utterance.text = e.target.value;
  });

}
