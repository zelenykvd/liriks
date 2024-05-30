<template>
    <section class="news">
      <div class="main-news">
        <div class="news-content">
          <h3>NEWS</h3>
          <h2>Meet Tiffany Day: The Bedroom-Pop Artist Who’s Doing Things Her Own Way</h2>
          <p>“I prioritize my art more than getting any sort of check,” says the rising singer-songwriter.</p>
          <div class="author-date">
            by Jinnie Lee / May 28 2024
          </div>
        </div>
        <div class="news-image">
          <img src="https://t2.genius.com/unsafe/668x376/https%3A%2F%2Fimages.genius.com%2Febec9b7b57d20e6725fb1355de2ddc12.1920x1080x1.png" alt="Main News">
        </div>
      </div>
      <div class="other-news">
        <div class="news-item" v-for="(item, index) in otherNews" :key="index">
          <h3>NEWS</h3>
          <h2>{{ item.title }}</h2>
          <div class="author-date">
            by {{ item.author }} / {{ item.date }}
          </div>
          <div class="news-thumb">
            <img :src="item.image" :alt="item.title">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SectionNews',
    data() {
      return {
        otherNews: [
          {
            title: 'Drake Addresses The “BBL Drizzy” Thing In Sexyy Red’s New Song “U My Everything”',
            author: 'Ken Partridge',
            date: 'May 24 2024',
            image: 'https://t2.genius.com/unsafe/142x142/https%3A%2F%2Fimages.genius.com%2F203f32514603150b5233151d62f1f3ee.1000x1000x1.png',
          },
          {
            title: 'Read All The Lyrics To Vince Staples’ New Album ‘Dark Times’',
            author: 'Ken Partridge',
            date: 'May 24 2024',
            image: 'https://t2.genius.com/unsafe/142x142/https%3A%2F%2Fimages.genius.com%2F8e0b806edf5c02ff3588a3501cfebe72.1000x1000x1.jpg',
          },
          {
            title: 'Read All The Lyrics To twenty one pilots’ New Album ‘Clancy’',
            author: 'Ken Partridge',
            date: 'May 24 2024',
            image: 'https://t2.genius.com/unsafe/142x142/https%3A%2F%2Fimages.genius.com%2F99cb3a90e1065f9f931ee9ebe236f460.1000x1000x1.png',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .news {
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 20px;
  }
  
  .main-news {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  
  .news-content {
    flex: 1;
    margin-right: 20px;
  }
  
  .news-content h3 {
    font-size: 1rem;
    color: #999;
    margin: 0 0 10px 0;
  }
  
  .news-content h2 {
    font-size: 2rem;
    margin: 0 0 10px 0;
  }
  
  .news-content p {
    font-size: 1.1rem;
    color: #333;
    margin: 0 0 10px 0;
  }
  
  .author-date {
    font-size: 0.9rem;
    color: #999;
  }
  
  .news-image {
    flex: 1;
    margin-top: 20px;
  }
  
  .news-image img {
    max-width: 100%;
    height: auto;
  }
  
  .other-news {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .news-item {
    flex: 1;
    margin: 10px;
    text-align: left;
    min-width: 280px; /* Ensuring minimum width for smaller screens */
  }
  
  .news-item h3 {
    font-size: 1rem;
    color: #999;
    margin: 0 0 10px 0;
  }
  
  .news-item h2 {
    font-size: 1.2rem;
    margin: 0 0 10px 0;
  }
  
  .author-date {
    font-size: 0.9rem;
    color: #999;
  }
  
  .news-thumb img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
  
  @media (max-width: 768px) {
    .main-news {
      flex-direction: column;
    }
    .news-content {
      margin-right: 0;
      margin-bottom: 20px;
    }
    .news-item {
      flex: 100%;
      margin: 10px 0;
    }
  }
  </style>
  