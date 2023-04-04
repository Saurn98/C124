function setup(){
    video = createCapture(VIDEO)
    video.size(500, 500)
    video.position(200, 80)

    canvas = createCanvas(550, 550)
    canvas.position(900, 90)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw(){
}

function modelLoaded(){
    console.log("Model is loaded")
}

function gotPoses(results){
    if (results.length > 0){
        // console.log(results)
    }
}