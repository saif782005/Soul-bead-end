const fs = require('fs');
let file = fs.readFileSync('js/data/products.js', 'utf8');

file = file.replace('img: "img/1.jpeg",', 'img: "1",');

let newProds = '';
for(let i=1; i<=26; i++) {
  newProds += `
  {
    id: ${15+i},
    img: "new/- (${i})",
    name: "ديكور خرز ${i}",
    price: 250,
    cat: "decor",
    tag: "new",
    desc: "قطعة ديكور مميزة من الخرز الفاخر",
  },`;
}

file = file.replace('];', newProds + '\n];');
fs.writeFileSync('js/data/products.js', file);
console.log('Done modifying products.js');
