<template>
  <div id="app" class="main-container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style lang="scss">
.main-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
