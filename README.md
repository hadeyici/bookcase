# Bookcase
## Description
Nodejs library case with Express, Mongoose, and MongoDB support to develop REST API.
## Getting Started
1. Clone repository
``` 
> git clone https://github.com/hadeyici/bookcase.git 
> cd bookcase
```
2. Install project dependencies
```
> npm install
```
3. Run application
``` 
> npm run dev
```
4. Run tests
```
> npm run test
```

##  GET Routes
`http://localhost:3000/users`
* post `users` 
* get `users`
* get `users/1`
* post `users/1/borrow/bookId`
* post `users/1/return/bookId`

`http://localhost:3000/books`
* post `books`
* get `books`
* get `books/1`

## Project Structure
```
├── config
│   ├── env
│   │   ├── development.js
│   │   ├── index.js
│   │   └── production.js
│   └── mongoconnect.js
├── src
│   ├── bin
│   │   └── www.js
│   ├── controller
│   │   ├── book
│   │   │   ├── book.js
│   │   │   └── index.js
│   │   └── user
│   │       ├── index.js
│   │       └── user.js
│   ├── helpers
│   │   ├── book.js
│   │   ├── borrow.js
│   │   └── user.js
│   ├── models
│   │   ├── Book.js
│   │   ├── Borrows.js
│   │   └── User.js
│   ├── routes
│   │   ├── api
│   │   │   └── index.js
│   │   └── index.js
│   └── app.js
├── tests
│   ├── books.test.spec.js
│   └── users.test.spec.js
├── README.md
├── package-lock.json
└── package.json
```
