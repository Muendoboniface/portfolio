let i = 0;
let j,
button = document.querySelectorAll("button"),
projects = document.querySelector(".projects"),
paragraph = document.querySelector("p:first-of-type"),
header = document.querySelectorAll("h5"),
pos = 0, prof;
if(window.innerWidth < '501'){ prof = document.querySelector(".left > h4"), prof.innerHTML = ''}
else{ prof = document.querySelector(".prof > h3")};
let text = ["SOFTWARE DEVELOPER", "WEB DEVELOPER", "PROGRAMMER"];
window.onload = setTimeout(TextIn, 1000)
function TextIn() {
    if (i < text[pos].length) {
        prof.innerHTML += text[pos].charAt(i);
        i++;
        setTimeout(TextIn, 180)
    }
    if (i == text[pos].length) {
        setTimeout(clear, 1400)
if (i == -1) {

    if (pos < 2) {
        pos++;
    }
    else if (pos == 2) {
        pos = 0;
    }
}
    }
}
function clear() {
    j = prof.innerHTML.length;
    if (j > 0) {
        prof.textContent = prof.textContent.slice(0, i);
        i--;
        setTimeout(clear, 50)
if (i == -1) {
    if (pos < 2) {
        pos++;
    }
    else if (pos == 2) {
        pos = 0;
    }
    setTimeout(TextIn,180)
}
    }
}
    function hire(){
   let choose =  prompt("Choose your preffered media to chat with me : \n\n 1. WhatsApp.\n 2. Email.\n 3.Phone call");
    if(choose == 1){
        window.location.assign("http://wa.me/+254705200170");
    }
    if(choose == 2){
        window.location.assign("mailto:bmuendo336@gmail.com")
    }
    if(choose == 3){
        window.location.assign("tel:+254705200170")
    }
    if(choose ==" " || choose==0 || choose > 3){
       choose = prompt("Invalid selection !!\nChoose your preffered media to chat with me : \n\n 1. WhatsApp.\n 2. Email.\n 3.Phone Call");
    }
}
function openNav(el){
    if(el.parentElement.clientHeight == 40){
        el.parentElement.style.height = 'initial';
        el.parentElement.style.marginTop = '210px';
    }
    else { closeNav(el) }
}
function closeNav(el){
    el.parentElement.style.height = '40px';
    el.parentElement.style.margin = '0';
}
function Scroll(el){
    window.scrollTo({
        top: document.getElementById(el.dataset.href).offsetTop - 80,
        behavior: 'smooth',
    })
    closeNav(el);
    }
function goTo(url){
    let a = document.createElement("a");
    a.href = url;
    a.click();
}
function openProjects(){
    paragraph.style.display = "none";
    header[0].style.display = "none";
    header[1].style.display = "block";
    document.getElementsByTagName("a")[1].style.borderBottom = "3px solid blue";
    header[1].style.color = "rgb(23, 184, 23)";
    projects.style.display = "flex"
        projects.childNodes.forEach(element => {
        element.onclick = function(){
            let a = document.createElement("a");
            a.href = element.dataset.url;
            a.click();
        }
    });
}