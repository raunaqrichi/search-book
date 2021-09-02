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
    

    const url = ` http://openlibrary.org/search.json?q=${inputFieldText}`;
    fetch (url)
    .then(res => res.json())
    .then(data => displayBook(data.docs));
    
};

const displayBook = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

     // // books result quantity
     const booksQuantity = document.getElementById('quantity');
     const p = document.createElement('p');
     p.innerText = `Search result found: ${books.num_Found}`;
     booksQuantity.appendChild(p);
 
 


 // error
 const error = document.getElementById('errors');
 error.textContent = '';

 if(books.length === 0){
     error.innerText = 'No Result Found';
 };
   
    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img id='pic-id'  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.author_name}</p>
                <p class="card-text">${book.publisher}</p>
                <p class="card-text">${book.first_publish_year}</p>
            </div>
        </div>
    
        `;
        searchResult.appendChild(div);
    });
};