const maquinario = require("../models/maquinario");
const asyncHandler = require("express-async-handler");

// Display list of all maquinarios.
exports.maquinario_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: maquinario list");
});

// Display detail page for a specific maquinario.
exports.maquinario_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: maquinario detail: ${req.params.id}`);
});

// Display maquinario create form on GET.
exports.maquinario_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: maquinario create GET");
});

// Handle maquinario create on POST.
exports.maquinario_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: maquinario create POST");
});

// Display maquinario delete form on GET.
exports.maquinario_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: maquinario delete GET");
});

// Handle maquinario delete on POST.
exports.maquinario_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: maquinario delete POST");
});

// Display maquinario update form on GET.
exports.maquinario_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: maquinario update GET");
});

// Handle maquinario update on POST.
exports.maquinario_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: maquinario update POST");
});
