function clickbutton(val){
    document.getElementById("screen").value+=val
}

function cleardisplay(){
    document.getElementById("screen").value=""
}

function equalcalc(){
    var ttt=document.getElementById("screen").value
    var result=eval(ttt)
    document.getElementById("screen").value=result
}