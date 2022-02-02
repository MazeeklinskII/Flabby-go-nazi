console.log("hello wolrd")

//game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
      music.loop = true;
      music.volume = 0.1;
const debugModeIsOn = false;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

// bird variables
const birdImage = new Image(300, 300);
      birdImage.src = "../assets/images/mod.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.1;
const birdXPosition = 250;
const birdHitboxRadius = 100;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
const birdFlapForce = -5;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;


// score variables
const scoreImage = new Image(300, 300);
      scoreImage.src = "../assets/images/3090.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "blue";
let scoreValue = 0;

// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// fireball variables
const fireballImage = new Image(350, 350);
      fireballImage.src = "../assets/images/gurl.png";
const fireballXSpeed = -1;
const fireballHitboxRadius = 0;
const fireballSpawnInterval = 10000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 700;
const coinXSpeed = -20;
const coinSpawnInterval = 0.0000001;
const coinValue = 31793892;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// diamond variables
const diamondSound = coinSound;
const diamondImage = new Image(60, 60);
      diamondImage.src = "../assets/images/pc.png";
const diamondHitboxRadius = 30;
const diamondXSpeed = -10;
const diamondSpawnInterval = 100;
const diamondValue = 5;
let diamondTimeSinceLastSpawn = diamondSpawnInterval
let diamonds = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";