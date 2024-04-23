let passwordBox = document.querySelector(".passwordBox");
let generatePassBtn = document.querySelector(".generatePassBtn");
let copyBtn = document.querySelector(".copyBtn");
let colorCng = document.querySelector(".colorCng");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*|><()_?/+=-[]{}:";
const lenghtt = 14;
let allcate = uppercase + lowercase + number + symbol;

let makePassword =()=>{
    let password = "";
    while (lenghtt > password.length){
        password += allcate[Math.floor(Math.random() * allcate.length)];
    }
    passwordBox.value = password ;
}
/* copy button fun........ */
const copypassword = ()=>{

    if(passwordBox.value.length > 0){
        passwordBox.select();
        document.execCommand("copy");
        alert(`Password copy is ${passwordBox.value}`);
    }else{
        alert(`Generate password Fast`);
    };
}
copyBtn.addEventListener("click",copypassword);

const theme = localStorage.getItem("theme");
if (theme) {
    document.body.classList.add("dark-mode");
}
const changeMode = ()=>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark-mode");
    }else{
        localStorage.removeItem("theme");
    }
}
colorCng.addEventListener("click",changeMode);

