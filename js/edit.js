function goRightDoDark(){
    document.getElementById("mode").style.backgroundColor = "rgb(44, 0, 44)";
    document.getElementById("leftCircle").style.opacity = "0";
    document.getElementById("rightCircle").style.opacity = "1";
}
function goLeftDoLight(){
    document.getElementById("mode").style.backgroundColor = "rgb(161,211,255)";
    document.getElementById("leftCircle").style.opacity = "1";
    document.getElementById("rightCircle").style.opacity = "0";
}