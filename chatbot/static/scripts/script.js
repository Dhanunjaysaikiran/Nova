
function but(){
    var y = document.getElementById("tog");
    var x = document.getElementById("nova");
    if(x.style.display==="none"){
        x.style.display="block";
        y.style.top="437px";
        y.style.right = "261px";
       

    }
    else{
        x.style.display="none";
        y.style.top = "595px";
        y.style.right="0px";
    }
    var z = document.getElementsByClassName("text2");
    z.setAttribute('id','anim');
    

}