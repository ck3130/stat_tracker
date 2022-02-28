const x = ['a','b'];
const y = ['c','d'];

const z = [];

for(let item1 of x){
    for(let item2 of y){
        z.push(item1+item2)
    }
}

console.log(z)

