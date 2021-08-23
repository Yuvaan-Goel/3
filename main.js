status= "";
objects= [];

function preload()
{
}

function setup()
{
    canvas = createCanvas(600, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw()
{
    image(video, 0, 0, 600, 400);
}