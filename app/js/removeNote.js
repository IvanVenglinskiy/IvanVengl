var removeNote = (function(){

      return {

        event: function(){
        	$(window).on('remove', function(e, data){
                $(s.container).remove("'+data.color+' '+s.item+'");
            })

         }
         	init: function(){
            this.event();
        }
   }

}())



// $('.remove').click(function()){
// 			$ (this).notes.remove();


