import { mergeResolvers } from "@graphql-tools/merge";

//  resolvers
import categoryResolver from "./category.resolver.js";
import formationResolver from "./formation.resolver.js";
import languageResolver from "./language.resolver.js";
import statusResolver from "./status.resolver.js";
import trainerResolver from "./trainer.resolver.js";
import userResolver from "./user.resolver.js";

const resolvers = mergeResolvers([
  categoryResolver,
  formationResolver,
  languageResolver,
  statusResolver,
  trainerResolver,
  userResolver,
]);

export default resolvers;
