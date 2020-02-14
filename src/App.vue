<template>
	<v-app>
		<v-content>
			<Navigation/>
			<router-view/>
			<Loader/>
		</v-content>
	</v-app>
</template>

<style lang="scss">
	@import '@/assets/sass/style.scss'
</style>

<script>
import Navigation from './components/Base/Navigation'
import Loader from './components/Base/Loader'

export default {
	name: 'App',
	components: {
		Navigation,
		Loader
	},

	data: () => ({
	//
	}),
};
</script>
