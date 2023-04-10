<template>
  <div class="main-container">
      <Header />
      <Learning />
  </div>
</template>

<script>
import Header from '../../components/Header';
import Learning from '../../components/Learning';
export default {
	components: {
	  Header,
		Learning
	}
};
</script>

<style lang="scss">
.main-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
