<template>
    <section class="charts">
      <div class="charts-header">
        <h2>CHARTS</h2>
        <div class="filter">
          <select>
            <option>SONGS / ALL GENRES / TODAY</option>
          </select>
        </div>
      </div>
      <div class="chart-list">
        <div class="chart-item" v-for="(item, index) in charts" :key="index">
          <div class="chart-position">{{ index + 1 }}</div>
          <div class="chart-image">
            <img :src="item.image" :alt="item.song">
          </div>
          <div class="chart-info">
            <div class="song-title">{{ item.song }} <span class="lyrics-tag">LYRICS</span></div>
            <div class="artist">{{ item.artist }}</div>
          </div>
          <div class="chart-stats">
            <div class="chart-heat">
              <span class="icon">🔥</span> {{ item.heat }}
            </div>
            <div class="chart-views">
              <span class="icon">👁️</span> {{ item.views }}M
            </div>
          </div>
        </div>
      </div>
      <button class="load-more">LOAD MORE</button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SectionCharts',
    data() {
      return {
        charts: [
          { song: 'Not Like Us', artist: 'Kendrick Lamar', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2F7d3952698c6f7b80a8816ed3caf51048.300x300x1.jpg', heat: 186, views: 6.8 },
          { song: 'Септричка (Selfharm)', artist: 'Монеточка', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2Fe17ffefba08a5c61028395f305b35d3d.300x300x1.png', heat: 200, views: 269.9 },
          { song: 'BAND4BAND', artist: 'Central Cee & Lil Baby', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2F7c2834991131fcf288d83dbccb4751a3.300x300x1.png', heat: 53, views: 198.3 },
          { song: 'euphoria', artist: 'Kendrick Lamar', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2Ffa3e7d1b6c67f1b6d447c28539ae9bf5.300x300x1.png', heat: 92, views: 8.9 },
          { song: 'BIRDS OF A FEATHER', artist: 'Billie Eilish', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2F5e7bf410789d01a90983b2641b88e5bd.300x300x1.png', heat: 0, views: 903.3 },
          { song: 'Grippy', artist: 'Cash Cobain & J. Cole', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2F1c89154d8f66be7d10be294cfce88a87.300x300x1.png', heat: 0, views: 100.2 },
          { song: 'LUNCH', artist: 'Billie Eilish', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2F5e7bf410789d01a90983b2641b88e5bd.300x300x1.png', heat: 0, views: 1.2 },
          { song: 'Кис Кис Кис (Kis Kis Kis)', artist: 'Монеточка', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2F2c4bbd77f24be1352a8c1c1db9521f43.300x300x1.png', heat: 0, views: 64.9 },
          { song: 'Pink Skies', artist: 'Zach Bryan', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2Fe17ffefba08a5c61028395f305b35d3d.300x300x1.png', heat: 0, views: 333.7 },
          { song: 'Mockingbird', artist: 'Eminem', image: 'https://t2.genius.com/unsafe/60x60/https%3A%2F%2Fimages.genius.com%2F481d2a614d302cd50d06082bea096266.300x300x1.png', heat: 0, views: 6.1 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .charts {
    margin: 50px auto;
    text-align: left;
    max-width: 800px;
    padding: 0 20px;
  }
  
  .charts-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .charts-header h2 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 400;
  }
  
  .filter select {
    padding: 5px;
    font-size: 1rem;
  }
  
  .chart-list {
    display: flex;
    flex-direction: column;
  }
  
  .chart-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eaeaea;
  }
  
  .chart-position {
    width: 30px;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  }
  
  .chart-image img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  
  .chart-info {
    flex-grow: 1;
  }
  
  .song-title {
    font-size: 1.2rem;
    font-weight: 400;
  }
  
  .lyrics-tag {
    color: #999;
    margin-left: 5px;
    font-size: 0.9rem;
  }
  
  .artist {
    color: #666;
    font-size: 0.9rem;
    font-weight: 300;
  }
  
  .chart-stats {
    display: flex;
    align-items: center;
  }
  
  .chart-heat, .chart-views {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
  
  .chart-heat .icon, .chart-views .icon {
    margin-right: 5px;
  }
  
  .load-more {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    display: block;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1rem;
  }
  
  .load-more:hover {
    background-color: #333;
  }
  
  @media (max-width: 768px) {
    .charts-header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .charts-header h2 {
      margin-bottom: 10px;
    }
  
    .chart-item {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .chart-stats {
      margin-top: 10px;
    }
  
    .chart-heat, .chart-views {
      margin-left: 0;
    }
  }
  
  @media (max-width: 480px) {
    .charts-header h2 {
      font-size: 2rem;
    }
  
    .chart-position {
      font-size: 1.2rem;
    }
  
    .song-title {
      font-size: 1rem;
    }
  
    .artist {
      font-size: 0.8rem;
    }
  }
  </style>
  