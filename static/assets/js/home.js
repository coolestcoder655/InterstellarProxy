let inFrame;

try {
  inFrame = window !== top;
} catch (e) {
  inFrame = true;
}
if (!localStorage.getItem("ab")) localStorage.setItem("ab", true);
if (
  !inFrame &&
  !navigator.userAgent.includes("Firefox") &&
  localStorage.getItem("ab") === "true"
) {
  const popup = open("about:blank", "_blank");
  setTimeout(() => {
    if (popup || popup.closed) {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");

      const name = localStorage.getItem("name") || "My Drive - Google Drive";
      const icon =
        localStorage.getItem("icon") ||
        "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

      doc.title = name;
      link.rel = "icon";
      link.href = icon;

      iframe.src = location.href;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";

      doc.head.appendChild(link);
      doc.body.appendChild(iframe);

      const pLink = localStorage.getItem(encodeURI("pLink")) || getRandomUrl();
      location.replace(pLink);

      const script = doc.createElement("script");
      script.textContent = `
      window.onbeforeunload = function (event) {
        const confirmationMessage = 'Leave Site?';
        (event || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
      };
    `;
      doc.head.appendChild(script);
    }
  }, 2000);
}
// Particles
document.addEventListener("DOMContentLoaded", (event) => {
  if (window.localStorage.getItem("Particles") === "true") {
    const particlesConfig = {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 40,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
    particlesJS("particles-js", particlesConfig);
  }
});
// Splash texts
const SplashT = [
  "The FitnessGram Pacer Test is a multistage aerobic capacity test...",
  "Checkout our suggestions button!",
  "Click on the title for a surprise!",
  "You can cloak this site as almost any site!",
  "Make sure to export your data for safekeeping!",
];

let SplashI = Math.floor(Math.random() * SplashT.length);
const SplashE = document.getElementById("splash");

function US() {
  SplashI = (SplashI + 1) % SplashT.length;
  SplashE.innerText = SplashT[SplashI];
}

SplashE.innerText = SplashT[SplashI];

SplashE.addEventListener("click", US);
// Random URL
function getRandomUrl() {
  const randomUrls = [
    "https://kahoot.it",
    "https://classroom.google.com",
    "https://drive.google.com",
    "https://google.com",
    "https://docs.google.com",
    "https://slides.google.com",
    "https://www.nasa.gov",
    "https://blooket.com",
    "https://clever.com",
    "https://edpuzzle.com",
    "https://khanacademy.org",
    "https://wikipedia.org",
    "https://dictionary.com",
  ];
  return randomUrls[randRange(0, randomUrls.length)];
}

function randRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function surpriseTitle() {
  const titleElement = document.querySelector(".title");
  const originalTitle =
    "&#73;&#110;&#116;&#101;&#114;&#115;&#116;&#101;&#108;&#108;&#97;&#114;"; // "Interstellar"

  const surpriseMessages = [
    "&#72;&#101;&#108;&#108;&#111;&#33;", // "Hello!"
    "&#65;&#119;&#101;&#115;&#111;&#109;&#101;&#33;", // "Awesome!"
    "&#67;&#111;&#111;&#108;&#33;", // "Cool!"
    "&#77;&#97;&#103;&#105;&#99;&#33;", // "Magic!"
    "&#87;&#111;&#119;&#33;", // "Wow!"
    "&#83;&#117;&#114;&#112;&#114;&#105;&#115;&#101;&#33;", // "Surprise!"
    "&#89;&#97;&#121;&#33;", // "Yay!"
    "&#68;&#97;&#110;&#99;&#101;&#33;", // "Dance!"
    "&#70;&#117;&#110;&#33;", // "Fun!"
    "&#83;&#109;&#105;&#108;&#101;&#33;", // "Smile!"
  ];

  // Get random surprise message
  const randomMessage = surpriseMessages[randRange(0, surpriseMessages.length)];

  // Add fun animation class
  titleElement.style.transform = "scale(1.1) rotate(5deg)";
  titleElement.style.transition = "all 0.3s ease";
  titleElement.style.color =
    "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color

  // Change to surprise message
  titleElement.innerHTML = randomMessage;

  // Reset after 2 seconds
  setTimeout(() => {
    titleElement.style.transform = "";
    titleElement.style.color = "";
    titleElement.innerHTML = originalTitle;
  }, 2000);
}
