import slugify from "slugify";

export const createSlug = (title) => {
  const options = { remove: /[*+~.()'"!:@]/g };
  return slugify(title, options);
};
