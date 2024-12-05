<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import { useTeamStore } from "@/stores/TeamStore";
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

let team = useTeamStore();

team.fill();

let showModal = ref(false);
</script>

<template>
  <TeamHeader  @add="showModal = true"/>

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers  />
  </div>

  <TeamFooter  />

  <Modal :show="showModal" @close="showModal = flase">
    <template #default>
      <p>new member</p>
      <form class="mt-6">
        <div class="flex gap-2">
          <input type="email" placeholder="Email" class="flex-1">
          <button>Add</button>
        </div>
      </form>
    </template>
  </Modal>
</template>
