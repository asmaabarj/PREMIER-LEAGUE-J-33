<template>
    <div class="match-results">
      <div v-for="match in matches" :key="match.id" class="match">
        <h2>{{ match.homeTeam.name }} vs {{ match.awayTeam.name }}</h2>
        <!-- Display more match details as needed -->
      </div>
      <!-- Pagination component goes here -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MatchResults',
    data() {
      return {
        matches: [], // Array to store match data
      };
    },
    created() {
      // Fetch match data when component is created
      this.fetchMatches();
    },
    methods: {
      async fetchMatches() {
        try {
          const response = await axios.get('https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-04-14');
          this.matches = response.data.events;
        } catch (error) {
          console.error('Error fetching match data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>
  