<template>
    <section class="community">
      <h2>COMMUNITY</h2>
      <p class="subtitle">GENIUS'S COMMUNITY OF CONTRIBUTORS POWERS THE WORLD'S BIGGEST COLLECTION OF SONG LYRICS AND MUSICAL KNOWLEDGE.</p>
      <div class="buttons">
        <button class="join">JOIN OUR COMMUNITY</button>
        <button class="learn">LEARN HOW GENIUS WORKS</button>
      </div>
      <div class="community-list">
        <div class="community-item" v-for="(item, index) in community" :key="index">
          <div class="rank">{{ index + 1 }}</div>
          <div class="info">
            <img :src="item.image" alt="User Image">
            <div>
              <p class="name">{{ item.name }}</p>
              <p class="role">{{ item.role }}</p>
            </div>
          </div>
          <div class="comments">{{ item.comments }}</div>
        </div>
      </div>
      <button class="load-more">LOAD MORE</button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SectionCommunity',
    data() {
      return {
        community: [
          { image: 'https://via.placeholder.com/40', name: 'Rabe8i', role: 'EDITOR', comments: 4402 },
          { image: 'https://via.placeholder.com/40', name: 'Ruts2678', role: 'CONTRIBUTOR', comments: 3200 },
          { image: 'https://via.placeholder.com/40', name: 'itsPowerMusicWorkoutFan', role: 'CONTRIBUTOR', comments: 2680 },
          { image: 'https://via.placeholder.com/40', name: 'basi', role: 'EDITOR', comments: 2407 },
          { image: 'https://via.placeholder.com/40', name: 'bloodonmyaf1', role: 'CONTRIBUTOR', comments: 2318 },
          { image: 'https://via.placeholder.com/40', name: 'higherfasterlouder', role: 'TRANSCRIBER', comments: 2263 },
          { image: 'https://via.placeholder.com/40', name: 'HannahKerse', role: 'CONTRIBUTOR', comments: 2258 },
          { image: 'https://via.placeholder.com/40', name: 'gaqk', role: 'CONTRIBUTOR', comments: 2025 },
          { image: 'https://via.placeholder.com/40', name: 'DuanKalandra-6', role: 'CONTRIBUTOR', comments: 1784 },
          { image: 'https://via.placeholder.com/40', name: 'JMDToaster', role: 'CONTRIBUTOR', comments: 1732 }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  .community {
    margin: 50px 0;
    text-align: center;
    padding: 0 20px;
    font-family: 'Roboto', sans-serif;
  }
  
  .community h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: #000;
  }
  
  .subtitle {
    font-size: 1rem;
    color: #f9d529;
    margin-bottom: 20px;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .buttons .join, .buttons .learn {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin: 0 10px;
  }
  
  .buttons .join:hover, .buttons .learn:hover {
    background-color: #333;
  }
  
  .community-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .community-item {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    padding: 10px;
    border-bottom: 1px solid #eaeaea;
  }
  
  .rank {
    width: 30px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .info {
    display: flex;
    align-items: center;
    flex: 1;
  }
  
  .info img {
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .name {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .role {
    font-size: 0.8rem;
    color: #999;
  }
  
  .comments {
    font-size: 1rem;
    color: #f00;
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
    .community-item {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .rank, .comments {
      align-self: flex-start;
    }
  
    .info {
      width: 100%;
    }
  
    .comments {
      margin-top: 10px;
    }
  }
  
  @media (max-width: 480px) {
    .community h2 {
      font-size: 2rem;
    }
  
    .rank, .comments {
      font-size: 1rem;
    }
  
    .name {
      font-size: 0.9rem;
    }
  
    .role {
      font-size: 0.7rem;
    }
  }
  </style>
  