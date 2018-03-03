console.log('adding event listener');
window.addEventListener('message', function(e) {
  console.log('received event e.data=' + e.data);

  if (e.data == 'initialized') {
    document.querySelector('.spinner').style.display = 'none';
  } else if (e.data == 'urlChanged') {
    document.querySelector('.spinner').style.display = 'block';
  }
}, false);


document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var iframe = document.createElement('iframe');
    iframe.src = "https://dopeoplesay.com";
    // iframe.src = "http://localhost:7999";

    document.getElementById('container').appendChild(iframe);
  });
});
