//import { Observable} from "rxjs";
let  { Observable } = require ("rxjs/Observable");
require('rxjs/add/observable/from');

let beers = [
    {name:"n1" , country:"MA" ,price:9.50},
    {name:"n2" , country:"FR" ,price:10},
    {name:"n3" , country:"EN" ,price:11},
    {name:"n1" , country:"MA" ,price:19.50},
    {name:"n2" , country:"FR" ,price:20},
    {name:"n3" , country:"EN" ,price:4}
];
Observable.from(beers)
            .subscribe(
                beer => console.log(beer), //next
                err  => console.log(beer), //error
                () => console.log("Streaming is over") //complete
            );
