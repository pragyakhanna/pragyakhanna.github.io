// Define DOM elements
const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__tl");
// const tr = document.querySelector("#grid__tr");
// const bl = document.querySelector("#grid__bl");
// const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
// const trBtn = document.querySelector("#grid__tr__btn");
// const blBtn = document.querySelector("#grid__bl__btn");
// const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
// const trContent = document.querySelector("#grid__tr__content");
// const blContent = document.querySelector("#grid__bl__content");
// const brContent = document.querySelector("#grid__br__content");

// const projectOne = document.querySelector(".p-1");
// const projectTwo = document.querySelector(".p-2");
// const projectThree = document.querySelector(".p-3");

// Define colors and positions
const backgroundColour = "var(--background)";
const backgroundColourAlt = "var(--background-alt)";
const textColour = "var(--text)";
const textColourAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

// let trActive = "translateX(-5vw) translateY(0)";
// let trHidden = "translateX(100vw) translateY(-100vh)";

// let blActive = "translateX(10vw) translateY(7vh)";
// let blHidden = "translateX(-100vw) translateY(100vh)";

// let brActive = "translateX(-5vw) translateY(0)";
// let brHidden = "translateX(100vw) translateY(100vh)";

// Define corner that is open
let activeCorner = "";

// Add an event listener to the window object to listen for resize events
window.addEventListener("resize", handleWindowResize);

// Function that hanldes the styling when resizing window
function handleWindowResize() {
  switch (activeCorner) {
    case "top-left":
      // If the window width is 1100px or less (mobile/tablet)
      if (window.innerWidth <= 1100) {
        // Set the active transform position to center the content
        tlActive = "translateX(0) translateY(0)";
        tlContent.style.transform = "translateX(0vw) translateY(0)"; // Center content
        tlContent.style.width = "100vw"; // Full width
        tlContent.style.height = "100vh"; // Full height
        tlContent.style.top = "0"; // Align to top
        tlContent.style.display = "flex"; // Use flex layout
        tlContent.style.alignItems = "center"; // Vertically center content
        tlContent.style.justifyContent = "center"; // Horizontally center content
        tlContent.style.background = "var(--background-transparent)"; // Apply semi-transparent background
        tlContent.style.zIndex = "200"; // Bring content to front
        tlBtn.style.zIndex = "300"; // Ensure top-left button is above the content
        trBtn.style.zIndex = "100"; // Push other buttons back
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "100";
      } else {
        // For larger screens (desktop)
        tlActive = "translateX(5vw) translateY(0)"; // Slightly offset to the right
        tlContent.style.transform = "translateX(5vw) translateY(0)"; // Apply same transform
        tlContent.style.width = "30vw"; // Set smaller width
        tlContent.style.height = "0"; // No height (content collapses initially)
        tlContent.style.top = "10vh"; // Position slightly down from the top
        tlContent.style.display = "block"; // Display as block element
      }
      break;
    // case "top-right":
    //   if (window.innerWidth <= 1100) {
    //     trActive = "translateX(0) translateY(0)";
    //     trContent.style.transform = "translateX(0vw) translateY(0)";
    //     trContent.style.width = "100vw";
    //     trContent.style.height = "100vh";
    //     trContent.style.top = "0";
    //     trContent.style.display = "flex";
    //     trContent.style.alignItems = "center";
    //     trContent.style.justifyContent = "center";
    //     trContent.style.background = "var(--background-transparent)";
    //     trContent.style.zIndex = "200";
    //     trBtn.style.zIndex = "300";
    //     tlBtn.style.zIndex = "100";
    //     blBtn.style.zIndex = "100";
    //     brBtn.style.zIndex = "100";
    //   } else {
    //     trActive = "translateX(-5vw) translateY(0)";
    //     trContent.style.transform = "translateX(-5vw) translateY(0)";
    //     trContent.style.width = "30vw";
    //     trContent.style.height = "0";
    //     trContent.style.top = "10vh";
    //     trContent.style.display = "block";
    //   }
    //   break;

    // case "bottom-left":
    //   if (window.innerWidth <= 600) {
    //     blActive = "translateX(0) translateY(0)";
    //     blContent.style.transform = "translateX(0vw) translateY(0)";
    //     blContent.style.width = "100vw";
    //     blContent.style.height = "100vh";
    //     blContent.style.top = "0";
    //     blContent.style.display = "flex";
    //     blContent.style.alignItems = "center";
    //     blContent.style.justifyContent = "center";
    //     blContent.style.background = "var(--background-transparent)";
    //     blContent.style.zIndex = "200";
    //     trBtn.style.zIndex = "100";
    //     tlBtn.style.zIndex = "100";
    //     blBtn.style.zIndex = "300";
    //     brBtn.style.zIndex = "100";
    //     projectOne.style.width = "70%";
    //     projectOne.style.margin = "auto auto 0.5rem";
    //     projectTwo.style.width = "70%";
    //     projectTwo.style.margin = "auto auto 0.5rem";
    //     projectThree.style.width = "70%";
    //     projectThree.style.margin = "auto auto 0.5rem";
    //   } else if (window.innerWidth <= 1100) {
    //     blActive = "translateX(0) translateY(0)";
    //     blContent.style.transform = "translateX(0vw) translateY(0)";
    //     blContent.style.width = "100vw";
    //     blContent.style.height = "100vh";
    //     blContent.style.top = "0";
    //     blContent.style.display = "flex";
    //     blContent.style.alignItems = "center";
    //     blContent.style.justifyContent = "center";
    //     blContent.style.background = "var(--background-transparent)";
    //     blContent.style.zIndex = "200";
    //     trBtn.style.zIndex = "100";
    //     tlBtn.style.zIndex = "100";
    //     blBtn.style.zIndex = "300";
    //     brBtn.style.zIndex = "100";
    //     projectOne.style.width = "40%";
    //     projectOne.style.margin = "auto auto 0.5rem";
    //     projectTwo.style.width = "40%";
    //     projectTwo.style.margin = "auto auto 0.5rem";
    //     projectThree.style.width = "40%";
    //     projectThree.style.margin = "auto auto 0.5rem";
    //   } else {
    //     blActive = "translateX(10vw) translateY(7vh)";
    //     blContent.style.transform = "translateX(10vw) translateY(7vh)";
    //     blContent.style.width = "15rem";
    //     blContent.style.height = "0";
    //     blContent.style.top = "40vh";
    //     blContent.style.display = "block";
    //     projectOne.style.width = "100%";
    //     projectTwo.style.width = "100%";
    //     projectThree.style.width = "100%";
    //   }
    //   break;

    // case "bottom-right":
    //   if (window.innerWidth <= 1100) {
    //     brActive = "translateX(0) translateY(0)";
    //     brContent.style.transform = "translateX(0vw) translateY(0)";
    //     brContent.style.width = "100vw";
    //     brContent.style.height = "100vh";
    //     brContent.style.bottom = "0";
    //     brContent.style.display = "flex";
    //     brContent.style.flexDirection = "column";
    //     brContent.style.alignItems = "center";
    //     brContent.style.justifyContent = "center";
    //     brContent.style.background = "var(--background-transparent)";
    //     brContent.style.zIndex = "200";
    //     trBtn.style.zIndex = "100";
    //     tlBtn.style.zIndex = "100";
    //     blBtn.style.zIndex = "100";
    //     brBtn.style.zIndex = "300";
    //   } else {
    //     brActive = "translateX(-5vw) translateY(0)";
    //     brContent.style.transform = "translateX(-5vw) translateY(0)";
    //     brContent.style.width = "30vw";
    //     brContent.style.height = "0";
    //     brContent.style.bottom = "30vh";
    //     brContent.style.display = "block";
    //   }
    //   break;

    default:
  }
}

