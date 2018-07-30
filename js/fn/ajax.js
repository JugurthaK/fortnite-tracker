function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.setRequestHeader('X-KEY','GvHZrXutfChSYUyzS9jt');
    req.addEventListener('load', function () {
      if (req.status >= 200 && req.status < 400) {
        callback(req.responseText);
      } else {
        callback(req.status);
      }
    });
  
    req.addEventListener('error', function () {
      console.error('Erreur réseau ' + url);
    });
    req.send(null);
  }
  