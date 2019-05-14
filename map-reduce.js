import { Observable } from "rxjs";


    let beers = [
        {name:"n1" , country:"MA" ,price:9.50},
        {name:"n2" , country:"FR" ,price:10},
        {name:"n3" , country:"EN" ,price:11},
        {name:"n1" , country:"MA" ,price:19.50},
        {name:"n2" , country:"FR" ,price:20},
        {name:"n3" , country:"EN" ,price:4}
    ];
   
Observable.from(beers)
    .map(beer => beer.price)
    .reduce((total,price)=>totat+price,0)
    .subscribe(
        totalPrice => console.log(`total price : ${totalPrice}`),
        err  => console.log(beer), //error
)


