let beers = [
    {name:"n1" , country:"MA" ,price:9.50},
    {name:"n2" , country:"FR" ,price:10},
    {name:"n3" , country:"EN" ,price:11},
    {name:"n1" , country:"MA" ,price:19.50},
    {name:"n2" , country:"FR" ,price:20},
    {name:"n3" , country:"EN" ,price:4}
];
beers
    .filter(beer=>beer.price>=10)
    .map(beer=> beer.name + " : "+ beer.price+" $")
    .forEach(result =>console.log(result));