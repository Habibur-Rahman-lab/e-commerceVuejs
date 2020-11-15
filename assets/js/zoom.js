(function() {
  "use strict";

var ProductCustomizer = new Vue({
    el: '#vue-root',
    data:{
        sizes: window.Inventory.allSizes,
        selectedSize:9
    },
    computed:{
        //Apply for Logicale Expression
        sizeClass:function(){
           return 'product-size--' + this.selectedSize.toString().replace('.','_')
        }
    }
});

})();
