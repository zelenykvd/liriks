<template>
  <div>
    <div :style="headerStyle" class="header">
      <div class="header-content">
        <img :src="song.cover" alt="Cover Image" class="cover-image" @load="setBackground" />
        <div :style="textColorStyle" class="song-info">
          <h1>{{ song.title }}</h1>
          <div class="artist-album">
            <a :style="linkColorStyle" :href="song.artistLink">{{ song.artist }}</a> • <a :style="linkColorStyle" :href="song.albumLink">{{ song.album }}</a>
          </div>
          <div class="producer">
            <p>Producer</p>
            <div><a :style="linkColorStyle" :href="song.producerLink">{{ song.producer }}</a></div>
          </div>
          <div class="about">
            <p>{{ song.aboutSnippet }}</p>
          </div>
          <div class="stats">
            <span>{{ song.releaseDate }}</span> • <span>{{ song.viewers }}</span> • <span>{{ song.views }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="lyrics-page">
      <div class="main-content">
        <div class="lyrics" v-html="song.lyrics"></div>

        <div class="share-buttons">
          <button @click="shareOnTwitter"><i class="fab fa-twitter"></i></button>
          <button @click="shareOnFacebook"><i class="fab fa-facebook-f"></i></button>
        </div>

        <div class="about-section" :style="blockStyle">
          <h3>About</h3>
          <p>{{ song.about }}</p>
        </div>

        <div class="qa-section" :style="blockStyle">
          <h3>Q&A</h3>
          <p>Find answers to frequently asked questions about this song and explore its deeper meaning.</p>
          <div class="qa-content">
            <div
              v-for="(item, index) in qaItems"
              :key="index"
              class="qa-item"
            >
              <div class="qa-question" @click="toggleAnswer(index)">
                <p>{{ item.question }}</p>
                <span>{{ item.showAnswer ? '-' : '+' }}</span>
              </div>
              <transition name="fade">
                <div v-if="item.showAnswer" class="qa-answer">
                  <p>{{ item.answer }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <div class="comments">
          <h3>Comments</h3>
          <!-- Add comments section here -->
        </div>

        <div class="additional-content">
          <h3>Additional Content</h3>
          <!-- Add additional content here -->
        </div>
      </div>

      <div class="related-content">
        <h3>You might also like</h3>
        <div v-for="item in relatedSongs" :key="item.title" class="related-song">
          <img :src="item.cover" alt="Related song cover" class="related-cover">
          <div class="related-info">
            <a :href="item.link">{{ item.title }}</a>
            <p>{{ item.artist }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorThief from 'colorthief';

export default {
  name: "LyricsPage",
  data() {
    return {
      song: {
        title: "BIRDS OF A FEATHER",
        artist: "Billie Eilish",
        artistLink: "https://genius.com/artists/Billie-eilish",
        album: "HIT ME HARD AND SOFT",
        albumLink: "https://genius.com/albums/Billie-eilish/Hit-me-hard-and-soft",
        releaseDate: "May 17, 2024",
        cover: "/images/local-cover-image.jpg", // Path to the local image
        lyrics: `
          [Verse 1]<br>
          Well I know when you're around 'cause I know the sound<br>
          I know the sound, of your heart<br><br>
          [Chorus]<br>
          Well I know when you're around 'cause I know the sound<br>
          I know the sound, of your heart<br><br>
          [Verse 2]<br>
          Well I know when you're around 'cause I know the sound<br>
          I know the sound, of your heart<br><br>
          [Chorus]<br>
          Well I know when you're around 'cause I know the sound<br>
          I know the sound, of your heart<br>
        `,
        about: "In 'BIRDS OF A FEATHER,' Billie talks about love that lasts until death. She states it’s a strong bond that stays strong, even when things get tough, and how she wants her...",
        aboutSnippet: "In 'BIRDS OF A FEATHER,' Billie talks about love that lasts until death. She states it’s a strong bond that stays strong...",
        producer: "FINNEAS",
        producerLink: "https://genius.com/artists/Finneas",
        views: "916.7K views",
        viewers: "32 viewers",
        stats: [
          {
            icon: 'calendar',
            label: 'May 17, 2024'
          },
          {
            icon: 'eye',
            label: '32 viewers'
          },
          {
            icon: 'views',
            label: '916.7K views'
          }
        ]
      },
      relatedSongs: [
        {
          title: "CHIHIIRO",
          artist: "Billie Eilish",
          link: "https://genius.com/Billie-eilish-chihiiru-lyrics",
          cover: "/images/local-cover-image.jpg" // Path to the related song cover image
        },
        {
          title: "WILDFLOWER",
          artist: "Billie Eilish",
          link: "https://genius.com/Billie-eilish-wildflower-lyrics",
          cover: "/images/local-cover-image.jpg" // Path to the related song cover image
        },
        {
          title: "L'AMOUR DE MA VIE",
          artist: "Billie Eilish",
          link: "https://genius.com/Billie-eilish-lamour-de-ma-vie-lyrics",
          cover: "/images/local-cover-image.jpg" // Path to the related song cover image
        }
      ],
      headerStyle: {},
      blockStyle: {},
      textColorStyle: {},
      linkColorStyle: {},
      qaItems: [
        {
          question: "How did the song perform commercially?",
          answer: "During the tracking week ending June 1, 2024, the song debuted at #15 on the Hot 100 charts.",
          showAnswer: false
        },
        {
          question: "Who produced 'BIRDS OF A FEATHER' by Billie Eilish?",
          answer: "'BIRDS OF A FEATHER' by Billie Eilish was produced by FINNEAS.",
          showAnswer: false
        },
        {
          question: "When did Billie Eilish release 'BIRDS OF A FEATHER'?",
          answer: "Billie Eilish released 'BIRDS OF A FEATHER' on May 17, 2024.",
          showAnswer: false
        },
        {
          question: "Who wrote 'BIRDS OF A FEATHER' by Billie Eilish?",
          answer: "'BIRDS OF A FEATHER' by Billie Eilish was written by Billie Eilish.",
          showAnswer: false
        }
      ]
    };
  },
  methods: {
    setBackground() {
      const colorThief = new ColorThief();
      const img = this.$el.querySelector('.cover-image');
      if (img.complete) {
        this.applyBackground(colorThief.getColor(img));
      } else {
        img.addEventListener('load', () => {
          this.applyBackground(colorThief.getColor(img));
        });
      }
    },
    applyBackground(color) {
      const textColor = this.getContrastYIQ(color) ? '#000' : '#fff';
      const linkColor = textColor === '#000' ? '#0000EE' : '#FFEB3B';
      this.headerStyle = {
        background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      };
      this.blockStyle = {
        background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        color: textColor,
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '40px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      };
      this.textColorStyle = {
        color: textColor,
        textShadow: textColor === '#000' ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.7)'
      };
      this.linkColorStyle = {
        color: linkColor,
        textDecoration: 'none',
        borderBottom: `1px dashed ${linkColor}`,
        transition: 'color 0.3s, border-bottom 0.3s'
      };
    },
    getContrastYIQ(rgb) {
      const yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
      return yiq >= 128;
    },
    toggleAnswer(index) {
      this.qaItems[index].showAnswer = !this.qaItems[index].showAnswer;
    },
    shareOnTwitter() {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`${this.song.title} by ${this.song.artist}`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    },
    shareOnFacebook() {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header {
  width: 100%;
  padding: 20px 0;
  color: white;
  display: flex;
  justify-content: center;
  background: inherit;
}

.header-content {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px; /* Added padding for larger screens */
}

.cover-image {
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.song-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.song-info h1,
.song-info h2 {
  margin: 0;
}

.song-info h1 {
  font-size: 2.2em;
}

.song-info h2 {
  font-size: 1.4em;
  color: #eee;
}

.artist-album {
  margin: 10px 0;
}

.artist-album a {
  transition: color 0.3s, border-bottom 0.3s;
}

.artist-album a:hover {
  color: #ffeb3b;
  border-bottom: 1px dashed #ffeb3b;
}

.details span {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.producer p {
  margin: 0;
  font-weight: bold;
}

.producer a {
  transition: color 0.3s, border-bottom 0.3s;
}

.producer a:hover {
  color: #ffeb3b;
  border-bottom: 1px dashed #ffeb3b;
}

.about p {
  margin: 10px 0;
}

.stats {
  margin-top: 10px;
  font-size: 0.9em;
}

.stats span {
  margin-right: 10px;
}

.lyrics-page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
  background: white;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.main-content {
  flex: 3;
  margin-right: 20px;
}

.related-content {
  flex: 1;
}

.lyrics {
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 1.2em;
  word-wrap: break-word;
}

.share-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
}

.share-buttons button {
  background-color: transparent;
  color: #333;
  border: 1px solid #333;
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 40px;
  height: 40px;
}

.share-buttons button:hover {
  background-color: #333;
  color: white;
}

.share-buttons .fab {
  font-size: 16px;
}

.about-section,
.qa-section {
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
}

.about-section h3,
.qa-section h3 {
  margin-top: 0;
  font-size: 1.8em;
  color: inherit;
}

.qa-section p {
  margin-bottom: 20px;
}

.qa-content {
  background: inherit;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.qa-item {
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.qa-item:last-child {
  border-bottom: none;
}

.qa-question {
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.qa-answer {
  margin-top: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.related-song {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.related-cover {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 5px;
}

.related-info a {
  color: #000;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 5px;
  display: inline-block;
}

.related-info p {
  margin: 0;
  font-size: 0.9em;
  color: #666;
}

.about,
.qa,
.comments,
.additional-content {
  margin-bottom: 40px;
}

h3 {
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .lyrics-page {
    flex-direction: row;
  }

  .header-content {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }

  .cover-image {
    margin-right: 20px;
    margin-bottom: 0;
  }

  .song-info {
    align-items: flex-start;
  }

  .related-content {
    margin-top: 0;
  }
}

@media (max-width: 767px) {
  .lyrics-page {
    flex-direction: column;
  }

  .main-content {
    margin-right: 0;
  }

  .related-content {
    margin-top: 20px;
  }

  .share-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .share-buttons button {
    width: 100%;
  }

  .lyrics {
    font-size: 1em;
  }
}
</style>
