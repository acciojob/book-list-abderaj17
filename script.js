//your JS code here. If required.
const inputTitle = document.querySelector('#title');
const authorField = document.querySelector('#author');
const isbnField = document.querySelector('#isbn');
const btn = document.querySelector('#submit');
const bookList = document.querySelector('#book-list');



btn.addEventListener('click', (e)=>{
e.preventDefault();

const title = inputTitle.value.trim();
const author = authorField.value.trim();
const isbn = isbnField.value.trim();

if(title == '' || author == '' || isbn == ''){
    alert("Please fill in all fields!");
    return;
}
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">❌</button></td>
    `;
    bookList.appendChild(newRow);

    inputTitle.value ='';
    authorField.value = '';
    isbnField.value = '';


    bookList.addEventListener('click', (e)=>{
        if(e.target.classList.contains('delete')){
            const row = e.target.parentElement.parentElement;
            bookList.removeChild(row);
        }
    })
})