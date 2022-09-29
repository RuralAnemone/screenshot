const screenshotTarget = document.body;
var script = document.createElement('script'); script.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js"; document.body.appendChild(script); script.onload = function() {
  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    options(base64image);
  });
}

function options(a) {
   window.confirm('press "ok" to copy the image url or "cancel" to redirect to image url') ? navigator.clipboard.writeText(a) : window.location = a
}
