
function preload() {
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	world_start = loadSound("world_start.wav"); 
	mario_gameover=loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav"); //kill
	mario_die=loadSound("mariodie.wav"); //each time Mario dies in his 1st and 2nd life, after 3rd life the gameover sound plays 
	setSprites();
	MarioAnimation();
	
}

function setup() {
	canvas = createCanvas(1240,336);
	initializeInSetup(mario);//canvas holding the game
	canvas.parent("canvas1"); //aligning this canvas with the canvas, actually adding the canvas into the div
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game-console");
	poseNet=ml5.poseNet(video,modelLoaded); //Initializing the posenet model
	poseNet.on('pose',getPoses); //Triggers getposes function; all poses will be identified 
}

function modelLoaded()
{
	console.log("Model has loaded");
}

function getPoses(result)
{
if (result.length>0)
{
	console.log(result); //all the poses will be in the console accoriding to the webcam view
	noseX=result[0].pose.nose.x; //fetching x and y position of nose
	noseY=result[0].pose.nose.y;
}
}

function draw() {
	game()
}
