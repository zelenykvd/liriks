<template>
  <header class="app-header">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <nav>
      <div class="menu-toggle" @click="toggleMenu">
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>
      <ul :class="{ open: menuOpen }">
        <li><router-link to="/" @click="closeMenu">FEATURED</router-link></li>
        <li><router-link to="/charts" @click="closeMenu">CHARTS</router-link></li>
        <li><router-link to="/videos" @click="closeMenu">VIDEOS</router-link></li>
        <li><router-link to="/news" @click="closeMenu">NEWS</router-link></li>
        <li><router-link to="/community" @click="closeMenu">COMMUNITY</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
.app-header {
  background-color: #f9d529;
  padding: 20px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.menu-toggle {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  right: 20px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
}

nav ul li a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav ul {
    display: none;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }

  nav ul.open {
    display: flex;
  }

  nav ul li {
    margin: 15px 0;
  }

  nav ul li a {
    font-size: 1.5rem;
  }
}
</style>
