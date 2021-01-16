(function() {
    
    var mX, mY, distance,
        $distance = $('#distance span');
        $element  = $('#element');

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }


    $(document).mousemove(function(event){
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY);
      });

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);
        $distance.text(distance);         
    });

})();