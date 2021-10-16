const dlBtn = Array.from(document.getElementsByClassName('btn-danger'));
const listItem = Array.from(document.getElementsByClassName('list-item'));
const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');
const list4 = document.getElementById('list4');
const list5 = document.getElementById('list5');

dlBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        listItem[i].style.display = 'none';
    })
})


const editBtn = Array.from(document.getElementsByClassName('btn-success'));
const saveBtn = Array.from(document.getElementsByClassName('save'));
const prodName = document.getElementsByClassName('prod-name');
const productName = document.getElementsByClassName('product-name');




editBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        prodName[i].style.display = 'none';
        productName[i].value = prodName[i].textContent;
        editBtn[i].style.display = 'none';
        saveBtn[i].style.display = 'inline-block';
        console.log(productName[i].style.display = 'block');
        productName[i].style.display = 'block';
    })
})

saveBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        prodName[i].textContent = productName[i].value;
        prodName[i].style.display = 'inline-block';
        editBtn[i].style.display = 'inline-block';
        saveBtn[i].style.display = 'none';
        productName[i].style.display = 'none';
    })
})