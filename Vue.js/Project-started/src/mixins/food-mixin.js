import axiosDb from "@/services/axios-db";

export default {
  data: function() {
    return {
      foods: [],
    };
  },
  methods: {
    async retrieveFood() {
      try {
        const res = await axiosDb.get(`foods.json`);
        const all = res.data;
        for (const foodId in all) {
          this.foods.push({ foodId, ...all[foodId] 
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
