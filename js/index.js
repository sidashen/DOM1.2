// function dragItem(e) {  
//   var scope = document.getElementById("background");  
//   var greenBlock = document.getElementById("green-block");  
//   var e = e || window.event;  
//   /*用于保存小的div拖拽前的坐标*/  
//   greenBlock.startX = e.clientX - greenBlock.offsetLeft;  
//   greenBlock.startY = e.clientY - greenBlock.offsetTop;  
//   /*鼠标的移动事件*/  
//   document.onmousemove = function(e) {  
//       var e = e || window.event;  
//       greenBlock.style.left = e.clientX - greenBlock.startX + "px";  
//       greenBlock.style.top = e.clientY - greenBlock.startY + "px";  
//       /*对于大的DIV四个边界的判断*/  
//       if (e.clientX - greenBlock.startX <= 0) {  
//           greenBlock.style.left = 0 + "px";  
//       }  
//       if (e.clientY - greenBlock.startY <= 0) {  
//           greenBlock.style.top = 0 + "px";  
//       }  
//       if (e.clientX - greenBlock.startX >= 920) {  
//           greenBlock.style.left = 920 + "px";  
//       }  
//       if (e.clientY - greenBlock.startY >= 720) {  
//           greenBlock.style.top = 720 + "px";  
//       }  
//   };  
//   /*鼠标的抬起事件,终止拖动*/  
//   document.onmouseup = function() {  
//       document.onmousemove = null;  
//       document.onmouseup = null;  
//   };  
// }  