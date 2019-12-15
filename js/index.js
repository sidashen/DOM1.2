function dragItem(e) {  
  var scope = document.getElementById("background");  
  var greenBlock = document.getElementById("green-block");  
  var yellowBlock = document.getElementById("yellow-block"); 
  var e = e || window.event;  
  //用于保存小的div拖拽前的坐标
  greenBlock.startX = e.clientX - greenBlock.offsetLeft;  
  greenBlock.startY = e.clientY - greenBlock.offsetTop;  
  //鼠标的移动事件 
  document.onmousemove = function(e) {  
      var e = e || window.event;  
      greenBlock.style.left = e.clientX - greenBlock.startX + "px";  
      greenBlock.style.top = e.clientY - greenBlock.startY + "px";  
      //对于大的DIV四个边界的判断  
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
      //分别计算yellowBlock和greenBlock的距离
      var yellowLeft = yellowBlock.offsetLeft;
      var yellowRight = yellowLeft + yellowBlock.offsetWidth;
      var yellowTop = yellowBlock.offsetTop;
      var yellowBottom = yellowTop + yellowBlock.offsetHeight;
      var greenLeft = greenBlock.offsetLeft;
      var greenRight = greenLeft + greenBlock.offsetWidth;
      var greenTop = greenBlock.offsetTop;
      var greenBottom = greenTop + greenBlock.offsetHeight;
      //比较上一步计算出来的值
      if (greenRight < yellowLeft || yellowRight < greenLeft || greenBottom < yellowTop || yellowBottom < greenTop) {
          return;
      } else {
      //如果碰撞成立把yellowBlock的背景色设置为蓝色
        yellowBlock.style.background = '#0000f0';
        }
    }; 
  //鼠标的抬起事件,终止拖动 
  document.onmouseup = function() {  
      document.onmousemove = null;  
      document.onmouseup = null;  
  };  
}  