// Event Handling Section

// Button click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
  document.getElementById("keyPressNote").style.display = "block"; // Show note to check console
});

// Secret action for double-click or long press
let pressTimer;

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🎉 Secret unlocked via double-click!");
});

document.getElementById("secretBtn").addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    alert("🎉 Secret unlocked via long press!");
  }, 1000); // Trigger the secret action after 1 second of pressing
});

document.getElementById("secretBtn").addEventListener("mouseup", () => {
  clearTimeout(pressTimer); // Clear the timer if the mouse is released before 1 second
});

document.getElementById("secretBtn").addEventListener("mouseleave", () => {
  clearTimeout(pressTimer); // Clear the timer if mouse leaves the button before 1 second
});

// Interactive Elements Section

// Change text/color/font on click (multiple changes)
document.getElementById("colorChangeBtn").addEventListener("click", () => {
  const btn = document.getElementById("colorChangeBtn");

  // Random color generator
  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  btn.style.backgroundColor = randomColor(); // Change background color
  btn.style.color = randomColor(); // Change text color
  btn.style.fontFamily = "Arial, sans-serif"; // Change font family
  btn.style.fontSize = "18px"; // Change font size
  btn.style.fontWeight = "bold"; // Make the font bold
  btn.textContent = "Changed!";
});

// Image gallery logic with Pexels images
const images = [
  "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg", // image 1
  "https://images.pexels.com/photos/712639/pexels-photo-712639.jpeg", // image 2
  "https://images.pexels.com/photos/306407/pexels-photo-306407.jpeg", // image 3
  "https://images.pexels.com/photos/1586951/pexels-photo-1586951.jpeg", // image 4 
  "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg", // image 5 
  "https://images.pexels.com/photos/3184425/pexels-photo-3184425.jpeg", // image 6 
  "https://images.pexels.com/photos/1048272/pexels-photo-1048272.jpeg", // image 7
  "https://images.pexels.com/photos/3280147/pexels-photo-3280147.jpeg", // image 8
  "https://images.pexels.com/photos/3155397/pexels-photo-3155397.jpeg", // image 9
  "https://images.pexels.com/photos/1048281/pexels-photo-1048281.jpeg", // image 10
];
let current = 0;

// Preload all images
const preloadImages = () => {
  images.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
};

preloadImages(); // Preload images when the page loads

document.getElementById("nextImage").addEventListener("click", () => {
  current = (current + 1) % images.length;
  console.log(images[current]); // Check the current image path in console
  document.getElementById("galleryImage").src = images[current];
});

// Tab switching
document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-content")
      .forEach((tc) => (tc.style.display = "none"));
    document.getElementById(button.dataset.target).style.display = "block";
  });
});

// Form Validation Section

document.getElem;
