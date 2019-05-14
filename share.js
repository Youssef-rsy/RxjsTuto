
let  { Observable } = require ("rxjs/Observable");
require('rxjs/add/observable/interval');
require('rxjs/add/operator/take');
require('rxjs/add/operator/share');
let numbers = Observable
                .interval(1000)
                .take(10)
                .share(); // make the cold observable Hot 

function subscribeToNumbers(name){
    numbers.subscribe(
        x=> console.log(`${name} got ${x}`)
    );
}
subscribeToNumbers(`Youssef`);
let addSubscription = ()=>subscribeToNumbers("rossamy");
    setTimeout(addSubscription , 3000); // joins the stream after 3sec

    