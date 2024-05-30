<template>
  <section class="community">
    <h2>COMMUNITY</h2>
    <p class="subtitle">GENIUS'S COMMUNITY OF CONTRIBUTORS POWERS THE WORLD'S BIGGEST COLLECTION OF SONG LYRICS AND MUSICAL KNOWLEDGE.</p>
    <div class="buttons">
      <button class="join">JOIN OUR COMMUNITY</button>
      <button class="learn">LEARN HOW GENIUS WORKS</button>
    </div>
    <div class="community-list">
      <div class="community-header">
        <span class="rank-header">RANK</span>
        <span class="name-header">TOP SCHOLARS TODAY</span>
        <span class="comments-header">IQ EARNED TODAY</span>
      </div>
      <div class="community-item" v-for="(item, index) in community" :key="index">
        <div class="rank">{{ index + 1 }}</div>
        <div class="info">
          <img :src="item.image" alt="User Image">
          <div class="text-info">
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
        { image: 'https://via.placeholder.com/40', name: 'Rabe8i', role: 'EDITOR', comments: 4844 },
        { image: 'https://via.placeholder.com/40', name: 'gaqk', role: 'CONTRIBUTOR', comments: 4174 },
        { image: 'https://via.placeholder.com/40', name: 'higherfasterlouder', role: 'TRANSCRIBER', comments: 3040 },
        { image: 'https://via.placeholder.com/40', name: 'kevlmz', role: 'CONTRIBUTOR', comments: 2645 },
        { image: 'https://via.placeholder.com/40', name: 'basi', role: 'EDITOR', comments: 2405 },
        { image: 'https://via.placeholder.com/40', name: 'Ferbinho', role: 'MODERATOR', comments: 2344 },
        { image: 'https://via.placeholder.com/40', name: 'HannahKerse', role: 'CONTRIBUTOR', comments: 2264 },
        { image: 'https://via.placeholder.com/40', name: 'itsPowerMusicWorkoutFan', role: 'CONTRIBUTOR', comments: 2223 },
        { image: 'https://via.placeholder.com/40', name: 'DuanKalandra-6', role: 'CONTRIBUTOR', comments: 2001 },
        { image: 'https://via.placeholder.com/40', name: 'Ruts2678', role: 'CONTRIBUTOR', comments: 1925 }
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
  color: #e3133b;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.buttons .join, .buttons .learn {
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: 2px solid #000;
  cursor: pointer;
  font-size: 1rem;
}

.buttons .join:hover, .buttons .learn:hover {
  background-color: #eaeaea;
}

.community-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.community-header {
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  padding: 5px 0;
  font-weight: bold;
  border-bottom: 2px solid #000;
  font-size: 0.9rem;
}

.rank-header {
  flex: 0 0 50px;
  text-align: left;
}

.name-header {
  flex: 1;
  text-align: left;
}

.comments-header {
  flex: 0 0 100px;
  text-align: right;
}

.community-item {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 5px 0;
  border-bottom: 1px solid #eaeaea;
  justify-content: space-between;
  font-size: 0.9rem;
}

.rank {
  flex: 0 0 50px;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: left;
}

.info {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;
}

.info img {
  border-radius: 50%;
  width: 50px; /* Збільшено розмір зображення */
  height: 50px; /* Збільшено розмір зображення */
}

.text-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.name {
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0; /* Забрано відступ між name і role */
}

.role {
  font-size: 0.7rem;
  color: #999;
  margin: 0; /* Забрано відступ між name і role */
}

.comments {
  flex: 0 0 100px;
  font-size: 0.9rem;
  color: #e3133b;
  text-align: right;
}

.load-more {
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: 2px solid #000;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
}

.load-more:hover {
  background-color: #eaeaea;
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
    font-size: 0.8rem;
  }

  .name {
    font-size: 0.8rem;
  }

  .role {
    font-size: 0.6rem;
  }
}
</style>
