enterButtonb.onclick=function(){
    let mailfi=document.getElementById("mail").value;
    let passfi=document.getElementById("pass").value;
    if(mailfi===""&&passfi===""){
        document.getElementById("mail").className="emptyInput";
        document.getElementById("pass").className="emptyInput";
    }
    else if(mailfi===""){
        document.getElementById("mail").className="emptyInput";
    }
    else if(passfi===""){
        document.getElementById("pass").className="emptyInput";
    }
    else if(passfi==="admin"&&mailfi==="admin@edu.mirea.ru"){
        location.href="mainPage.html";
    }
}