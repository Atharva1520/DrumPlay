
for(var i =0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function clickHandle(){
       
       var buttoninnerHtml = this.innerHTML;
       makesound(buttoninnerHtml);
       buttonanimation(buttoninnerHtml);
      
    });

    document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonanimation(event.key);
    });

    

    function makesound(key){
        switch(key){
            case "w":
                var w = new Audio("sounds/crash.mp3");
                w.play();
                break;
                case "a":
                    var a = new Audio("sounds/snare.mp3");
                    a.play();
                    break;
                    case "s":
                        var s = new Audio("sounds/kick-bass.mp3");
                        s.play();
                        break;
                        case "d":
                            var d = new Audio("sounds/tom-1.mp3");
                            d.play();
                            break;
                            case "j":
                                var j = new Audio("sounds/tom-2.mp3");
                                j.play();
                                break;
                                case "k":
                                    var k = new Audio("sounds/tom-3.mp3");
                                    k.play();
                                    break;
                                    case "l":
                                        var l = new Audio("sounds/tom-4.mp3");
                                        l.play();
                                        break;
    
                                        default:
                                            console.log(buttoninnerHtml);
                                      
           }
    }
    function buttonanimation(curkey){
       var actbut =  document.querySelector("." + curkey);
       actbut.classList.add("pressed");
       setTimeout(function () {
        actbut.classList.remove("pressed"),100
       });
}

}

