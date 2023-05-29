// import modules

document.addEventListener("DOMContentLoaded", function () {
  let welbtn = document.querySelector("button");
  welbtn.addEventListener("click", getinput);

  // function showmsg(){
  //   alert("welcome to my website");
  // }
  function getinput() {
    let name = prompt("Enter your name : ");
    welbtn.textContent = "" + name;
  }
});

// Get DOM element
const colorButton = document.getElementById("cond");

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for button click
colorButton.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

// Get DOM element
const downloadButton = document.getElementById("idownload");

// Function to trigger file download
function downloadFile() {
  // Create a dummy file URL
  let fileUrl = "./assets/doc/resume.pdf";

  // Create an anchor element
  const link = document.createElement("a");
  link.href = fileUrl;
  let name = uuidv4();
  let ext = ".pdf";
  link.download = name + ext;

  // Append the anchor element to the document body
  document.body.appendChild(link);

  // Simulate a click event on the anchor element
  link.click();

  // Remove the anchor element from the document body
  document.body.removeChild(link);
}

// Event listener for button click
downloadButton.addEventListener("click", function () {
  downloadFile();
});
