let localProducts = [...PRODUCTS];
let localCategories = [...CATEGORIES];

function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  
  if (tab === 'products') renderAdminProducts();
  if (tab === 'categories') renderAdminCategories();
}

function renderAdminProducts() {
  const tbody = document.querySelector('#productsTable tbody');
  tbody.innerHTML = localProducts.map(p => `
    <tr>
      <td><img src="img/${p.img}.jpeg" width="40" height="40" style="border-radius:4px; object-fit:cover;"></td>
      <td>${p.name}</td>
      <td>${p.price} ج.م</td>
      <td>${localCategories.find(c => c.id === p.cat)?.name || p.cat}</td>
      <td>
        <button class="action-btn btn-edit" onclick="editProduct(${p.id})">تعديل</button>
        <button class="action-btn btn-delete" onclick="deleteProduct(${p.id})">حذف</button>
      </td>
    </tr>
  `).join('');
}

function renderAdminCategories() {
  const tbody = document.querySelector('#categoriesTable tbody');
  tbody.innerHTML = localCategories.map(c => `
    <tr>
      <td>${c.id}</td>
      <td>${c.name}</td>
      <td>
        <button class="action-btn btn-edit" onclick="editCategory('${c.id}')">تعديل</button>
        <button class="action-btn btn-delete" onclick="deleteCategory('${c.id}')">حذف</button>
      </td>
    </tr>
  `).join('');
}

// --- Modals ---
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}

// --- Product Logic ---
function openProductModal(id = null) {
  const catSelect = document.getElementById('pCat');
  catSelect.innerHTML = localCategories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  
  if (id) {
    const p = localProducts.find(x => x.id === id);
    document.getElementById('pModalTitle').innerText = 'تعديل منتج';
    document.getElementById('pId').value = p.id;
    document.getElementById('pName').value = p.name;
    document.getElementById('pPrice').value = p.price;
    document.getElementById('pCat').value = p.cat;
    document.getElementById('pImg').value = p.img;
    document.getElementById('pTag').value = p.tag || '';
    document.getElementById('pDesc').value = p.desc || '';
  } else {
    document.getElementById('pModalTitle').innerText = 'إضافة منتج';
    document.getElementById('pId').value = '';
    document.getElementById('pName').value = '';
    document.getElementById('pPrice').value = '';
    document.getElementById('pCat').value = localCategories.length ? localCategories[0].id : '';
    document.getElementById('pImg').value = '';
    document.getElementById('pTag').value = '';
    document.getElementById('pDesc').value = '';
  }
  document.getElementById('productModal').classList.add('active');
}

function saveProduct() {
  const idStr = document.getElementById('pId').value;
  const p = {
    id: idStr ? parseInt(idStr) : Date.now(),
    img: document.getElementById('pImg').value,
    name: document.getElementById('pName').value,
    price: parseFloat(document.getElementById('pPrice').value) || 0,
    cat: document.getElementById('pCat').value,
    tag: document.getElementById('pTag').value || null,
    desc: document.getElementById('pDesc').value
  };

  if (idStr) {
    const idx = localProducts.findIndex(x => x.id === p.id);
    if (idx !== -1) localProducts[idx] = p;
  } else {
    localProducts.push(p);
  }
  
  closeModal('productModal');
  renderAdminProducts();
}

function editProduct(id) { openProductModal(id); }
function deleteProduct(id) {
  if(confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
    localProducts = localProducts.filter(p => p.id !== id);
    renderAdminProducts();
  }
}

// --- Category Logic ---
function openCategoryModal(id = null) {
  if (id) {
    const c = localCategories.find(x => x.id === id);
    document.getElementById('cModalTitle').innerText = 'تعديل مجموعة';
    document.getElementById('cOldId').value = c.id;
    document.getElementById('cId').value = c.id;
    document.getElementById('cName').value = c.name;
  } else {
    document.getElementById('cModalTitle').innerText = 'إضافة مجموعة';
    document.getElementById('cOldId').value = '';
    document.getElementById('cId').value = '';
    document.getElementById('cName').value = '';
  }
  document.getElementById('categoryModal').classList.add('active');
}

function saveCategory() {
  const oldId = document.getElementById('cOldId').value;
  const newId = document.getElementById('cId').value.trim();
  const name = document.getElementById('cName').value.trim();
  
  if (!newId || !name) return alert('يرجى ملء جميع الحقول');
  
  if (oldId) {
    const idx = localCategories.findIndex(x => x.id === oldId);
    if (idx !== -1) localCategories[idx] = { id: newId, name };
    // تحديث المنتجات التي كانت تستخدم الايدي القديم
    localProducts.forEach(p => { if (p.cat === oldId) p.cat = newId; });
  } else {
    if (localCategories.find(c => c.id === newId)) return alert('هذا المعرف موجود مسبقاً');
    localCategories.push({ id: newId, name });
  }
  
  closeModal('categoryModal');
  renderAdminCategories();
}

function editCategory(id) { openCategoryModal(id); }
function deleteCategory(id) {
  if(confirm('هل أنت متأكد من حذف هذه المجموعة؟ سيتم حذف جميع المنتجات بداخلها!')) {
    localCategories = localCategories.filter(c => c.id !== id);
    localProducts = localProducts.filter(p => p.cat !== id);
    renderAdminCategories();
  }
}

// --- Export Logic ---
function saveAndDownload() {
  const fileContent = `const CATEGORIES = ${JSON.stringify(localCategories, null, 2)};\n\nconst PRODUCTS = ${JSON.stringify(localProducts, null, 2)};\n`;
  const blob = new Blob([fileContent], { type: 'application/javascript' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'products.js';
  a.click();
  
  URL.revokeObjectURL(url);
  alert('تم تنزيل ملف products.js بنجاح. يرجى وضعه داخل مجلد js/data/');
}

// Init
renderAdminProducts();
