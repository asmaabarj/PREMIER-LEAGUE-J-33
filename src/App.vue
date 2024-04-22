<template>
  <div id="app">
    <header>
      <h1>Premier League 2023/2024 - Journée 33</h1>
    </header>
    <main>
      <MatchResults />
    </main>
  </div>
</template>

<script>
import MatchResults from './components/MatchResults.vue';

export default {
  name: 'App',
  components: {
    MatchResults,
  },
};
</script>

<style>
/* Add your CSS styles here */
</style>
