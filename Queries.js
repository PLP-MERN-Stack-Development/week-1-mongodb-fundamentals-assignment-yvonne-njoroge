-Find all books in a specific genre
db.books.find({genre: "Fiction"});

-Find books published after a certain year
db.books.find({published_year:{$gt:1951}});

- Find books by a specific author
db.books.find({author: 'Harper Lee'});

- Update the price of a specific book
db.books.updateOne({ title: 'To Kill a Mockingbird'},{$set:{ price: 14.00,}});

- Delete a book by its title
db.books.deleteOne({title: 'The Lord of the Rings'});


//TASK 2
// - Write a query to find books that are both in stock and published after 2010
db.books.find({$and:[{in_stock:true},{published_year:{$gt:2010}}]});

// - Use projection to return only the title, author, and price fields in your queries
db.books.find({ $and: [{ inStock: true },{ publishedYear: { $gt: 2010 } }]},
  {title: 1,author: 1,price: 1});

// - Implement sorting to display books by price (both ascending and descending)
db.books.find({}, { title: 1, price: 1, _id: 0 }).sort({ price: 1 }); //ascending

db.books.find({}, { title: 1, price: 1, _id: 0 }).sort({ price: -1 }); //descending

// - Use the `limit` and `skip` methods to implement pagination (5 books per page)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
  .skip(0)       
  .limit(5);
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
  .skip(5)       // (2 - 1) * 5 = 5
  .limit(5);


