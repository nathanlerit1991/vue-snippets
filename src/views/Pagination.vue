<template>
    <v-container>
        <v-row>
            <v-flex md6>
                <h2>Page: {{pagination.page}}</h2>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="pagination.itemsPerPage"
                    :page.sync="pagination.page"
                ></v-data-table>

                <v-pagination v-model="pagination.page" :length="table_pages"></v-pagination>
            </v-flex>

            <v-flex md6>
                <h2>Detect next / previous</h2>

                <v-pagination
                    v-model="pagination.page"
                    :length="table_pages"
                    @input="nextFn()"
                ></v-pagination>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
export default {
    computed: {
        table_pages () {
            return this.pagination.itemsPerPage ? Math.ceil(this.desserts.length / this.pagination.itemsPerPage) : 0
        }
    },
    methods: {
        //Detect next and prev
        nextFn(){
            if(this.currentPage < this.pagination.page){
                alert("next")
            }
            else{
                alert("previous")
            }
            this.currentPage = this.pagination.page
        }
    },
    data(){
        return{
            currentPage: '',
            pagination: { 
                page: 1,
                itemsPerPage: 5
            },
            headers: [
                {
                text: 'Dessert (100g serving)',
                align: 'left',
                sortable: false,
                value: 'name'
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Sodium (mg)', value: 'sodium' },
                { text: 'Calcium (%)', value: 'calcium' },
                { text: 'Iron (%)', value: 'iron' }
            ],
            desserts: [
                {
                    value: false,
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    sodium: 87,
                    calcium: '14%',
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    sodium: 129,
                    calcium: '8%',
                    iron: '1%'
                },
                {
                    value: false,
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    sodium: 337,
                    calcium: '6%',
                    iron: '7%'
                },
                {
                    value: false,
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    sodium: 413,
                    calcium: '3%',
                    iron: '8%'
                },
                {
                    value: false,
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    sodium: 327,
                    calcium: '7%',
                    iron: '16%'
                },
                {
                    value: false,
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    sodium: 50,
                    calcium: '0%',
                    iron: '0%'
                },
                {
                    value: false,
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    sodium: 38,
                    calcium: '0%',
                    iron: '2%'
                },
                {
                    value: false,
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    sodium: 562,
                    calcium: '0%',
                    iron: '45%'
                },
                {
                    value: false,
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    sodium: 326,
                    calcium: '2%',
                    iron: '22%'
                },
                {
                    value: false,
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    sodium: 54,
                    calcium: '12%',
                    iron: '6%'
                }
            ],
        }
    },
}
</script>