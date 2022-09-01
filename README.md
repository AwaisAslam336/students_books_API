# students_books_API
tools used: nodejs (express), mongoDB(mongoose)

download and run **npm install**  then run **node index.js**

***API End Points***

..........................................

**Add Student**

localhost:8000/api/student
(Post)

body 

    {
      "student_id":"ab23", //unique
      "fname":"any",
      "lname": "name"
    }
    
.........................................

**Get All Students**

localhost:8000/api/student
(Get)

.........................................

**Get Student by ID**

localhost:8000/api/student/:id
(Get)

.........................................

**Update Student**

localhost:8000/api/student/update/:id
(Put)

body 

    {
      "fname":"any",
      "lname": "name"
    }
    
.........................................

.........................................

**Add Book**

localhost:8000/api/book
(Post)

body 

    {
      "book_name": "new book",
      "author": "new author",
      "borrowed_status": 1, // do not get succeed if status is true and below properties are not given
      "borrowed_by": "student_id",
      "borrowed_date": "dec 22",
      "return_date": "dec 28"
    }
    
.........................................

**Update Book**

localhost:8000/api/book/update/:id  (_id)
(Put)

body 

    {
      "book_name": "new book",
      "author": "new author",
      "borrowed_status": 1,
      "borrowed_by": "student_id", //return error if ID is not valid
      "borrowed_date": "dec 22",
      "return_date": "dec 28"
    }
    
.........................................

**Get All Books**

localhost:8000/api/book
(Get)

.........................................

**Get Book by ID**

localhost:8000/api/book/:id
(Get)

