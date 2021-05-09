<template>
    <v-toolbar class="navigation">
        <v-spacer></v-spacer>

        <router-link
            v-for="(items, items_index) in navItems" tag="button" :to="items.url"
            :key="items_index"
        >
            {{items.name}}
        </router-link>


        <!--<router-link tag="button" to="/">Home</router-link>
        <router-link tag="button" to="/props-emit">Props & Emit</router-link>
        <router-link tag="button" to="/profile">Profile</router-link>
        <router-link tag="button" to="/pagination">Pagination</router-link>
        <router-link tag="button" to="/date">Date</router-link>
        <router-link tag="button" to="/shop-cart">Shop Cart</router-link>
        <router-link tag="button" to="/two-dimensional-array">Two Dimensional Array</router-link>-->
    </v-toolbar>
</template>
<style>
    .current{
        background: red !important;
    }
</style>
<script>
    export default {
        data(){
            return{
            current: 0,
            navItems: [
                {
                    name: 'Home',
                    url: '/'
                },
                {
                    name: 'Props & Emit',
                    url: '/props-emit'
                },
                {
                    name: 'Profile',
                    url: '/profile'
                },
                {
                    name: 'Pagination',
                    url: '/pagination'
                },
                {
                    name: 'Date',
                    url: '/date'
                },
                {
                    name: 'Shop Cart',
                    url: '/shop-cart'
                },
                {
                    name: 'Two Dimensional Array',
                    url: '/two-dimensional-array'
                },
                {
                    name: 'Clone and Map',
                    url: '/clone-map'
                },
                {
                    name: 'Tina',
                    url: '/tina'
                },
                {
                    name: 'Search',
                    url: '/search'
                }
            ]
        }
        }
    }
</script>
