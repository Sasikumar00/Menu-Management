const dlBtn = Array.from(document.getElementsByClassName('btn-danger'));
const listItem = Array.from(document.getElementsByClassName('list-group-item'));
const list = document.getElementById('list');

dlBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        console.log(list.removeChild(listItem[i]));
        console.log(listItem[i].parentNode);
    })
})

const catName = document.getElementsByClassName('cat-name');
const catDescription = document.getElementsByClassName('cat-description');
const categoryName = document.getElementsByClassName('category-name');
const categoryDes = document.getElementsByClassName('category-description');
const editBtn = Array.from(document.getElementsByClassName('btn-success'));
const saveBtn = Array.from(document.getElementsByClassName('save'));

editBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        catName[i].style.display = 'none';
        categoryName[i].value = catName[i].textContent;
        catDescription[i].style.display = 'none';
        categoryDes[i].value = catDescription[i].textContent;
        editBtn[i].style.display = 'none';
        saveBtn[i].style.display = 'inline-block';
        categoryName[i].style.display = 'block';
        categoryDes[i].style.display = 'block';
    })
})

saveBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        catName[i].textContent = categoryName[i].value;
        catDescription[i].textContent = categoryDes[i].value;
        catName[i].style.display = 'inline-block';
        catDescription[i].style.display = 'inline-block';
        editBtn[i].style.display = 'inline-block';
        saveBtn[i].style.display = 'none';
        categoryName[i].style.display = 'none';
        categoryDes[i].style.display = 'none';
    })
})