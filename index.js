// document.querySelector(".set").addEventListener("click",handleclick);
// function handleclick(){
//     var audio=new Audio('sounds/tom-1.mp3');
//     audio.play();
//     // alert("i got clicked");
// }
var a=document.querySelectorAll(".drum").length;
for(var i=0;i<a;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
function handleclick(){
var b=this.innerHTML;
 makesound(b);
 buttonanimation(b);
}

}
document.addEventListener("keypress",function(event){
   makesound(event.key);
   buttonanimation(event.key);
}
);
function makesound(key){
   switch(key){
      case "w":
          var tom1=new Audio('sounds/tom-1.mp3');
             tom1.play(); 
             break;  
             case "a":
              var tom2=new Audio('sounds/tom-2.mp3');
                 tom2.play(); 
                 break; 
                   case "s":
                 var tom3=new Audio('sounds/tom-3.mp3');
                    tom3.play(); 
                    break;  
                     case "d":
                    var tom4=new Audio('sounds/tom-4.mp3');
                       tom4.play(); 
                       break;  
                        case "j":
                       var snare=new Audio('sounds/snare.mp3');
                          snare.play(); 
                          break;  
                          case "k":
                              var kick=new Audio('sounds/kick-bass.mp3');
                                 kick.play(); 
                                 break;  
                             case "l":
                             var crash=new Audio('sounds/crash.mp3');
                             crash.play(); 
                             break;
                             default:console.log(b);
  
  }
}
function buttonanimation(currentkey){
  var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
   activebutton.classList.remove("pressed");
  },100 );
}

