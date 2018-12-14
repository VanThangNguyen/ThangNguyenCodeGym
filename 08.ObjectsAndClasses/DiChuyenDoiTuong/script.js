function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('Right: ' + this.left);
  }

  this.moveDown = function(){
    this.top += this.speed;
    console.log('Down: ' + this.top);
  }

  this.moveLeft = function(){
    this.left -= this.speed;
    console.log('Left: ' + this.left);
  }

  this.moveUp = function(){
    this.top -= this.speed;
    console.log('Up: ' + this.top);
  }
}

var hero = new Hero('dog.png', -10, 0, 200, 30);

function start(){
  if(hero.top < 0 && hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  } else if (hero.top < window.innerHeight - hero.size && hero.left > 0) {
    hero.moveDown();
  } else if (hero.left > 0) {
    hero.moveLeft();
  } else if (hero.top > 0) {
    hero.moveUp();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();