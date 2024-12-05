import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
  state() {
    return {
      name: '',
      sports: 0,
      members: []
    }
  },

  actions: {
    fill() {
      import('@/team.json').then(r => {

        this.$state = r.default;
      });
    }
  }
});
