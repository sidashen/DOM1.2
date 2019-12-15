function dragItem(e) {  
  var greenBlock = document.getElementById("green-block");  
  var yellowBlock = document.getElementById("yellow-block"); 
  var e = e || window.event;  

  greenBlock.startX = e.clientX - greenBlock.offsetLeft;  
  greenBlock.startY = e.clientY - greenBlock.offsetTop;  

  document.onmousemove = function(e) {  
      var e = e || window.event;  
      greenBlock.style.left = e.clientX - greenBlock.startX + "px";  
      greenBlock.style.top = e.clientY - greenBlock.startY + "px";  

      if (e.clientX - greenBlock.startX <= 0) {  
          greenBlock.style.left = 0 + "px";  
      }  
      if (e.clientY - greenBlock.startY <= 0) {  
          greenBlock.style.top = 0 + "px";  
      }  
      if (e.clientX - greenBlock.startX >= 920) {  
          greenBlock.style.left = 920 + "px";  
      }  
      if (e.clientY - greenBlock.startY >= 720) {  
          greenBlock.style.top = 720 + "px";  
      }  

      var yellowLeft = yellowBlock.offsetLeft;
      var yellowRight = yellowLeft + yellowBlock.offsetWidth;
      var yellowTop = yellowBlock.offsetTop;
      var yellowBottom = yellowTop + yellowBlock.offsetHeight;
      var greenLeft = greenBlock.offsetLeft;
      var greenRight = greenLeft + greenBlock.offsetWidth;
      var greenTop = greenBlock.offsetTop;
      var greenBottom = greenTop + greenBlock.offsetHeight;

      if (greenRight < yellowLeft || yellowRight < greenLeft || greenBottom < yellowTop || yellowBottom < greenTop) {
          return;
      } else {
          yellowBlock.style.background = '#0000f0';
        }
    }; 

  document.onmouseup = function() {  
  document.onmousemove = null;  
  document.onmouseup = null;  
  };  
}  