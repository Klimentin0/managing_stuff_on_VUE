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
        this.$patch({
          name: data.name,
          spots: data.spots,
          members: data.members
        })
      });
    }
  }
});
