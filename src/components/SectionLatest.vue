<template>
    <section class="latest">
      <h2>LATEST</h2>
      <div class="latest-list">
        <div class="latest-item" v-for="(item, index) in latest" :key="index">
          <img :src="item.image" alt="Article Image">
          <p>{{ item.title }}</p>
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
          { image: 'https://via.placeholder.com/200', title: 'Article 1' },
          { image: 'https://via.placeholder.com/200', title: 'Article 2' },
          // Додайте більше даних
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .latest {
    margin: 50px 0;
    text-align: center;
  }
  
  .latest h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .latest-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .latest-item {
    width: 200px;
    margin: 10px;
  }
  
  .latest-item img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .load-more {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  .load-more:hover {
    background-color: #333;
  }
  </style>
  