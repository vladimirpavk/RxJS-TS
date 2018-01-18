console.log("pure.js");

document.addEventListener('DOMContentLoaded', (event)=>{
    let buttonElement=document.getElementById('dugme1');
    buttonElement.addEventListener('click', (clickEvent)=>{
        console.log("dugme1 Clicked");        
    });
});