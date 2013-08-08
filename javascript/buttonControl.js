document.getElementById('games').onclick = function() {
   document.getElementById('header').innerHTML="Video Game Programming";
   document.getElementById('bottomImage').innerHTML='';  
   
   resetClass();
   document.getElementById('games').className = "gamesSelected";
}

document.getElementById('design').onclick = function() {
   document.getElementById('header').innerHTML="Designs and Human Computer Interaction";
   document.getElementById('bottomImage').innerHTML=''; 
   
   resetClass();
   document.getElementById('design').className = "designSelected";
}

document.getElementById('education').onclick = function() {
   document.getElementById('header').innerHTML="Education Program";
    document.getElementById('bottomImage').innerHTML='<img src="../images/washUpic.png" alt="WashU"/>'; 

   resetClass();
   document.getElementById('education').className = "educationSelected"; 
}

document.getElementById('mobile').onclick = function() {
   document.getElementById('header').innerHTML="Mobile Development";
   document.getElementById('bottomImage').innerHTML=''; 

   resetClass();
   document.getElementById('mobile').className = "mobileSelected"; 
}

document.getElementById('leap').onclick = function() {
   document.getElementById('header').innerHTML="Leap Motion and L3DC";
   document.getElementById('bottomImage').innerHTML=''; 

   resetClass();
   document.getElementById('leap').className = "leapSelected"; 
}

document.getElementById('glass').onclick = function() {
   document.getElementById('header').innerHTML="Google Glass Development";
   document.getElementById('bottomImage').innerHTML='';

   resetClass();
   document.getElementById('glass').className = "glassSelected";  
}

function resetClass()
{
document.getElementById('games').className = "games";
document.getElementById('design').className = "design";
document.getElementById('education').className = "education";
document.getElementById('mobile').className = "mobile";
document.getElementById('leap').className = "leap";
document.getElementById('glass').className = "glass";

}




