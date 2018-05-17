module.exports = {

    
     Yanny: function() {
        this.isYanny = function () {
            return true;
        }
        
        this.isLaurel = function () {
            return false;
        }
    },
    
    Laurel: function() {
        this.isYanny = function () {
            return false;
        }
        
        this.isLaurel = function () {
            return true;
        }
    }
    
}