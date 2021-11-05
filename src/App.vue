<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
console.log(Intl)
</script>

<template>
  	<router-view v-slot="{ Component, route }">
		<component :is="Component"/>
	</router-view>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
