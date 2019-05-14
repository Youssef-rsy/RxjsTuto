let  { Observable } = require ("rxjs/Observable");
require('rxjs/add/observable/merge');
require('rxjs/add/observable/timer');
require('rxjs/add/operator/mapTo');
require('rxjs/add/operator/map');
require('rxjs/add/operator/map');
let numbers =new Array(3);


let threeSecondHttpRequest = Observable.timer(3000).mapTo("first reponse");

let OneSecondHttpRequest = Observable.timer(1000).mapTo("Second reponse");
Observable
        .merge(threeSecondHttpRequest,OneSecondHttpRequest)
        .subscribe(res=>console.log(`${res}`));
