 

$(function(){

	function squ(num) {
	   		if (num < 1) return false;
	    	if (num === 1) return true;

	        for (var i = 1; i <= num / i; i++) {
	            if (i * i == num){
	            	return true;	
	            } 
	        }
	        return false;
	    }

	squ(24);
	alert(squ(24));
 

});