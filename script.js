window.setInterval((function(){
    var start = Date.now();
    var textNode = document.createTextNode('0');
    document.getElementById('Score').appendChild(textNode);
    return function() {
         textNode.data = Math.floor((Date.now()-start)/1000);
         };
    }()), 1000);