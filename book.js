const searchBook = () =>{
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    inputField.value = '';

    // error
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';

    if(inputFieldText === ''){

         errorDiv.innerText = 'Search Field Cannot be Empty';
         
    };
    

    const url = ` https://openlibrary.org/search.json?q=${inputFieldText}`;
    fetch (url)
    .then(res => res.json())
    .then(data => displayBook(data.docs));
    
};

const displayBook = books => {

    // books result quantity
    const booksQuantity = document.getElementById('quantity');
    booksQuantity.textContent = '';
    const h1 = document.createElement('h1');
    h1.innerText = `Search result found: ${books.length}`;
    booksQuantity.appendChild(h1);



    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
 

 // error
 const error = document.getElementById('errors');
 error.textContent = '';

 if(books.length === 0){
     error.innerText = 'No Result Found';
 };
 //    book cards 
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img id='pic-id'  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${book.title}</h3>
                <p class="card-text"><strong>Author Name:</strong> ${book.author_name}</p>
                <p class="card-text"><strong>Publisher Name:</strong> ${book.publisher}</p>
                <p class="card-text"><strong>First Publish Year:</strong> ${book.first_publish_year}</p>
            </div>
        </div>
    
        `;
        searchResult.appendChild(div);
    });
};
