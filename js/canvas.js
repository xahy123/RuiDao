//canvas函数
//转化弧度
  function getRads(degrees){
   return (Math.PI * degrees) / 180;
 }
 var canvas1 = document.getElementById("canvas1");
 var canvas2 = document.getElementById("canvas2");
 var canvas3 = document.getElementById("canvas3");
 var canvas4 = document.getElementById("canvas4");
 var canvas5 = document.getElementById("canvas5");
 var canvas6 = document.getElementById("canvas6");
 var canvas7 = document.getElementById("canvas7");
 //第一个环
 canvas(canvas1,360,"#ccc",5);
 canvas(canvas2,360,"#ccc",5);
 canvas(canvas3,360,"#ccc",3);
 canvas(canvas4,360,"#ccc",3);
 canvas(canvas5,360,"#ccc",3);
 canvas(canvas6,360,"#ccc",3);
 canvas(canvas7 ,360,"#ccc",3);
//第二个环
 canvas(canvas1,360*0.3,"red",5);
 canvas(canvas5,360*0.2,"red",3);
 canvas(canvas7,360*0.5,"red",5);

 function canvas(obj,deg,color,w){
   var x = obj.clientWidth/2;
   var ctx = obj.getContext("2d");
   ctx.save();
   ctx.lineWidth = w;
   ctx.lineCap = "round";
   ctx.strokeStyle = color;
   ctx.beginPath();
   ctx.arc(x,x,x-w,getRads(-90),getRads(deg-90));
   ctx.stroke();
   ctx.closePath();
   ctx.restore();
 }
