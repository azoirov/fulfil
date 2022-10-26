import info from "./info";
import servers from "./servers";
import tags from "./tags";

export default {
  swaggerDefinition: {
    ...servers,
    ...info,
    ...tags,
  },
  apis: [`${__dirname}/components/*.yml`, `${__dirname}/tags/**/*.yml`],
};
