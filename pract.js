let clickFunction=()=>{
     let tar=document.getElementsByClassName("mainHead")[0].children[0];
     let createElement=document.createElement("p");
     let createText=document.createTextNode("This is JAI");
     createElement.appendChild(createText);
     tar.appendChild(createElement);
}
let colorChange=()=>{
    let targ= document.getElementsByClassName("mainHead")[0].children[1];
    let tar1=targ.children[1];
    if(tar1.style.background=="green"){
        tar1.style.background="red"
    }
    else{
        tar1.style.background="green";
    }

}
let amazon=()=>{
    let target= document.getElementsByClassName("mainHead")[0].children[2];
    let str=target.children[0];
    str.href="https://www.amazon.in/"

}