var block1 = document.getElementById('block1');
var block2 = document.getElementById('block2');
var sourcesicons = document.getElementsByClassName('sourcesicons');

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 700px)").matches) {
    block1.style.width = '300px';
    block1.style.height = '300px';
    block2.style.height = '300px';
    block2.style.marginTop = '-300px';
    block1.style.backgroundColor = 'black';
    block1.style.marginRight = '370px';
    block2.style.width = '300px';
    block2.style.backgroundColor = 'black';
    block2.style.marginLeft = '370px';
    for(var i=0; i<sourcesicons.length; i++){
      sourcesicons[i].style.width = '100px';
      sourcesicons[i].style.borderRadius = '20px';
    }
  } else {
block1.style.width = '200px';
block1.style.height = '200px';
block2.style.height = '200px';
block1.style.marginRight = '210px';
block2.style.width = '200px';
block2.style.marginTop = '-200px';
block2.style.marginLeft = '210px';
for(var i=0; i<sourcesicons.length; i++){
  sourcesicons[i].style.width = '50px';
  sourcesicons[i].style.borderRadius = '10px';
}
  }
});

window.addEventListener('load', (event) => {
  if (window.matchMedia("(min-width: 700px)").matches) {
    block1.style.width = '300px';
    block1.style.height = '300px';
    block2.style.height = '300px';
    block2.style.marginTop = '-300px';
    block1.style.backgroundColor = 'black';
    block1.style.marginRight = '370px';
    block2.style.width = '300px';
    block2.style.backgroundColor = 'black';
    block2.style.marginLeft = '370px';
    for(var i=0; i<sourcesicons.length; i++){
      sourcesicons[i].style.width = '100px';
      sourcesicons[i].style.borderRadius = '20px';
    }
  } else {
    block1.style.width = '200px';
    block1.style.height = '200px';
    block2.style.height = '200px';
    block1.style.marginRight = '210px';
    block2.style.width = '200px';
    block2.style.marginTop = '-200px';
    block2.style.marginLeft = '210px';
    for(var i=0; i<sourcesicons.length; i++){
      sourcesicons[i].style.width = '50px';
      sourcesicons[i].style.borderRadius = '10px';
    }
  }
});
