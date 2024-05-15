import { mergeTypeDefs } from "@graphql-tools/merge";

//  typeDefs
import categoryTypeDef from "./category.typeDef.js";
import formationTypeDef from "./formation.typeDef.js";
import languageTypeDef from "./language.typeDef.js";
import statusTypeDef from "./status.typeDef.js";
import trainerTypeDef from "./trainer.typeDef.js";
import userTypeDef from "./user.typeDef.js";
import tagNameTypeDef from "./tagName.typeDef.js";

const typeDefs = mergeTypeDefs([
  categoryTypeDef,
  languageTypeDef,
  statusTypeDef,
  trainerTypeDef,
  userTypeDef,
  formationTypeDef,
  tagNameTypeDef,
]);

export default typeDefs;
