    // naming every content to a variable
var  left = document.getElementById("one");
var  right = document.getElementById("two");
var light = document.getElementById("lamb");
var got = document.getElementById("three");

// alert for me
alert("HELLO THIS IS SEIF ELFAGGAL");
// the code for the first button
function lighton(){
 light.src = "images/pic_bulbon.gif";
 window.document.getElementById("div-co").style.backgroundColor ="blue";
 window.document.getElementById("three").innerHTML = "LAMB OFF";
}

// the code for switching off the button
function lightoff(){
    light.src = "images/pic_bulboff.gif";
    window.document.getElementById("div-co").style.backgroundColor ="green";
    window.document.getElementById("three").innerHTML = "LAMB ON";
}

// the code for the alternative button

function three(){
    switch(got.innerHTML){
        case "LAMB OFF":
            lightoff();
            break;
            case "LAMB ON":
                lighton();
                break; 
    }
}