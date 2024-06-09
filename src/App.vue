<template>
  <div id="app">
    <RouterView />

  </div>
</template>

<!-- import the components here -->
<script setup>

import { useAuthStore } from './store/authStore.js'; // Import your Pinia store
import axios from 'axios';
import {onBeforeMount } from 'vue';
const authStore = useAuthStore(); // Access the Pinia store

onBeforeMount(() => {
  authStore.initializeStore(); // Initialize the store

  const token = authStore.token

  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Token ' + token
  } else {
    axios.defaults.headers.common['Authorization'] = ''
  }

})


</script>