// Store last reverse animation, ready to be played
let lastReverseAnimation = "";

// Play animation function
function playAnimation(animation, reverseAnimation) {
  // Remove all the animation classes from heroImage
  heroImage.className = "";

  if (lastReverseAnimation !== "") {
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(function () {
      heroImage.classList.remove(lastReverseAnimation);
      heroImage.classList.add(animation);
      lastReverseAnimation = reverseAnimation;
    }, 200);
  } else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

function playClosingAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  // trBtn.innerHTML = "Experience";
  // blBtn.innerHTML = "Projects";
  // brBtn.innerHTML = "Contact";

  switch (activeCorner) {
    case "top-left":
      tlBtn.style.background = backgroundColour;
      tlBtn.style.color = textColour;
      tlContent.style.transform = tlHidden;
      break;
    // case "top-right":
    //   trBtn.style.background = backgroundColour;
    //   trBtn.style.color = textColour;
    //   trContent.style.transform = trHidden;
    //   break;
    // case "bottom-left":
    //   blBtn.style.background = backgroundColour;
    //   blBtn.style.color = textColour;
    //   blContent.style.transform = blHidden;
    //   break;
    // case "bottom-right":
    //   brBtn.style.background = backgroundColour;
    //   brBtn.style.color = textColour;
    //   brContent.style.transform = brHidden;
    //   break;
    default:
  }

  heroImage.className = "";
  lastReverseAnimation = "";
  activeCorner = "";
  heroImage.classList.add(reverseAnimation);
  setTimeout(function () {
    heroImage.classList.remove(reverseAnimation);
  }, 200);
}

