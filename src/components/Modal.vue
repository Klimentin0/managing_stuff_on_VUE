<script setup>
  defineProps({
    show: Boolean
  });
</script>

<template>
  <Transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
  >
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <header>
        <slot name="header">default header</slot>
      </header>

      <div>
        <slot>deafult body</slot>
      </div>

      <footer class="modal-footer">
        <slot name="footer">
        <button @click="$emit('close')">default close</button>
        </slot>
      </footer>
      </div>
  </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .6);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: .8rem;
}

.modal-footer button {
  background: #deadad;
  padding: .25rem .75rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background: #a24242;
}

</style>
