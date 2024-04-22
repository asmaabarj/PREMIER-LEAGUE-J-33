<template>
    <div>
      <div class="match-card" v-for="(match, index) in matchResults" :key="index">
        <h2>{{ match.homeTeam.name }} vs {{ match.awayTeam.name }}</h2>
        <p>Score: {{ match.homeScore }} - {{ match.awayScore }}</p>
        <p>Man of the Match: {{ match.manOfTheMatch }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        matchResults: [],
        apiURL: 'https://api.sofascore.com/api/v1/sport/football/scheduled-events/2024-04-14'
      };
    },
    mounted() {
      this.fetchMatchData();
    },
    methods: {
      async fetchMatchData() {
        try {
          const response = await axios.get(this.apiURL);
          this.matchResults = response.data.events; // Assurez-vous que la structure de vos données correspond à ce que renvoie l'API
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .match-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  </style>
  