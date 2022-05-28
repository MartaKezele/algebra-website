var i = 0;
var j = 0;
var txt1 = 'Budi izvrstan u onom što voliš!';
var txt2 = 'ZAISKRI.'
var speed = 200;

function typeWriter() {
    if (i < txt1.length) {
        document.getElementById("typingText1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if (i == txt1.length) {
        document.getElementById("typingText2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
    }
}