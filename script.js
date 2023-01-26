var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    
}
hamburger=document.querySelector(".hamburger");
        hamburger.onclick=function(){
        navBar=document.querySelector(".nav-list");
        navBar.classList.toggle("active");
        }

        phone=document.getElementById("phone");
        phone.onclick=function(){
            contactNumber=document.getElementById("contact-phone");
            if(contactNumber.style.display==="none"){
                contactNumber.style.display="block";
            }
            else{
                contactNumber.style.display="none";
            }
        }

        
        email=document.getElementById("email");
        email.onclick=function(){
            contactEmail=document.getElementById("contact-email");
            if(contactEmail.style.display==="none"){
                contactEmail.style.display="block";
            }
            else{
                contactEmail.style.display="none";
            }
        }

       