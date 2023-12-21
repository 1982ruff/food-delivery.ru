// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Kkal",
      name: "kkal",
      type: "number",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },

    {
      title: "Product Image",
      name: "image",
      type: "image",
    },
    {
      title: "Energy nutrients",
      name: "energy",
      type: "document",
      fields: [
        {
          title: "Protein",
          name: "protein",
          type: "number",
        },
        {
          title: "Carbohydrates",
          name: "carbohydrates",
          type: "number",
        },
        {
          title: "Fats",
          name: "fats",
          type: "number",
        },
        {
          title: "Directors",
          name: "directors",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
  ],
};
