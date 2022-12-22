<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <head-menu></head-menu>
  </header>

  <RouterView />
</template>

<style scoped>
*{
  border: none;
	padding: 0;
	margin: 0;
}
</style>
