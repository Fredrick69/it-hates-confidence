status = "";
objects = [];

function setup()
{
  canvas=createCanvas(640, 420);
  canvas.center();

  objectDetector=ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML="status: Detecting objects."

}
function modelLoaded()
{
console.log("Model Loaded!");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects=results;
}

function preload()
{
  img=loadImage("https://media.istockphoto.com/id/627966690/photo/two-dogs-in-the-city.jpg?s=612x612&w=0&k=20&c=6Fj5qtEH9vs7ojnyfjF1mOgEA_i63rzAQtjtuVuw37A=");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    if(status!= "");
    {
      for (i = 0; 1 < objects.length; i++) {
        document.getElementById("status").innerHTML="status: object detected";
        fill("red");
        percent=floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("yellow");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

      }
    }
}