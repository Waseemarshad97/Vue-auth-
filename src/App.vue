<template>
  <div id="app">
    <b-row>
      <b-col>
        <Header/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Header from '@/components/header';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>
<style scoped>

</style>