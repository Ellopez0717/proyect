var loader;
funtion loadNow(opacity){
  if (opacity <= 0) {
    display content();

  }
  else {
    loader.style.opacity = opacity;
    window.setTimeout(function() {
    loadNow(opacity -0.05)
  }, 100 );
  }
}
function displayContent() {
  loader.style.display = 'none';
  document.getElementid('contenido').style,display = 'block';
}
document.addEventListener("DOMContentLoaded",funtion(){
  loader = document.getElementById('loader');
  loadNow(2);
})
