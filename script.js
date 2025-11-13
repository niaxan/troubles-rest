// =======================
// Game state variables
// =======================
let gameState = {
  hasMap: false,
  trustGuide: false,
};

// =======================
// Story data
// =======================
const story = {
  start: {
    background: "full-background.jpg",
    character: "half-man.png",
    ui: {
      panelBackground: "none",
      text: `
        'Vesta! Over here!' A merchant waves frantically, apron streaked with honey and flour. 
        His eyes are wide, the kind of wide-eyed panic that makes the heart race even when you're exhausted. 
        “The festival offerings!” he calls. 'I can't prepare them alone! 
        Will you <span class="choice" data-next="forest">help with the offerings</span> 
        or <span class="choice" data-next="walkAway">walk away</span>? Vesta hesitates. The stakes are immediate: if the offerings are imperfect, the gods might notice. 
        The city, the festival, the prayers—it all depends on care and precision. 
        But the fog presses in, whispering that they are too tired, too scattered, too fragile.'
      `,
      choices: [] // no buttons, inline only
    }
  },

  walkAway: {
    background: "full-background.jpg",
    character: "half-man.png",
    ui: {
      panelBackground: "none",
      text: "Vesta turns away, ignoring the merchant’s pleas. The sound of bustling streets fills the silence they leave behind.",
      choices: [
        { text: "Go back", next: "forest" }
      ]
    }
  },

  forest: {
    background: "full-background.jpg",
    character: "marigold.png",
    ui: {
      panelBackground: "border2.webp",
      text: `They nod, drawing a deep, steadying breath. 
        The merchant leads them to a quiet corner behind the carts, where straw mats and crates mark a temporary workspace. 
        He spreads out flowers, herbs, and small jars of scented oils.
        'We must honor the gods with care,' he mutters, almost to himself. 
        'Every petal, every sprinkle, every drop matters.'
        Vesta kneels, hands shaking slightly. They pick up a wilted marigold first, brushing their fingers across the petals. 
        The tactile sensation is grounding, though the fog lingers.  
        <span class="choice" data-next="boy">Add to the offering</span> 
        or <span class="choice" data-next="start">give up?</span>.`,
      choices: []
    }
  },

  boy: {
    background: "full-background.jpg",
    character: "boy.png",
    ui: {
      panelBackground: "border2.webp",
      text: `A small child wanders nearby, clutching a basket of apples. <span class="choice" data-next="mountain">Add to the boy's offering</span> or <span class="choice" data-next="start">ignore him</span>.`,
      choices: []
    }
  },

  mountain: {
    background: "full-background.jpg",
    character: "oils.png",
    ui: {
      panelBackground: "border2.webp",
      text: `
        Vesta pauses, bends down, and arranges a few petals carefully atop the fruit. 
        The child claps softly, then runs off, leaving Vesta feeling a flutter of warmth amid the exhaustion. 
        The merchant hands them a small jar of oils. “For the incense,” he says. 
        “Add just a few drops to the dishes. Too much, and the scent overpowers the prayer. 
        Too little, and the gods may not notice.” 
        <span class="choice" data-next="cave">Drip a few drops</span> 
        or <span class="choice" data-next="start">shake the incense</span>.
      `,
      choices: []
    }
  },

  cave: {
    background: "full-background.jpg",
    character: "lavender-rosemary.png",
    ui: {
      panelBackground: "border2.webp",
      text: `
        They pour carefully, then step back, inhale deeply, and realize the scent itself is drawing them into the moment. 
        A woman approaches, her steps hesitant, fingers clasping a folded cloth. 
        'Are these for the festival tomorrow?' she asks, voice soft but urgent. 
        Vesta nods. She leans closer. 'I… I have a small request. 
        Could you arrange a dish with lavender and rosemary? It's for my ritual. I am… uneasy. It calms me.' 
        Vesta looks down at the herbs, anxiety prickling at the edges of their awareness. If they make a mistake, the ritual may fail; if they delay, the woman may leave disappointed.
        <span class="choice" data-next="mapTaken">Arrage the lavender and rosemary</span>, or
        <span class="choice" data-next="noMap">leave it</span>, or
        or <span class="choice" data-next="start">yell at her.</span>.
      `,
      choices: []
    }
  },

  mapTaken: {
    background: "full-background.jpg",
    character: "woman.png",
    ui: {
      panelBackground: "border2.webp",
      text: `
        But they draw on the rhythm they have already established: petals, herbs, incense, oil. They crush, sprinkle, arrange. Slowly, deliberately. The woman's face softens as she watches, tension easing.The merchant hovers nearby, observing quietly. “See?” he murmurs when Vesta finishes. “Even in fog, in exhaustion, your hands remember what your heart knows. The offerings are right.”
        <span class="choice" data-next="deeperCave">Move onto the next offering</span> 
        or <span class="choice" data-next="forest">call it a day</span>?
      `,
      choices: [],
    }
  },

  noMap: {
    background: "full-background.jpg",
    character: "none",
    ui: {
      panelBackground: "border2.webp",
      text: `
        You leave the map untouched and turn back.
        <span class="choice" data-next="forest">Return to the forest</span>.
      `,
      choices: []
    }
  },

  deeperCave: {
    background: "full-background.jpg",
    character: "incence.png",
    ui: {
      panelBackground: "none",
      text: `
        As they worked, the incense burner shimmered. The flame wavered, curling smoke into deliberate, spiraling patterns—too graceful for mere chance. From within the glow, a presence stirred: the spirit of the hearth, old as ash, kind as firelight.“Truble,” the voice murmured, rich with age and warmth. “You pour your care into every crack and corner. You mend, you soothe, you build the warmth of others' homes.” A pause, soft as the settling of coals. “But tell me, little flame… when did you last tend your own?”
        <span class="choice" data-next="campfire">Take a moment to center yourself</span> 
        or <span class="choice" data-next="mapTaken">work harder to get all of the offerigs finished on time</span>?
      `,
      choices: []
    }
  },

  campfire: {
    background: "full-background.jpg",
    character: "incence.png",
    ui: {
      panelBackground: "border2.webp",
      text: `
        The words struck deep. Vesta's shoulders sagged. They paused, just for a breath, resting hands against the warmth of the flame. They inhaled. The warmth seeped into their bones, reminding them of a kitten's purr, of quiet evenings before the hearth.The fog thinned, just slightly more.
        <span class="choice" data-next="loot">Finish with the offerings</span> 
        or <span class="choice" data-next="sleep">decide that that's enough for the day, and hand it al lback over to the merchant?</span>?
      `,
      choices: []
    }
  },

  loot: {
    background: "full-background.jpg",
    character: "all.png",
    ui: {
      panelBackground: "border2.webp",
      text: `
        By late afternoon, the offerings lay in careful rows—flowers bright,incense curling skyward. The market's chaos still roared—hawkers shouting, carts clattering—but here, in this small circle of order, there was calm. A crowd gathered: children tugging their parents forward, merchants nodding approval, strangers pausing to breathe the air. The flour-dusted merchant touched Truble's shoulder gently. “You have the touch. The gods will be pleased.” Truble exhaled slowly. The fog was not gone, but it no longer swallowed them whole. The market was still chaotic, dusty, loud—but no longer unbearable. Inside, a flame burned steady. <span class="choice" data-next="start">The End. Replay?</span>
      `,
      choices: []
    }
  },

  sleep: {
    background: "dream.jpg",
    character: "none",
    ui: {
      panelBackground: "border2.webp",
      text: `
        You close your eyes for just a moment... and wake up somewhere else.
        <span class="choice" data-next="start">Continue</span>.
      `,
      choices: []
    }
  }
};

