 status="";
 video="";
  
 function setup() {
     video=createCapture(VIDEO);
     canvas=createCanvas(360,350);
     canvas.position(600,300);
     video.hide()
 }

 function start() {
     objectDetector=ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("objects_detected").innerHTML="Status: Detecting...";
     identifier=document.getElementById("identifier").value;
 }
 
 function modelLoaded() {
     console.log("Model is Loaded Successfuly!");
     status= true;
 }

 function draw() {
     image(video,0,0,360,350);
 }
