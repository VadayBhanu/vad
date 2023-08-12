// Timer variables
let time = 1500; // 25 minutes in seconds
let interval;
let isPaused = true;


// // hamburger
// function toggleNav() {
//   var navLinks = document.getElementById("navLinks");
//   if (navLinks.style.display === "block") {
//     navLinks.style.display = "none";
//   } else {
//     navLinks.style.display = "block";
//   }
// }









  // Change background color
  const bgColorInput = document.getElementById("bgColorInput");
  bgColorInput.addEventListener("change", function () {
    document.body.style.backgroundColor = bgColorInput.value;
  });

  






// DOM elements
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const shortBreakButton = document.getElementById('shortBreakButton');
const longBreakButton = document.getElementById('longBreakButton');

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Function to start the timer
function startTimer() {
  interval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimerDisplay();
    } else {
      clearInterval(interval);
      alert('Time is up!');
      resetTimer();
    }
  }, 1000);

  isPaused = false;
  startButton.disabled = true;
  pauseButton.disabled = false;
  shortBreakButton.disabled = true;
  longBreakButton.disabled = true;
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(interval);
  isPaused = true;
  startButton.disabled = false;
  pauseButton.disabled = true;
  shortBreakButton.disabled = false;
  longBreakButton.disabled = false;
}

// Function to reset the timer
function resetTimer() {
  clearInterval(interval);
  time = 1500;
  updateTimerDisplay();
  isPaused = true;
  startButton.disabled = false;
  pauseButton.disabled = true;
  shortBreakButton.disabled = false;
  longBreakButton.disabled = false;
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
shortBreakButton.addEventListener('click', () => {
  time = 300; // 5 minutes in seconds
  updateTimerDisplay();
});
longBreakButton.addEventListener('click', () => {
  time = 900; // 15 minutes in seconds
  updateTimerDisplay();
});

// Initial setup
updateTimerDisplay();
pauseButton.disabled = true;






/* Add this JavaScript to your existing code */

// Function to change the background color
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Event listener for color options
const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const color = option.getAttribute('data-color');
    changeBackgroundColor(color);
  });
});




const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))







  $(document).ready(function () {
    $(".hamburger").click(function () {
      $(".dropdown-content").toggleClass("show");
    });
  });

















/* Add this JavaScript to your existing code */

let backgroundMusicPlayer;

// Function to play the selected background music
function playBackgroundMusic() {
  const musicSelect = document.getElementById('music-select');
  const musicUrl = musicSelect.value;

  if (musicUrl) {
    backgroundMusicPlayer = new Audio(musicUrl);
    backgroundMusicPlayer.loop = true;
    backgroundMusicPlayer.play();
  }
}

// Function to stop the background music
function stopBackgroundMusic() {
  if (backgroundMusicPlayer) {
    backgroundMusicPlayer.pause();
    backgroundMusicPlayer.currentTime = 0;
  }
}

// Event listener for play button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', playBackgroundMusic);

// Event listener for stop button
const stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', stopBackgroundMusic);










// addtask
// ... (existing JavaScript code) ...

// ... (existing JavaScript code) ...

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    let taskItem = document.createElement("li");
    taskItem.innerHTML = `<span>${taskInput.value.trim()}</span><button onclick="clearTask(this)">Clear</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function clearTask(button) {
  let taskList = document.getElementById("taskList");
  let taskItem = button.parentNode;
  taskList.removeChild(taskItem);
}

function clearTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}

// ... (existing JavaScript code) ...


// ... (existing JavaScript code) ...


// JavaScript for mobile view

















