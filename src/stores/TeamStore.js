import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
  state: () => {
    return {
      name: '',
      spots: 0,
      members: []
    }
  },

  actions: {
    async fill() {
      let r = await import('@/team.json');

        this.$state = r.default;

    }
  },

  getters: {
    spotsRmaining() {
      return this.spots - this.members.length;
    }
  }
});
