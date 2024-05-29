<template>
  <div class="home">
    <section-news />
    <section-charts />
    <section-videos />
    <section-latest />
    <section-community />
  </div>
</template>

<script>
import SectionNews from '../components/SectionNews.vue';
import SectionCharts from '../components/SectionCharts.vue';
import SectionVideos from '../components/SectionVideos.vue';
import SectionLatest from '../components/SectionLatest.vue';
import SectionCommunity from '../components/SectionCommunity.vue';

export default {
  name: 'HomePage',
  components: {
    SectionNews,
    SectionCharts,
    SectionVideos,
    SectionLatest,
    SectionCommunity
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
