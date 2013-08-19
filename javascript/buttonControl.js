document.getElementById('games').onclick = function() {
   document.getElementById('header').innerHTML="Video Game Programming";
   document.getElementById('bottomImage').innerHTML="<img class='bottom' src='../images/color.png'/>";
   document.getElementById('bottomText').innerHTML = "<h3>C.O.L.O.R. and Leap Control</h3> <br> <p class='bottomText'> Stuff about games. </p>";    
   
   resetClass();
   document.getElementById('games').className = "gamesSelected";
}

document.getElementById('design').onclick = function() {
   document.getElementById('header').innerHTML="Designs and HCI";
   document.getElementById('bottomImage').innerHTML="<img class='bottom' src='../images/design.png'/>"; 
   document.getElementById('bottomText').innerHTML = "<h3>Iterative Design and User Testing</h3> <p class='bottomText'> Stuff about design. </p>";  
   
   resetClass();
   document.getElementById('design').className = "designSelected";
}

document.getElementById('education').onclick = function() {
   document.getElementById('header').innerHTML="Washington University";
   document.getElementById('bottomImage').innerHTML="<img class='bottom' src='../images/washUpic.png' alt='WashU'/>"; 
   document.getElementById('bottomText').innerHTML = "<h3>B.S. and M.S. in Computer Science</h3> <br> <p class='bottomText'> I am working with Professor Ron Cytron on algorithms that are aware of timings and can provide better average and worst case performance than comprable algorithms. </p> <br> <p class='bottomText'>So far my project has focussed on hash tables that can perform partial rehashes into a new table. The hash program, written in C, has a timing function that tracks inserts into the table and monitors the process. This allows me to extrapolate when a rehash must occur and if the rehash is in fact faster than a standard hash table. I am continuing to create a system of confidence intervals the algorithm can use to predict its timings. </p>"; 

   resetClass();
   document.getElementById('education').className = "educationSelected"; 
}

document.getElementById('mobile').onclick = function() {
   document.getElementById('header').innerHTML="Mobile Development";
   document.getElementById('bottomImage').innerHTML="<img class='bottom' src='../images/rsz_coolfire.jpg'/>"; 
   document.getElementById('bottomText').innerHTML = "<h3>Mobile Development at Coolfire</h3> <br> <p class='bottomText'> After taking a course covering iOS programming, I joined Coolfire Solutions as a Jr. Mobile Developer, part time throughout the Spring of 2013. During my time there I primarily worked on Reconn Surveyor Lite for Andriod. The application uses augmented reality to show satellite positions for satellites used for SATCOM. I worked on the augmented reality screen, the user interface, and some of the backend processes.</p> <br> <p class='bottomText'> After the release of Surveyor Lite, I began working on an iPad application called Viewpoint. The application creates a visually stunning interface for Microsoft Sharepoint and other file sharing software solutions. I worked on device rotation and user interface. </p>;";  

   resetClass();
   document.getElementById('mobile').className = "mobileSelected"; 
}

document.getElementById('leap').onclick = function() {
   document.getElementById('header').innerHTML="Leap Motion and L3DC";
   document.getElementById('bottomImage').innerHTML="<img class='bottom' src='../images/leapHand.png'/>"; 
   document.getElementById('bottomText').innerHTML = "<p class='bottomText'> Stuff about design. </p>";  

   resetClass();
   document.getElementById('leap').className = "leapSelected"; 
}

document.getElementById('glass').onclick = function() {
   document.getElementById('header').innerHTML="Google Glass Development";
   document.getElementById('bottomImage').innerHTML= "<img class='bottom' src='../images/glass.png'/>";
   document.getElementById('bottomText').innerHTML = "<p class='bottomText'> Stuff about glass. </p>";  

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




