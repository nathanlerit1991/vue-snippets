<template>
    <v-container>
        <h3>TINA snippets</h3>
        <v-btn text class="filter-btn" @click="func_showFilter()"><v-icon small>mdi-magnify</v-icon>Filter</v-btn>
<!--     <v-btn @click="categories.push('All')">Show all</v-btn> -->
        <div v-if="this.show_filter">
            <h3>List of filters</h3>

            <v-text-field
                label="Filter"
                v-model="categories"
            >
            </v-text-field>

            <div v-for="cat in categoryList">
                <input @input="func_resetAllFilter()" type="checkbox" :id="cat" :value="cat" v-model="categories">
                <label :for="cat">{{cat}}</label>
            </div>
        </div>

        <v-data-table
            :headers="headers"
            :items="searchItem"
        >
            <template v-slot:body="{ items }">
                <tbody>
                <tr v-for="item in items" :key="item.name">
                    <td>{{ item.effective_date }}</td>
                    <td>{{ item.type }}</td>
                    <td>${{ item.amount | thousandFormat }}</td>
                    <td><span :class="'status' + ' ' + item.status | statusClassFormat">{{item.status}}</span></td>
                </tr>
                </tbody>
            </template>
        </v-data-table>
    </v-container>
</template>

<style lang="scss">
    .filter-btn{
        color: #2AA1B6;
        border: solid 1px #2AA1B6;
        > *{
            color: #2AA1B6;
        }
    }
    .status{
        padding: 5px 10px;
        border-radius: 12px;
        color: #fff;
        font-size: 12px;
    }
    .in.progress{
        background: #A334B9;
    }
    .successful{
        background: #64A424;
    }
    .failed{
        background: #E8192D;
    }
</style>

<script>
    export default {
        computed:{
            searchItem: function () {
                if(this.categories.includes("All")){
                    this.categories = ['All']
                    return this.table_data
                    //kapag nka ALL, ddisplay lahat yung data
                }
                else return this.table_data.filter((item) => {
                    return this.categories.includes(item.status)
                    //Eto yung nagffilter. si 'categories' yung v-model ng mga checkbox.
                }, this);
            },
        },
        filters:{
            statusClassFormat: function(val){
                if(!val) return
                return val.toLowerCase()
            },
            thousandFormat: function(value){
                if(!value) return
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ")
            }
        },
        methods:{
            func_resetAllFilter(){
                this.categories = this.categories.filter(e => e !== 'All')
            },
            func_showFilter(){
                this.show_filter = !this.show_filter
                if(!this.show_filter){
                    this.categories = ['All']
                }
                
            }
        },
        data: () => ({
            show_filter: false,
            categoryList: ['All', 'In progress', 'Successful', 'Failed'],
            categories: ['All'],
            headers: [
                { text: 'Effective Date ', value: 'effective_date'},
                { text: 'Type', value: 'type'},
                { text: 'Total Amount', value: 'total_amount'},
                { text: 'Ingest Status', value: 'status' },
            ],
            table_data: [
                { 
                    id: '1', 
                    effective_date: '29/10/2019',
                    type: 'Contributions',
                    amount: 8498484,
                    status: 'In progress', 
                },
                { 
                    id: '2', 
                    effective_date: '29/10/2019',
                    type: 'Switches',
                    amount: 8498484,
                    status: 'Successful', 
                },
                { 
                    id: '3', 
                    effective_date: '29/10/2019',
                    type: 'Transfers', 
                    amount: 9000001,
                    status: 'Failed', 
                },
                { 
                    id: '1', 
                    effective_date: '29/10/2019',
                    type: 'Contributions',
                    amount: 8498484,
                    status: 'Failed', 
                },
                { 
                    id: '2', 
                    effective_date: '29/10/2019',
                    type: 'Switches',
                    amount: 8498484,
                    status: 'Successful', 
                },
                { 
                    id: '3', 
                    effective_date: '29/10/2019',
                    type: 'Transfers', 
                    amount: 9000001,
                    status: 'Failed', 
                },
                { 
                    id: '1', 
                    effective_date: '29/10/2019',
                    type: 'Contributions',
                    amount: 8498484,
                    status: 'Failed', 
                },
                { 
                    id: '2', 
                    effective_date: '29/10/2019',
                    type: 'Switches',
                    amount: 8498484,
                    status: 'Successful', 
                },
                { 
                    id: '3', 
                    effective_date: '29/10/2019',
                    type: 'Transfers', 
                    amount: 9000001,
                    status: 'Failed', 
                },
            ],
        }),
    }
</script>