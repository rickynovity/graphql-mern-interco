import StatusService from "../../services/status/status.service.js";

const statusResolver = {
  Query: {
    allstatus: async (_, __, ___) => StatusService.getAllStatus(),
    status: async (_, { id }, ___) => StatusService.getStatus(id),
  },

  Mutation: {
    createStatus: async (_, { input }, ___) =>
      await StatusService.createStatus(input),
    deleteStatus: async (_, { id }, ___) =>
      await StatusService.deleteStatus(id),
    deleteAllStatus: async (_, __, ___) =>
      await StatusService.deleteAllStatus(),
    updateStatus: async (_, { input }, ___) =>
      await StatusService.updateStatus(input),
  },
};

export default statusResolver;
