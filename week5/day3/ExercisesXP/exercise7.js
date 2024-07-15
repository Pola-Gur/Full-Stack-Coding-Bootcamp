// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.
// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty section:

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

let allBooks = [
    {   "title": "title1",
        "author": "author1",
        "image": "https://bookstr.com/wp-content/uploads/2022/12/moms-book-cover-760x1024.jpg",
        "alreadyRead": true
    },
    {   "title": "title2",
        "author": "author2",
        "image": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/inner-thoughts-funny-book-cover-design-template-ba9b4436a3f1ae884b39928edacd7e6f_screen.jpg?ts=1698341143",
        "alreadyRead": false
    }
    // {   title: "title3",
    //     author: "author3",
    //     image: "https://static.demilked.com/wp-content/uploads/2021/03/60643531dc8ad-terrible-book-covers-coverimage2.jpg",
    //     alreadyRead: false
    // }
    // {   title: "title4",
    //     author: "author4",
    //     image: "https://images-platform.99static.com//yXNyJVbsfhVDW01zGF05tvQD4IU=/0x18:1042x1060/fit-in/500x500/99designs-contests-attachments/113/113974/attachment_113974992",
    //     alreadyRead: true
    // }
]

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).

const sectionBooks = document.querySelector(".listBooks");
const bookBox1 = document.createElement("div");
const bookBox2 = document.createElement("div");
const img1 = document.createElement("img")
const img2 = document.createElement("img")


img1.style.width = "100px"
img2.style.width = "100px"

img1.src = allBooks[0].image; 
img2.src = allBooks[1].image;

bookBox1.appendChild(img1)
bookBox2.appendChild(img2)

sectionBooks.appendChild(bookBox1)
sectionBooks.appendChild(bookBox2)

// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const book1 = document.createTextNode("h3");
const book2 = document.createTextNode("h3");
book1.textContent = allBooks[0].title + " by " + allBooks[0].author
book2.textContent = allBooks[1].title + " by " + allBooks[1].author

bookBox1.appendChild(book1)
bookBox2.appendChild(book2)

if (allBooks[0].alreadyRead) {
    bookBox1.style.color = "red";
}
if (allBooks[1].alreadyRead) {
    bookBox2.style.color = "red";
}

