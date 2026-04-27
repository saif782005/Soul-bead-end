const fs = require('fs');

let fileContent = fs.readFileSync('js/data/products.js', 'utf8');

// Find the CATEGORIES array
let categoriesMatch = fileContent.match(/const CATEGORIES = (\[[\s\S]*?\]);/);
let productsMatch = fileContent.match(/const PRODUCTS = (\[[\s\S]*?\]);/);

if (!productsMatch) {
  // If no semicolon at the end, try without
  productsMatch = fileContent.match(/const PRODUCTS = (\[[\s\S]*\])/);
}

if (productsMatch) {
  let productsStr = productsMatch[1];
  // evaluate products safely
  let products;
  try {
    products = eval(`(${productsStr})`);
  } catch(e) {
    console.error("Error parsing products", e);
    process.exit(1);
  }

  let decorCount = 1;
  products.forEach(p => {
    if (p.cat === 'decor') {
      p.name = `Product ${decorCount}`;
      p.desc = 'قطعه ديكور مصنوعه بحب';
      decorCount++;
    }
  });

  let newProductsStr = 'const PRODUCTS = [\n' + products.map(p => `  {
    id: ${p.id},
    img: "${p.img}",
    name: "${p.name}",
    price: ${p.price},
    cat: "${p.cat}",
    tag: ${p.tag ? `"${p.tag}"` : 'null'},
    desc: "${p.desc}"
  }`).join(',\n') + '\n];';

  fileContent = fileContent.replace(productsMatch[0], newProductsStr);
  fs.writeFileSync('js/data/products.js', fileContent);
  console.log('Updated products.js successfully.');
} else {
  console.error("Could not find PRODUCTS array");
}
