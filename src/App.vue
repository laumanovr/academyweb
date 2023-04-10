<template>
  <div id="app" class="main-container">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '../src/components/Header';
export default {
	components: {
		Header
	}
};
</script>

<style lang="scss">
.main-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
