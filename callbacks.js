function getProductDetails(){
    setTimeout(function(){ console.log("getting customer");
        setTimeout(function(){ console.log("getting orders");
            setTimeout(function(){ console.log("getting products");
                setTimeout(function(){ console.log("getting products details");
                },1000); 
            },1000);    
        },1000);
    },1000);

};
getProductDetails();