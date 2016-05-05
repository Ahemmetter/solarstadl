function findObjectTopOffset(object) {
    if (object) {
        var offset = object.offsetTop;
        if (object.offsetParent)
          offset += findObjectTopOffset(object.offsetParent);
    
        return offset;
    }
}


function findObjectLeftOffset(object) {
    if (object) {
        var offset = object.offsetLeft;
        if (object.offsetParent)
          offset += findObjectLeftOffset(object.offsetParent);
    
        return offset;
    }
}

function setLayerPosition(layer, coord, pos) {
    //setObjectStyleProperty(layer, coord, (parseInt(pos) + 0));
    setObjectStyleProperty(layer, coord, (parseInt(pos) + "px"));
}

function setObjectStyleProperty(object, propId, propValue) {
    eval("object.style." + propId + " = '" + propValue + "'");
}

function getDivCustomProperty(div, attrId, isNumber) {
    value = div.getAttribute ? div.getAttribute(attrId) : eval("div." + attrId);
    if (isNumber && isNaN(value))
        value = parseInt(value) + 0;
    return value;
}

function attachOnLoadEventHandler(fnct, checkVar) {
    if ((checkVar != null) && (typeof(checkVar) != "undefined") && (window[checkVar] == true)) return;
    
    if ( typeof window.addEventListener != "undefined" ) {
        window.addEventListener( "load", fnct, false );
    } else if ( typeof window.attachEvent != "undefined" ) {
        window.attachEvent( "onload", fnct );
    } else {
        if ( window.onload != null ) {
            var oldOnload = window.onload;
            window.onload = function ( e ) {
                oldOnload( e );
                fnct(e);
            };
        } else {
            window.onload = fnct;
        }
    }
    window[checkVar] = true;
}
/*
    var agt = navigator.userAgent.toLowerCase();

    var is_major = parseInt(navigator.appVersion);
    var is_minor = parseFloat(navigator.appVersion);

    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
    var is_nav2 = (is_nav && (is_major == 2));
    var is_nav3 = (is_nav && (is_major == 3));
    var is_nav4 = (is_nav && (is_major == 4));
    var is_nav4up = (is_nav && (is_major >= 4));
    var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) ||
                          (agt.indexOf("; nav") != -1)) );
    var is_nav6 = (is_nav && (is_major == 5));
    var is_nav6up = (is_nav && (is_major >= 5));
    var is_gecko = (agt.indexOf('gecko') != -1);


    var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
    var is_ie3    = (is_ie && (is_major < 4));
    var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
    var is_ie4up  = (is_ie && (is_major >= 4));
    var is_ie5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
    var is_ie5_5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
    var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
    var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);
    var is_ie6    = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
    var is_ie6up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);

    var is_opera = (agt.indexOf("opera") != -1);
    var is_opera2 = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
    var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
    var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
    var is_opera5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
    var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);

*/