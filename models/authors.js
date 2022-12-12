const { query } = require("../db/index.js");

async function getAuthors() {
  // Query the database and return all authors
  return [];
}

async function searchAuthorByName(searchTerm) {
  // Query the database and return all authors that have a name matching the searchTerm
  return [];
}

async function getAuthorById(id) {
  // Query the database and return the book with a matching id
  return {};
}

async function createAuthor(book) {
  // Query the database to create an author and return the newly created author
  return {};
}

async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author
  return {};
}

async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author
  return {};
}

module.exports = {
  getAuthors,
  searchAuthorByName,
  getAuthorById,
  createAuthor,
  updateAuthorById,
  deleteAuthorById,
};
