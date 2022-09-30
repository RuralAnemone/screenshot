const screenshotTarget = document.body;

var css = document.createElement('style');
css.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.body.appendChild(css);

var jswindow = document.createElement('script');
jswindow.src = "https://cdn.jsdelivr.net/gh/BinBashBanana/jswindow@master/jswindow.js";
document.body.appendChild(jswindow);

var h2c = document.createElement('script');
h2c.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
document.body.appendChild(h2c);

h2c.onload = function() {
  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    options(base64image);
    console.log(`image url: ${base64image}`);
  });
}

function options(image) {
  if (window.confirm('copy the image url?')) {
    navigator.clipboard.writeText(image).catch(e=>alert(`error: ${e}`));
  }
  let w = new jswindow({title: "Generated screenshot:", icon: "https://assets.stickpng.com/images/580b585b2edbce24c47b2a2c.png"});
  w.innerWindow.innerHTML = '<img src="' + image + '"></img>';
  w.open({width: 200, height: 200});
}
