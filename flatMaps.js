let  { Observable } = require ("rxjs/Observable");
require('rxjs/add/observable/from');
require('rxjs/add/operator/mergeMap');


function getData(){
    let ob1 = Observable.from([
        {name :"n1" , country :"MA", price:12.0},
        {name :"n2" , country :"CH", price: 9.50},
        {name :"n3" , country :"US", price:8.50 }
    ]);
    let ob2 = Observable.from([
        {name :"n4" , country :"FR", price:6.0},
        {name :"n5" , country :"EN", price: 5},
        {name :"n6" , country :"ZZ", price:9.99 }
    ]);
    return Observable.create(observer =>{
        observer.next(ob1);
        observer.next(ob2);
        observer.complete();
    });    
}

getData()
    .flatMap(water=> water)
    .subscribe(
        water=> console.log("water data :"+water.name+" : "+water.price),
        error => console.error(error),
        ()=>console.log("the stream of observables is over")
    );

