const screenshotTarget = document.body;
var script = document.createElement('script'); script.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js"; document.body.appendChild(script); script.onload = function() {
  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    options(base64image);
    console.log(`image url: ${base64image}`);
  });
}

function options(a) {
  var r;
  if (window.confirm('copy the image url?')) {
    navigator.clipboard.writeText(a).catch(e=>alert(`error: ${e}`));
    r++;
  }
  
  if (window.confirm('redirect to image?')) {
    window.location.href = a;
    r++;
  }
  
  if (r != 0) {
    alert('oh ok\nI guess not then :)')
  }
}
