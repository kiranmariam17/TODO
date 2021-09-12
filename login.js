var user=document.getElementById("username");
var pw=document.getElementById("pwd");

function login(){

    if(user.value=="admin")
    {
        if(pw.value=="12345")
        {
            return true;
        }
        else{
            error2.innerText="Invalid password";
            error2.style.color="red";
            error1.innerText="Valid username";
            error1.style.color="green";
        }
    }
    else{
        error1.innerText="Invalid username";
        error1.style.color="red";
    }
    return false;

}