<template>
  <div id="app" class="main-container">
    <router-view />
    <Loader v-if="isLoading"/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Loader from '@/components/Loader.vue';
export default {
	components: {
		Loader
	},
	computed: {
		...mapState('loader', ['isLoading'])
	},
};
</script>

<style lang="scss">
.main-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
