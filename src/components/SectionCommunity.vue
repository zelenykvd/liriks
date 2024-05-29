<template>
    <section class="community">
      <h2>COMMUNITY</h2>
      <div class="community-list">
        <div class="community-item" v-for="(item, index) in community" :key="index">
          <p>{{ index + 1 }}. {{ item.name }} - {{ item.comments }} comments</p>
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
          { name: 'Rabe8i', comments: 4000 },
          { name: 'Ruts2678', comments: 3500 },
          // Додайте більше даних
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .community {
    margin: 50px 0;
    text-align: center;
  }
  
  .community h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .community-list {
    display: flex;
    flex-direction: column;
  }
  
  .community-item {
    padding: 10px;
    border-bottom: 1px solid #eaeaea;
  }
  
  .community-item:hover {
    background-color: #f9f9f9;
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
  