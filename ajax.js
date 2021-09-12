// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function(){
//     if(this.readyState==4 && this.status==200)
//     {
//         var response = JSON.parse(this.responseText);
//         var output="";
//         for(var i = 0;i<response.length;i++)
//         {
//             output += "<li>" + response[i].title + "</li>";
//         }
//         document.getElementById("demo").innerHTML = output;
//     }
// };
// xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
// xhttp.send();

$(document).ready(function(){
    
    var length=0;
        $.getJSON("https://jsonplaceholder.typicode.com/todos",function(data){
            
            $(data).each(function(i, item){
                length++;
                if(item.completed)
                {
                    $('tbody').append($("<tr>")
                  .append($("<td>").append(item.userId))
                .append($("<td>").append(item.id))
                .append($("<td>").append(item.title))
                .append($("<td>").append(`<input type="checkbox" id=${length} checked="true">`)))
                }
                else
                {
                    $('tbody').append($("<tr>")
                  .append($("<td>").append(item.userId))
                .append($("<td>").append(item.id))
                .append($("<td>").append(item.title))
                .append($("<td>").append(`<input type="checkbox" id="${length}">`)))
                }
                
            });

        })
        // $('#check').click(function () {
        //   $('#check').each(function () {   
        //       if (this.checked) {
        //           $(this).attr('checked', true);
        //           count++;
        //       } else {
        //           $(this).removeAttr('checked');
        //           count--;
        //       }
        //   })
        //   location.reload();
        //   if(count==5)
        //     {
        //       alert("Congratulations! You just completed 5 tasks!");
        //       count=0;
        //     }
      });
      


const list = document.getElementsByClassName("table");
for (var i = 0 ; i < length; i++) {
    list[i].addEventListener('click' , checking()) ; 
 }
 
function checking(event){
    const element = event.target; 
    
    if(element.checked == "true"){
        count++;
    }else{
        count--;
    }
    return count;
}
    


async function pop()
{
    const count = await checking();
    if(count==5){
        alert("Congratulations! You just completed 5 tasks!");
        count=0;
    }
}

function check()
{
    login=document.getElementById("login");
    if(document.referrer.indexOf("login")!=-1)
    {
        login.innerText="Logout";
    }
        
}