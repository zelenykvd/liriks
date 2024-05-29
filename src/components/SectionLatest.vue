<template>
    <section class="latest">
      <h2>LATEST <span>MOST RECENT NEWS</span></h2>
      <div class="latest-list">
        <div class="latest-item" v-for="(item, index) in latest" :key="index">
          <img :src="item.image" alt="Article Image">
          <div class="latest-info">
            <h3>NEWS</h3>
            <h2>{{ item.title }}</h2>
            <p>by {{ item.author }} / {{ item.date }}</p>
          </div>
        </div>
      </div>
      <button class="load-more">LOAD MORE</button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SectionLatest',
    data() {
      return {
        latest: [
          { image: 'https://via.placeholder.com/200', title: 'Watch Sarina’s New Video “Say It Like” Now', author: 'ButterflyHoney', date: 'May 28 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Meet Tiffany Day: The Bedroom-Pop Artist Who’s Doing Things Her Own Way', author: 'Jinnie Lee', date: 'May 28 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Zach Bryan Delivers A Stirring Elegy With New Song “Pink Skies”', author: 'Ken Partridge', date: 'May 24 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Read All The Lyrics To Sexyy Red’s New Mixtape ‘In Sexyy We Trust’', author: 'Ken Partridge', date: 'May 24 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Read All The Lyrics To twenty one pilots’ New Album ‘Clancy’', author: 'Ken Partridge', date: 'May 24 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Read All The Lyrics To Vince Staples’ New Album ‘Dark Times’', author: 'Ken Partridge', date: 'May 24 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Watch Angelo Mota’s New Music Video “Damn, I Know”', author: 'ButterflyHoney', date: 'May 23 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Drake Addresses The “BBL Drizzy” Thing In Sexyy Red’s New Song “U My Everything”', author: 'Ken Partridge', date: 'May 24 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Clairo Wants You To Want Her On New Song “Sexy to Someone”', author: 'Ken Partridge', date: 'May 23 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Kenny Mason Performs “JUMPIN IN” Live', author: 'ButterflyHoney', date: 'May 24 2024' },
          { image: 'https://via.placeholder.com/200', title: 'FLO Breaks Down The Meaning of “Walk Like This”', author: 'ButterflyHoney', date: 'May 22 2024' },
          { image: 'https://via.placeholder.com/200', title: 'Japanese Girl Group XG Showcase Their Rap Skills On New Song “WOKE UP”', author: 'ButterflyHoney', date: 'May 22 2024' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  .latest {
    margin: 50px 0;
    text-align: center;
    padding: 0 20px;
    font-family: 'Roboto', sans-serif;
  }
  
  .latest h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #000;
  }
  
  .latest h2 span {
    font-size: 1rem;
    color: #f9d529;
    display: block;
  }
  
  .latest-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  
  .latest-item {
    width: 220px;
    margin: 10px;
    text-align: left;
  }
  
  .latest-item img {
    width: 100%;
    height: auto;
    margin-bottom: 5px;
  }
  
  .latest-info {
    background: #fff;
    padding: 10px;
  }
  
  .latest-info h3 {
    font-size: 0.7rem;
    color: #999;
    margin-bottom: 5px;
  }
  
  .latest-info h2 {
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #000;
  }
  
  .latest-info p {
    font-size: 0.7rem;
    color: #666;
  }
  
  .load-more {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1rem;
  }
  
  .load-more:hover {
    background-color: #333;
  }
  
  @media (max-width: 768px) {
    .latest-item {
      width: 45%;
    }
  }
  
  @media (max-width: 480px) {
    .latest-item {
      width: 100%;
    }
  
    .latest h2 {
      font-size: 1.5rem;
    }
  
    .latest-info h2 {
      font-size: 0.8rem;
    }
  
    .latest-info p {
      font-size: 0.6rem;
    }
  }
  </style>
  