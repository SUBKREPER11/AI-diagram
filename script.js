function K1() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      var rectangle = new Path2D();
      rectangle.rect(0 ,0, 75, 75);
      ctx.stroke(rectangle);
    }
  }
  function line(x,y) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
      x = Math.floor(Math.random()*500+100);
      y = Math.floor(Math.random()*500+100);
      console.log(x, y);
      var ctx = canvas.getContext('2d');
      var rectangle = new Path2D();
      var rectangle2 = new Path2D();
      rectangle.rect(75 ,37.5, 0, 0);
      rectangle2.rect(x ,y, 75, 75);
      rectangle.lineTo(x, y+37.5);
      ctx.stroke(rectangle);
      ctx.stroke(rectangle2);
    }
  }