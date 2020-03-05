import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PropsEmit from '../views/PropsEmit.vue'
import Profile from '../views/Profile.vue'
import Pagination from '../views/Pagination.vue'
import Date from '../views/Date.vue'
import ShopCart from '../views/ShopCart.vue'
import TwoDimensionalArray from '../views/TwoDimensionalArray.vue'
import CloneMap from '../views/CloneMap.vue'
import Tina from '../views/TinaSnippets.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/props-emit',
		name: 'propsemit',
		component: PropsEmit
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile
	},
	{
		path: '/pagination',
		name: 'pagination',
		component: Pagination
	},
	{
		path: '/date',
		name: 'date',
		component: Date
	},
	{
		path: '/shop-cart',
		name: 'shopcart',
		component: ShopCart
	},
	{
		path: '/two-dimensional-array',
		name: 'twodimensionalarray',
		component: TwoDimensionalArray
	},
	{
		path: '/clone-map',
		name: 'clonemap',
		component: CloneMap
	},
	{
		path: '/tina',
		name: 'tina',
		component: Tina
	},
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
