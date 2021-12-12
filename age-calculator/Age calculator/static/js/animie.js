function ageindays(){
    var birthyear = prompt("what year were you born .. my good friend ??");
    var ageindayss =((2021-birthyear) * 365);
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('you are ' + ageindayss + ' days old , my friend !')
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


    function reset() {
        document.getElementById('ageindays').remove();
        document.getElementById('flexcatgen').remove();
    }
function catgenerator() {
    var image = document.createElement('img');
    var div = document.getElementById('flexcatgen');
    image.src = "https://media1.tenor.com/images/9870bb35ba3e9c8edc023d94e039217c/tenor.gif?itemid=12199043"
    div.appendChild(image);
}
