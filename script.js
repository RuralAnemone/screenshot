const screenshotTarget = document.body;

var jswindowScript = document.createElement('script');
jswindowScript.src = "https://cdn.jsdelivr.net/gh/BinBashBanana/jswindow@master/jswindow.js";
document.body.appendChild(jswindowScript);

var jswindowCss = document.createElement('link');
jswindowCss.href = "https://cdn.jsdelivr.net/gh/BinBashBanana/jswindow@master/jswindow.css";
jswindowCss.rel = "stylesheet";
document.body.appendChild(jswindowCss);

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
  let w = new jswindow({title: "Generated screenshot:", icon: "https://assets.stickpng.com/images/580b585b2edbce24c47b2a2c.png"});
  w.innerWindow.innerHTML = '<img src="' + image + '"></img>';
  w.open({width: 700, height: 300});
}
