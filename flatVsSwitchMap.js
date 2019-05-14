let  { Observable } = require ("rxjs/Observable");
require('rxjs/add/observable/interval');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/take');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');

let order = Observable.interval(1000).take(2);
let combined = order.flatMap((x)=>{
        return Observable
                    .interval(400)
                    .take(3)
                    .map(y=>console.log(`outer ${x} : inner ${y}`));
    }
)
combined.subscribe(result => console.log(result));

/*let combinedswitch = order.switchMap((x)=>{
    return Observable
                .interval(400)
                .take(3)
                .map(y=>console.log(`outer ${x} : inner ${y}`));
}
)
setTimeout(()=>{
    console.log("####################");
    combinedswitch.subscribe(result => console.log(result));
},2000);
*/

