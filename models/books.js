const couchbaseConnect = require("../db/index")

async function getBooks() {
  // Query the database and return all books
  return [];
}

async function searchBooksByTitle(searchTerm) {
  // Query the database and return all books that have a matching title matching the searchTerm
  return [];
}

async function searchBooksByAuthor(searchTerm) {
  // Query the database and return all books that have an author name matching the searchTerm
  return [];
}

async function getBookById(id) {
  // Query the database and return the book with a matching id
  try {
    const cluster = await couchbaseConnect();
    const bucket = cluster.bucket("Library");
    const scope = bucket.defaultScope();
    const collection = scope.collection("book");
    const result = await collection.get(id);
    return result.content;
 } catch (error) {
   console.log(error);
 }
}

async function createBook(book) {
  // Query the database to create a book and return the newly created book
  return {};
}

async function updateBookById(id, updates) {
  // Query the database to update a book and return the newly updated book
  return {};
}

async function deleteBookById(id) {
  // Query the database to delete a book and return the deleted book
  return {};
}

module.exports = {
  getBooks,
  searchBooksByTitle,
  searchBooksByAuthor,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
