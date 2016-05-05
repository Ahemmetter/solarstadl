var headlines = headlines != null ? headlines  : new Array();

if (typeof(rollHeadlines) == "undefined")
    function rollHeadlines() {
        for ( var i = 0; i < headlines.length; i++ ) {
            headlines[i].init();
            headlines[i].id = i;
        }
        startRoll();
    }

if (typeof(startRoll) == "undefined")
    function startRoll() {
        for ( var i = 0; i < headlines.length; i++ )
            setTimeout("headlines[ " + i + "].run()", eval("headlines[i].C_Speed"));
    }




/**  Class Headline
*
*/            
function Headline(layerId) {
    this.C_TopOffset  = 0;
    this.C_LeftOffset = 0;
    this.C_Speed      = 0
    this.C_Height     = 0;
    this.C_Width      = 0;
    this.C_Spacing    = 0;
    this.C_EndSpace   = 0; // TODO : implement this
    this.C_Wait       = 0;
    
    this.layerId      = layerId;
    this.layer        = null;
    this.quotes       = new Array();
    this.direction    = null;
    this.id           = 0; // The position in headlines global array
    this.initialNrOfQuotes = 0;
    
    this.init = function init() {  
        this.layer = this.getLayer();
        
        var pOfL = document.getElementById(this.layerId).parentNode;
        var nn = pOfL.nodeName.toLowerCase();
        var lyr = null;
        
        if (nn == "a") {
            lyr = pOfL.parentNode;
        } else if (nn == "div") {
            lyr = pOfL;
        }
        if (lyr && (lyr.id.indexOf("NOFNewsTicker") == 0)) {
            try {
                var pname = 'position';
                var ret = "";
                if ( document.defaultView && document.defaultView.getComputedStyle ) {
                    var computedStyle = document.defaultView.getComputedStyle( lyr, null );
                    ret = computedStyle.getPropertyValue( pname );
                } else if ( lyr.currentStyle ) {
                    ret = lyr.currentStyle[ pname ];
                }
                if (ret == 'relative') {
                    setObjectStyleProperty(lyr, 'position','static');
                }
            } catch(e) {
                //trace(e.message);
            }
        }

        this.C_Height   = isNaN(parseInt(this.layer.style.height))?parseInt(this.layer.scrollHeight)+0:parseInt(this.layer.style.height) + 0;
        this.C_Width    = isNaN(parseInt(this.layer.style.height))?parseInt(this.layer.scrollWidth)+0:parseInt(this.layer.style.width) + 0;
        this.C_Speed    = Math.pow(10-getDivCustomProperty(this.layer, "speed", true) + 1, 2);
        this.C_Spacing  = getDivCustomProperty(this.layer, "spacing", true);
        this.C_Wait     = getDivCustomProperty(this.layer, "wait", true);
        this.C_EndSpace = getDivCustomProperty(this.layer, "endSpace", true);
        this.direction  = getDivCustomProperty(this.layer, "drct", false);
        
        this.initPosition();
        this.initContent();
    }
    
    /**
    * Duplicate quotes to fill in headline content
    */
    this.initContent = function initContent() {
        var initialNrOfQuotes =  this.layer.getElementsByTagName("div").length;
        eval("this.initForRoll" + this.direction + "()");
        var linesList = this.layer.getElementsByTagName("div");  
        if (linesList && linesList.length) 
            for (var i = 0; i < linesList.length; i++) {
                var quote = linesList.item(i);
                if (quote) {
                    this.quotes[i] = eval("new Quote" + this.direction + "(quote, this)");
                }

                // Inspect space after all initial quotes are rolled
                if ( ( i + 1 ) % initialNrOfQuotes == 0)
                    this.quotes[i].C_EndSpace = this.C_EndSpace;
                else 
                    this.quotes[i].C_EndSpace = 0;
                    
                this.quotes[i].init();
            }
        
        this.quotes[0].isRolling = true;
    }  
    
    this.initForRollUp = function() {
        var imgList = this.layer.getElementsByTagName("img");   
        var imgLgt  = imgList.length;
        var pos1    = findObjectTopOffset(imgList.item(0));
        var pos2    = imgLgt > 1 ? findObjectTopOffset(imgList.item(imgLgt - 1)) :
                        this.C_TopOffset;
        
        var diff = imgLgt > 1 ? (pos2 - pos1) : (pos1 - pos2);
        
        // Duplicate the lines to ensure that no white spaces will appear
        var content = this.layer.innerHTML; 
    
        if (diff < this.C_Height) {
            var x = this.C_Height/diff;
            for (var i = 0; i < parseInt(x) + 1; i++)
                this.layer.innerHTML += content;
        } else if (!(diff < 1))
            this.layer.innerHTML += content;
    }
    
    this.initForRollLeft = function() {
        var imgList = this.layer.getElementsByTagName("img");
         var imgLgt  = imgList.length;
         var pos1    = findObjectLeftOffset(imgList.item(0));
        var pos2    = imgLgt > 1 ? findObjectLeftOffset(imgList.item(imgLgt - 1)) :
                        this.C_LeftOffset;
        
        var diff = imgLgt > 1 ? (pos2 - pos1) : (pos1 - pos2);
        var content = this.layer.innerHTML;

        if (diff < this.C_Width) {   
            var x = parseInt(this.C_Width/diff) + 1;
            for (var i = 0; i <= x ; i++)
                this.layer.innerHTML += content;
        } else
            this.layer.innerHTML += content;
    }
    
    this.initPosition = function initPosition() {
        this.C_TopOffset  = findObjectTopOffset(this.getReperTop());
        this.C_LeftOffset = findObjectLeftOffset(this.getReperTop());
        
        setObjectStyleProperty(this.layer, "width", this.C_Width);
        setObjectStyleProperty(this.layer, "height", this.C_Height);
    }


    this.run = function run() {
        var quotes  = this.quotes;
        var length  = quotes.length;

        var quoteOnTop = false;
        if (quotes[0].isRolling) {
            quotes[0].rollLine();

            if (!quoteOnTop)
                quoteOnTop = quotes[0].isOnTop();
        }

        if (length > 1) {
            var rollFirstQuote = false;
            for (var i = 1; i < length; i++) {
                if (quotes[i - 1].isAbove() || quotes[i].isRolling) {
                    quotes[i].rollLine();
                
                    if (!quoteOnTop)
                        quoteOnTop = quotes[i].isOnTop();
                }
            }
            
            if (quotes[length - 1].isAbove())
                quotes[0].rollLine();  
        }

        this.quotes = quotes;

        if (!quoteOnTop)
            setTimeout("headlines[ " + this.id + "].run()", eval("headlines[this.id].C_Speed"))
        else
            setTimeout("headlines[ " + this.id + "].run()", eval("this.C_Wait * 1000"));
    }
    
    this.getReperTop = function getReperTop() {
        return document.getElementById("reperTop_" + this.layerId);
    }            

    this.getReperBottom = function getReperBottom() {
        return document.getElementById("reperBottom_" + this.layerId);
    } 
    
    this.getDirection = function getDirection() {
        return this.direction;
    }   
    
    this.getLayer = function getLayer() {
        return document.getElementById(this.layerId);
    } 
    
    
    // Add this headline to gloabal Array of headlines
    headlines[headlines.length] = this;
}// End Headline class