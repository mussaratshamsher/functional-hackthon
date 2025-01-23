
// Sanity Schemas
// ================>

// Product Schema
// ===============>

export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    { name: "name", type: "string", title: "Product Name" },
    { name: "price", type: "number", title: "Price" },
    { name: "description", type: "text", title: "Description" },
    { name: "category", type: "string", title: "Category" },
    { name: "image", type: "image", title: "Image" },
  ],
};

// Purpose of Documentation
// ============================>
// Clear Understanding: Ensures all team members know how the system works.
// Future Reference: Useful when the system needs to be expanded or updated.
// Error Handling: Helps identify and resolve errors by reviewing the architecture and workflows.