// =======================
// Text typing function using GSAP
// =======================
function typeText(text) {
  const textElem = document.getElementById("story-text");
  textElem.innerHTML = ""; // clear previous text

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = text;

  let sequence = [];

  // Recursive function to process nodes
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      // Split text node into characters
      node.textContent.split("").forEach(char => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = 0;
        textElem.appendChild(span);
        sequence.push(span);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.classList.contains("choice")) {
        // For choice spans, append immediately but invisible
        node.style.opacity = 0;
        textElem.appendChild(node);
        sequence.push(node); // treat it as next in sequence
      } else {
        // If other elements exist, recurse
        Array.from(node.childNodes).forEach(processNode);
      }
    }
  }

  Array.from(tempDiv.childNodes).forEach(processNode);

  // Animate everything in sequence
  gsap.to(sequence, {
    opacity: 1,
    duration: 0.03,
    stagger: 0.03,
    ease: "power1.inOut",
    onComplete: () => {
      // Re-bind choice click events
      textElem.querySelectorAll(".choice").forEach(elem => {
        elem.addEventListener("click", () => {
          const next = elem.dataset.next;
          if (!story[next]) return console.error(`Scene "${next}" not found.`);
          showScene(next);
        });
      });
    }
  });
};


// =======================
// Scene logic
// =======================
function showScene(sceneId) {
  let scene = story[sceneId];

  if (!scene) {
    console.error(`Scene "${sceneId}" not found.`);
    return;
  }

  // Handle background
  document.getElementById("background").style.backgroundImage =
    `url('images/${scene.background}')`;

  // Handle panel background
  if (scene.ui.panelBackground) {
    document.getElementById("story-panel").style.backgroundImage =
      `url('images/${scene.ui.panelBackground}')`;
  } else {
    document.getElementById("story-panel").style.backgroundImage = "none";
  }

  // Handle character
  const charElem = document.getElementById("character");
  if (scene.character === "none") {
    charElem.style.display = "none";
  } else {
    charElem.style.display = "block";
    charElem.style.backgroundImage = `url('images/${scene.character}')`;
  }

  // Animate text using typewriter effect
  typeText(scene.ui.text);

  // Handle inline choices inside text
  const textElem = document.getElementById("story-text");

  // Use a small timeout to allow GSAP spans to be added before binding events
  setTimeout(() => {
    textElem.querySelectorAll(".choice").forEach(elem => {
      elem.addEventListener("click", () => {
        const next = elem.dataset.next;
        if (!story[next]) return console.error(`Scene "${next}" not found.`);
        showScene(next);
      });
    });
  }, 10);

  // Handle normal button choices (optional fallback)
  const choicesElem = document.getElementById("choices");
  choicesElem.innerHTML = "";
  scene.ui.choices.forEach(choice => {
    if (choice.showIf && !choice.showIf(gameState)) return;

    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => {
      if (choice.effect) choice.effect();
      showScene(choice.next);
    };
    choicesElem.appendChild(button);
  });
};

// =======================
// Start the story
// =======================
showScene("start");



// =======================
// Character particle effect
// =======================
// ====== PARTICLE EFFECT ======
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const particles = [];

function createParticle() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.8 + canvas.height * 0.2;
  particles.push({
    x,
    y,
    radius: Math.random() * 2 + 1,
    alpha: 1,
    speedY: Math.random() * -0.5 - 0.2
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.y += p.speedY;
    p.alpha -= 0.01;
    if (p.alpha <= 0) particles.splice(i, 1);
    ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}

setInterval(() => createParticle(), 100);
animateParticles();
