const express = require("express");
const router = express.Router();

const {
  getAuthors,
  searchAuthorByName,
  getAuthorById,
  createAuthor,
  updateAuthorById,
  deleteAuthorById,
} = require("../models/authors.js");

router.get("/", async function (req, res) {
  if (req.query.name !== undefined) {
    const searchedAuthors = await searchAuthorByName(req.query.name);
    return res.json({ success: true, payload: searchedAuthors });
  }

  const authors = await getAuthors();
  res.json({ success: true, payload: authors });
});

router.get("/:id", async function (req, res) {
  const author = await getAuthorById(req.params.id);
  res.json({ success: true, payload: author });
});

router.post("/", async function (req, res) {
  const data = req.body;
  const newAuthor = await createAuthor(data);
  res.json({ success: true, payload: newAuthor });
});

router.patch("/:id", async function (req, res) {
  const data = req.body;
  const updatedAuthor = await updateAuthorById(req.params.id, data);
  res.json({ success: true, payload: updatedAuthor });
});

router.delete("/:id", async function (req, res) {
  const deletedAuthor = await deleteAuthorById(req.params.id);
  res.json({ success: true, payload: deletedAuthor });
});

module.exports = router;
