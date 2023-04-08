<template>
  <div class="main-container">
      <Header />
  </div>
</template>

<script>
import Header from '../../components/Header';
export default {
	components: {Header}
};
</script>

<style lang="scss">
.main-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>