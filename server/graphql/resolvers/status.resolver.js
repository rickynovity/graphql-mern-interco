import { statuses } from "../../dummyData/data.js";

const statusResolver = {
  Query: {
    statuses: (_, __, ___) => statuses,
    status: (_, { id }, ___) => statuses.find((status) => status._id === id),
  },

  // Mutation: {},
};

export default statusResolver;
