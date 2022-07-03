var canvas = document.querySelector(".canvas")
if(canvas != null){
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var context = canvas.getContext("2d");
    context.fillStyle = "#FFFFFF";
    context.fillRect(25,25,25,25);
    console.log(canvas);
}else{
    console.log("no canvas")
}



function doSomething(){
    document.getElementById("header").innerHTML = "COOL!";
    console.log("hello");
}