// Onclick corner button function - only About

tlBtn.onclick = function () {
  if (activeCorner === "top-left") {
    playClosingAnimation("reverse-animate-top-left");
  } else {
    // trBtn.innerHTML = "Experience";
    // blBtn.innerHTML = "Projects";
    // brBtn.innerHTML = "Contact";

    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr;<br/>About";

    handleWindowResize();
    playAnimation("animate-top-left", "reverse-animate-top-left");

    // trBtn.style.background = backgroundColour;
    // brBtn.style.background = backgroundColour;
    // blBtn.style.background = backgroundColour;
    tlBtn.style.background = backgroundColourAlt;

    // trBtn.style.color = textColour;
    // brBtn.style.color = textColour;
    // blBtn.style.color = textColour;
    tlBtn.style.color = textColourAlt;

    // trContent.style.transform = trHidden;
    // brContent.style.transform = brHidden;
    // blContent.style.transform = blHidden;
    tlContent.style.transform = tlActive;
  }
};

// trBtn.onclick = function () {
//   if (activeCorner === "top-right") {
//     playClosingAnimation("reverse-animate-top-right");
//   } else {
//     tlBtn.innerHTML = "About";
//     blBtn.innerHTML = "Projects";
//     brBtn.innerHTML = "Contact";

//     // Setting activeCorner
//     activeCorner = "top-right";
//     trBtn.innerHTML = "&uarr;<br/>Experience";

//     handleWindowResize();
//     playAnimation("animate-top-right", "reverse-animate-top-right");

//     // Change background colours
//     trBtn.style.background = backgroundColourAlt;
//     brBtn.style.background = backgroundColour;
//     blBtn.style.background = backgroundColour;
//     tlBtn.style.background = backgroundColour;

//     // Change text colours
//     trBtn.style.color = textColourAlt;
//     brBtn.style.color = textColour;
//     blBtn.style.color = textColour;
//     tlBtn.style.color = textColour;

//     // Change positions of the corner content
//     trContent.style.transform = trActive;
//     brContent.style.transform = brHidden;
//     blContent.style.transform = blHidden;
//     tlContent.style.transform = tlHidden;
//   }
// };

// blBtn.onclick = function () {
//   if (activeCorner === "bottom-left") {
//     playClosingAnimation("reverse-animate-bottom-left");
//   } else {
//     tlBtn.innerHTML = "About";
//     trBtn.innerHTML = "Experience";
//     brBtn.innerHTML = "Contact";

//     // Setting activeCorner
//     activeCorner = "bottom-left";
//     blBtn.innerHTML = "Projects<br/>&darr;";

//     handleWindowResize();
//     playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

//     // Change background colours
//     trBtn.style.background = backgroundColour;
//     brBtn.style.background = backgroundColour;
//     blBtn.style.background = backgroundColourAlt;
//     tlBtn.style.background = backgroundColour;

//     // Change text colours
//     trBtn.style.color = textColour;
//     brBtn.style.color = textColour;
//     blBtn.style.color = textColourAlt;
//     tlBtn.style.color = textColour;

//     // Change positions of the corner content
//     trContent.style.transform = trHidden;
//     brContent.style.transform = brHidden;
//     blContent.style.transform = blActive;
//     tlContent.style.transform = tlHidden;
//   }
// };

// brBtn.onclick = function () {
//   if (activeCorner === "bottom-right") {
//     playClosingAnimation("reverse-animate-bottom-right");
//   } else {
//     tlBtn.innerHTML = "About";
//     trBtn.innerHTML = "Experience";
//     blBtn.innerHTML = "Projects";

//     // Setting activeCorner
//     activeCorner = "bottom-right";
//     brBtn.innerHTML = "Contact<br/>&darr;";

//     handleWindowResize();
//     playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

//     // Change background colours
//     trBtn.style.background = backgroundColour;
//     brBtn.style.background = backgroundColourAlt;
//     blBtn.style.background = backgroundColour;
//     tlBtn.style.background = backgroundColour;

//     // Change text colours
//     trBtn.style.color = textColour;
//     brBtn.style.color = textColourAlt;
//     blBtn.style.color = textColour;
//     tlBtn.style.color = textColour;

//     // Change positions of the corner content
//     trContent.style.transform = trHidden;
//     brContent.style.transform = brActive;
//     blContent.style.transform = blHidden;
//     tlContent.style.transform = tlHidden;
//   }
// };
