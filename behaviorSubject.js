
let  { Observable } = require ("rxjs/Observable");
require('rxjs/add/observable/concat');
require('rxjs/add/observable/timer');
require('rxjs/add/operator/mapTo');

let threeSecondHttpRequest = Observable.timer(3000).mapTo("first reponse");

let OneSecondHttpRequest = Observable.timer(1000).mapTo("Second reponse");
Observable
        .concat(threeSecondHttpRequest,OneSecondHttpRequest)
        .subscribe(res=>console.log(`${res}`));
