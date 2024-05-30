<template>
    <footer class="app-footer">
      <p>Genius is the world's biggest collection of song lyrics and musical knowledge</p>
      <div class="footer-links">
        <router-link to="/">About Genius</router-link>
        <router-link to="/">Privacy Policy</router-link>
        <router-link to="/">Contact Us</router-link>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter'
  };
  </script>
  
  <style scoped>
  .app-footer {
    background-color: #f9f9f9;
    padding: 20px;
    text-align: center;
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .footer-links a {
    margin: 0 10px;
    color: #000;
    text-decoration: none;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  </style>
  