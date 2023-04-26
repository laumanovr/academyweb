<template>
  <div class="main-layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.main-layout {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
