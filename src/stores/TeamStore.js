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
        let data = r.default;

        this.name = data.name;
        this.spots = data.spots;
        this.members = data.members;
      });
    }
  }
});
