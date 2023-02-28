const myLibrary = [];
let newIndex = 0;

function Book(title, author, pages, read, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = index;

  this.info = function () {
    if (read === 'yes') {
      readText = 'has been read';
    } else {
      readText = 'not read yet';
    }
    return `${title} by ${author}, ${pages} pages, ${readText}`;
  };
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead, bookIndex) {
//   const bookTitle = prompt('What is the title of the book you would like to add?:');

  //   const bookAuthor = prompt('Who is the author of the book?');

  //   const bookPages = prompt('How many pages does the book have?');

  //   const bookRead = prompt('Have you read the book?');

  //   let newIndex = 0;

  //   if (myLibrary.length > 0) {
  //     newIndex = myLibrary.length - 1;
  //   }

  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead, bookIndex);

  myLibrary.push(newBook);

  console.log(myLibrary);
}

function addBookToPage(bookTitle, bookAuthor, bookPages, bookRead, bookIndex) {
  const newDiv = document.createElement('div');

  // const newContent = document.createTextNode(myLibrary[i].info());
  const newContent = `<div class="card" data-index=${bookIndex}><img src="book.png" alt="Avatar" style="width:100%"><div class="container"><h4><b>${bookTitle}</b></h4><p>${bookAuthor}</p><p><span>${bookPages} pages</span></p><p><span>Read?:</span></p><span>FALSE</span><label class="switch"><input id="toggle${bookIndex}" type="checkbox" onclick="toggleRead(${bookIndex});"><span class="slider round"></span></label><span>TRUE</span></div><button class="btn cancel" onclick="deleteBook(${bookIndex});">DELETE</button></div>`;

  newDiv.innerHTML += newContent;

  const currentDiv = document.getElementById('bookContainer');

  document.body.insertBefore(newDiv, currentDiv);

  const readToggle = document.getElementById(`toggle${bookIndex}`);

  if (bookRead === 'true') {
    readToggle.checked = true;
  } else {
    readToggle.checked = false;
  }
}

// const book1 = new Book('Harry Potter', 'JK Rowling', 432, 'yes');
// myLibrary.push(book1);
// const book2 = new Book('The Hobbit', 'JRR Tolkien', 543, 'no');
// myLibrary.push(book2);

function openForm() {
  document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}

function showElements(oForm) {
  event.preventDefault();
  console.log(oForm.elements.title);
  str = `Form Elements of form ${oForm.name}: \n`;
  for (i = 0; i < oForm.length; i++) { str += `${oForm.elements[i].name}: ${oForm.elements[i].value}\n`; }

  addBookToLibrary(oForm.elements.title.value, oForm.elements.author.value, oForm.elements.pages.value, oForm.elements.read.value, newIndex);
  addBookToPage(oForm.elements.title.value, oForm.elements.author.value, oForm.elements.pages.value, oForm.elements.read.value, newIndex);

  newIndex++;
}

function deleteBook(index) {
  const deletedBook = document.querySelectorAll(`[data-index='${index}']`);
  deletedBook[0].remove();
  myLibrary.splice(index, 1);
}

function toggleRead(bookIndex) {
  const readToggle = document.getElementById(`toggle${bookIndex}`);

  if (readToggle.checked) {
    myLibrary[bookIndex].read = 'true';
  } else {
    myLibrary[bookIndex].read = 'false';
  }
}
// addBookToLibrary();

// addBookToLibrary();

// addBookToPage();
