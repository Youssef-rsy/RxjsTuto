function getCostumers(){
    let promise = new Promise(
        function(resolve , reject){
            console.log("Getting customers");
            setInterval(() => {
                let success = true;
                if(success){
                    resolve("Youssef rossamy");
                }else{
                    reject("cant get customer");
                }
            }, 1000);
        }
    );
return promise;
}
function getOrder(customer){
    let promise = new Promise(
        function(resolve , reject){
            console.log("Getting customers");
            setInterval(() => {
                let success = true;
                if(success){
                    resolve(`FOUND THE ORDER 123 FOR ${customer}`);
                }else{
                    reject("cant get order");
                }
            }, 1000);
        }
    );
return promise;
}

getCostumers()
    .then(cust=>console.log(cust))
    .then(cust=>getOrder(cust))
    .then(order=>console.log(order))
    .catch(err=> console.log(err));
