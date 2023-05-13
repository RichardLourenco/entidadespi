const produto = require("../models/produto");
const asyncHandler = require("express-async-handler");

// Display list of all produtos.
exports.produto_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: produto list");
});

// Display detail page for a specific produto.
exports.produto_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: produto detail: ${req.params.id}`);
});

// Display produto create form on GET.
exports.produto_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: produto create GET");
});

// Handle produto create on POST.
exports.produto_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: produto create POST");
});

// Display produto delete form on GET.
exports.produto_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: produto delete GET");
});

// Handle produto delete on POST.
exports.produto_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: produto delete POST");
});

// Display produto update form on GET.
exports.produto_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: produto update GET");
});

// Handle produto update on POST.
exports.produto_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: produto update POST");
});
