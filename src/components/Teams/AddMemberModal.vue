<script setup>
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';
import { useTeamStore } from '@/stores/TeamStore';

let showModal = ref(false);

let team = useTeamStore();
</script>

<template>
  <div>
      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      :disabled="! team.spotsRmaining"
      @click="showModal= true"
      >Add Member ({{ team.spotsRmaining }} Spots Left)</button>
  </div>
  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
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
  </Teleport>
</template>
