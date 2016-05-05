/** class Quote
*
*/

function Quote() {
    if (arguments.length) {
        this.layer             = arguments[0];
        this.C_Height         = arguments[1].C_Height;
        this.C_Width         = arguments[1].C_Width;
        this.C_TopOffset     = arguments[1].C_TopOffset;
        this.C_LeftOffset     = arguments[1].C_LeftOffset;
        this.C_Spacing         = arguments[1].C_Spacing;
        this.C_Direction     = arguments[1].getDirection();
        this.C_EndSpace     = 0;
        this.C_AbovePosition = 0;

        this.pixelsRolled     = 0;  
        this.isRolling         = false;
        this.isFirstRoll     = null;
        this.reperPosition  = null;
        this.reper          = null;
        this.reperTop       = null;
        this.isInit         = false;
    }
    
    /**
    * Restore initial position and size
    */
    this.init = function init() {
        setObjectStyleProperty(this.layer, "position", "absolute");
                
        var list = this.layer.getElementsByTagName("img");
        if (list && list.length)
            this.reper = list.item(list.length - 1);
                
        this.pixelsRolled = 0;
        this.isRolling       = false;
                     
        this.isInit = true;
    }
}


/** Class QuoteUp
* Extends Quote
*
*/
function QuoteUp(layer, headline) {
    // Call super , Quote, constructor;
    this.super_(layer, headline);
    
    this.topOff         = 0;
    this.clipTop         = 0;
    this.clipBottom     = this.C_Height;
    this.clipRight        = this.C_Width;
    this.top             = this.C_TopOffset + this.C_Height;
    this.pixelsRolled     = 0; 

    this.super_init = this.init;    
    this.init = function init() {
        if (!this.isInit) {
            this.super_init();
            setObjectStyleProperty(this.layer, "width", this.C_Width);
            setObjectStyleProperty(this.layer, "clip", "rect(0px auto 0px auto)");

            // Browsers bug 
               this.C_Spacing  = parseInt(this.C_Spacing) + 1;
               this.C_EndSpace = parseInt(this.C_EndSpace) + 1;

            this.C_AbovePosition = parseInt(this.C_TopOffset) -
                                   parseInt(this.C_Spacing) -
                                   parseInt(this.C_EndSpace);
        }
        setObjectStyleProperty(this.layer, "visibility", "hidden");
        this.topOff         = 0;
        this.clipTop         = -5;
        this.clipBottom     = this.C_Height;
        this.top             = this.C_TopOffset + this.C_Height + 5;
        this.isRolling      = false;
    }
    
    /**
    * Roll the line inside the headline's rectangle
    */
    this.rollLine = function() {
        setObjectStyleProperty(this.layer, "visibility", "visible");
        this.isRolling = true;
        this.top--;
        var rect = "rect(auto auto auto auto)"
        
        // When quote starts roll from bottom.
        if (this.topOff <= this.C_Height ) {
            this.topOff++;
            rect = 'rect(auto auto ' + this.topOff + 'px  auto)';
        } 
        // When quote has the bottom above header bottom line.
        else { 
            this.clipBottom++;
            this.clipTop++;
            rect = 'rect(' + this.clipTop + 'px auto ' + this.clipBottom + 'px auto)';
        }

        // Reset quote position if it's bottom line is above headline top.
        //this.reperPosition  = this.getQuoteBottomPosition();
        if (this.reperPosition == this.C_TopOffset - this.C_Spacing - this.C_EndSpace)
            this.init();

        setObjectStyleProperty(this.layer, "clip", rect);
        setLayerPosition(this.layer, "top", this.top);
    }
    
    this.isAbove = function() {
        this.reperPosition = parseInt(this.getQuoteBottomPosition());
        if (this.reperPosition != null && 
                this.reperPosition == this.C_TopOffset + this.C_Height - this.C_Spacing - this.C_EndSpace)
            return true
            
        return false;
    }
    
    this.getQuoteBottomPosition = function() {
        return findObjectTopOffset(this.reper);
    }
    
    this.isOnTop = function () {
        if (this.reperTop == null)
            this.reperTop = this.layer.getElementsByTagName("img").item(0); 
        
        if ( findObjectTopOffset(this.reperTop) == this.C_TopOffset)
            return true;
            
        return false;
    }
}
QuoteUp.prototype = new Quote;
QuoteUp.prototype.super_ = Quote;


/** Class QuoteLeft
* Extends Quote
*
*/
function QuoteLeft(layer, headline) {
    // Call super , Quote, constructor;
    this.super_(layer, headline);

    this.clipLeft        = 0;
    this.clipRight      = 0;
    this.left            = 0;
    this.leftPosition   = null;
    this.leftOff        = 0;
    
    this.super_init = this.init;
    this.init = function init() {
        if (!this.isInit) {
            this.super_init();
            setObjectStyleProperty(this.layer, "height", this.C_Height);
            setObjectStyleProperty(this.layer, "clip", "rect(auto 0px  auto 0px)");

            // Browsers bug 
               this.C_Spacing  = parseInt(this.C_Spacing)+ 1;
               this.C_EndSpace = parseInt(this.C_EndSpace) + 1;

            this.C_AbovePosition = parseInt(this.C_LeftOffset) +
                                   parseInt(this.C_Width) - 
                                   parseInt(this.C_Spacing) - 
                                   parseInt(this.C_EndSpace);
        }

        setObjectStyleProperty(this.layer, "visibility", "hidden");
        this.leftOff         = 0;
        this.clipLeft         = this.C_Width - 5;
        this.clipRight         = 0;
        this.left             = this.C_LeftOffset + this.C_Width + 5;
        this.isRolling      = false; 
    }
    
    /**
    * Roll the line inside the headline's rectangle
    */
    this.rollLine = function() {
        setObjectStyleProperty(this.layer, "visibility", "visible");
        this.isRolling = true;
        this.left--;
        var rect = "rect(auto auto auto auto)"
        
        // When quote starts roll from bottom.
        if (this.leftOff <= this.C_Width ) {
            this.leftOff++;                        
            rect = 'rect(auto ' + this.leftOff + 'px auto  auto)';
        } 
        // When quote has the bottom above header bottom line.
        else {
            this.clipRight++;
            this.clipLeft++;
            rect = 'rect(auto ' + this.clipLeft + 'px auto ' + this.clipRight + 'px)';
        }
                                
        // Reset quote position if it's bottom line is above headline top.
        //this.leftPosition = this.getQuoteLeftPosition();
        if (this.leftPosition == this.C_LeftOffset - parseInt(this.C_Spacing) - parseInt(this.C_EndSpace))
            this.init();        

        setObjectStyleProperty(this.layer, "clip", rect);
        setLayerPosition(this.layer, "left", this.left);
    }    
    
    this.isAbove = function() {
           this.leftPosition = this.getQuoteLeftPosition();
           if (this.leftPosition != null && 
                       this.leftPosition == this.C_LeftOffset + this.C_Width   - this.C_Spacing - this.C_EndSpace)    {

                return true
         }
                
           return false;
   }

    this.getQuoteLeftPosition = function() {
        return findObjectLeftOffset(this.reper);
    }   
    
    this.isOnTop = function () {
        if (this.reperTop == null)
            this.reperTop = this.layer.getElementsByTagName("img").item(0); 
        
        if ( findObjectLeftOffset(this.reperTop) == this.C_LeftOffset)
            return true;
            
        return false;
    } 
}
QuoteLeft.prototype = new Quote;
QuoteLeft.prototype.super_ = Quote;