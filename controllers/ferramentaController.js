const ferramenta = require("../models/ferramenta");
const asyncHandler = require("express-async-handler");

// Display list of all ferramentas.
exports.ferramenta_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ferramenta list");
});

// Display detail page for a specific ferramenta.
exports.ferramenta_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: ferramenta detail: ${req.params.id}`);
});

// Display ferramenta create form on GET.
exports.ferramenta_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ferramenta create GET");
});

// Handle ferramenta create on POST.
exports.ferramenta_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ferramenta create POST");
});

// Display ferramenta delete form on GET.
exports.ferramenta_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ferramenta delete GET");
});

// Handle ferramenta delete on POST.
exports.ferramenta_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ferramenta delete POST");
});

// Display ferramenta update form on GET.
exports.ferramenta_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ferramenta update GET");
});

// Handle ferramenta update on POST.
exports.ferramenta_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ferramenta update POST");
});
