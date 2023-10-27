var song = ""
var song2 = ""

function setup(){
    canvas = createCanvas(600, 600)
    canvas.center()
    background("white")
    video = createCapture(VIDEO)
    video.size(600, 600)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function preload(){
    song = loadSound("music.mp3")
    song = loadSound("music2.mp3")
}
function draw(){
    image(video, 0, 0, 600, 600)
    fill("black")
    stroke("black")
}