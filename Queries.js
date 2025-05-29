-Find all books in a specific genre
db.books.find({genre: "Fiction"});

-Find books published after a certain year
db.books.find({published_year:{$gt:1951}});

- Find books by a specific author
db.books.find({author: 'Harper Lee'});

- Update the price of a specific book
db.books.updateOne({ title: 'To Kill a Mockingbird'},{$set:{ price: 14.00,}});

- Delete a book by its title
