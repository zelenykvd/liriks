<template>
    <section class="videos">
      <div class="videos-content">
        <h2>VIDEOS <span>GENIUS ORIGINAL SERIES</span></h2>
        <div class="video-container">
          <div class="video">
            <img src="https://t2.genius.com/unsafe/875x493/https%3A%2F%2Fimages.genius.com%2F5144ca1aab66c319d9776e0e620e8eba.1000x563x1.jpg" alt="Video">
          </div>
          <div class="video-info">
            <h3>VERIFIED</h3>
            <h2>Mozzy Breaks Down "If I Die Right Now"</h2>
            <p>Learn about the song’s lyrics on the latest episode of ‘Verified.’</p>
            <div class="author-date">by ButterflyHoney / May 29 2024</div>
          </div>
        </div>
        <button class="load-more">LOAD MORE</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SectionVideos'
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  .videos {
    background-color: #111;
    color: #fff;
    padding: 40px 20px;
    width: 100%;
    box-sizing: border-box; /* Ensure padding is included in the width */
    overflow-x: hidden; /* Prevent horizontal overflow */
  }
  
  .videos-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .videos h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .videos h2 span {
    font-size: 1rem;
    color: #f9d529;
    display: block;
  }
  
  .video-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .video {
    flex: 1;
    margin-right: 20px;
  }
  
  .video img {
    width: 100%;
    height: auto;
  }
  
  .video-info {
    flex: 1;
    text-align: left;
  }
  
  .video-info h3 {
    font-size: 1.2rem;
    color: #f9d529;
    margin-bottom: 10px;
  }
  
  .video-info h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .video-info p {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  .author-date {
    font-size: 0.9rem;
    color: #999;
  }
  
  .load-more {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .load-more:hover {
    background-color: #333;
  }
  
  @media (max-width: 768px) {
    .video-container {
      flex-direction: column;
    }
  
    .video {
      margin-right: 0;
      margin-bottom: 20px;
    }
  
    .video-info {
      text-align: center;
    }
  
    .video-info h2 {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .videos h2 {
      font-size: 2rem;
    }
  
    .video-info h2 {
      font-size: 1.2rem;
    }
  
    .video-info p {
      font-size: 0.9rem;
    }
  
    .author-date {
      font-size: 0.8rem;
    }
  }
  </style>
  