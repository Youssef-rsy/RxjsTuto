let  { Observable } = require ("rxjs/Observable");
require('rxjs/add/observable/from');
require("rxjs/add/observable/interval");
require("rxjs/add/operator/combineLatest");
require("rxjs/add/operator/zip");

const a1$ = Observable.from([1,2])
                      .zip(Observable.interval(1200),x=>x);  //emit 1 and 2 1.2 sec apart 
const b1$ = Observable.from([10,20])
                      .zip(Observable.interval(2200),x=>x); //emit 10 and 20 2.2 sec apart 
                
  a1$
    .combineLatest(b1$,(x,y)=>x+y)
    .subscribe(val=>console.log(`a1 + b1 = ${val}`));
