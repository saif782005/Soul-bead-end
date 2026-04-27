const fs = require('fs');

let fileContent = fs.readFileSync('js/data/products.js', 'utf8');

// Find the CATEGORIES array
let categoriesMatch = fileContent.match(/const CATEGORIES = (\[[\s\S]*?\]);/);
let productsMatch = fileContent.match(/const PRODUCTS = (\[[\s\S]*?\]);/);

if (!productsMatch) {
  productsMatch = fileContent.match(/const PRODUCTS = (\[[\s\S]*\])/);
}

if (productsMatch) {
  let productsStr = productsMatch[1];
  let products;
  try {
    products = eval(`(${productsStr})`);
  } catch(e) {
    console.error("Error parsing products", e);
    process.exit(1);
  }

  // Find the first decor item and remove it
  const firstDecorIndex = products.findIndex(p => p.cat === 'decor');
  if (firstDecorIndex !== -1) {
    products.splice(firstDecorIndex, 1);
  }

  // Rename the remaining decor items sequentially
  let decorCount = 1;
  products.forEach(p => {
    if (p.cat === 'decor') {
      p.name = `Product ${decorCount}`;
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
  console.log('Removed first decor product and reordered successfully.');
} else {
  console.error("Could not find PRODUCTS array");
}
