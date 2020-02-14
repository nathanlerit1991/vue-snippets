<template>
    <v-container>
        <v-alert type="info">
            This used <strong>Methods, Watch and Filter</strong> properties
        </v-alert>

        <v-row>
            <v-flex md6 class="shop-list">
                <h2>Shop list</h2>
                <div v-for="(shop_list, shop_list_index) in shopping_list" :key="shop_list_index">
                    <label>Stock {{shop_list.stock}}</label>
                    <label>{{shop_list.item}}</label>
                    <span>PHP {{shop_list.price | thousandFormat}}</span>
                    <v-btn small class="success" @click="addCart(shop_list.id, shop_list.item, shop_list.price, shop_list_index, shop_list.stock)">Add to cart <v-icon small>mdi-cart</v-icon></v-btn>
                </div>
            </v-flex>

            <v-flex md6 class="check-out-wrapper">
                <h2>Checkout area</h2>

                <div class="check-out">
                    <div v-for="(checkout_list, checkout_list_index) in selected_item" :key="checkout_list_index">
                        <label>{{checkout_list.item}}</label>
                        <span>PHP {{checkout_list.price | thousandFormat}}</span>
                        <v-btn small class="error" @click="deleteCart(checkout_list.id, checkout_list.item, checkout_list.price, checkout_list_index)">Cancel</v-btn>
                    </div>

                    <div class="no-items" v-if="item_prices.length <= 0">
                        <h2 class="grey--text text--lighten-1">No Item</h2>
                    </div>

                </div>

                <v-divider></v-divider>
                <br/>
                <p class="grey--text text--lighten-1"><strong>Total price:</strong> <span v-if="item_prices.length > 0">P {{total | thousandFormat}}</span> <span v-if="item_prices.length <= 0">0</span></p>
                <p class="grey--text text--lighten-1"><strong>Total items:</strong> <span>{{item_prices.length}}</span></p>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Shop Cart',
    methods:{
        addCart(id, item, price, index, stock){
            //If no more stocks in 'Shoplist'
            if (this.shopping_list[index].stock === 0){
                alert("Out of stock")
                return
            }
            //decreased stocks in 'Shoplist' by 1
            this.shopping_list[index].stock--


            //Add to cart if there is stock
            if(stock > 0 && stock != 0){
                this.selected_item.push({
                    id: id,
                    item: item,
                    price: price,
                })
                this.item_prices.push(price)
            }
        },

        deleteCart(id, item, price, index){
            this.selected_item.splice(index, 1) //Delete item
            this.item_prices.splice(index, 1)   //Delete price

            //Restore stocks in 'Shoplist' when deleted in 'Checkout area'
            this.shopping_list.forEach(item => {
                if(item.id === id){
                    item.stock++
                }
            });   
        }
    },
    watch:{
        //Realtime checking for the value of 'item_prices array' then add all items inside the array
        item_prices: function(price_val){
            this.total = eval(price_val.join('+'))
        }
    },
    filters:{
        thousandFormat: function(value){
            if(!value) return
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ")
        }
    },
    data(){
        return{
            total: 0,
            item_prices: [],
            selected_item: [],
            shopping_list: [
                {
                    id: 1,
                    item: 'Shoe 1',
                    price: 1300,
                    stock: 5
                },
                {
                    id: 2,
                    item: 'Shoe 2',
                    price: 880,
                    stock: 3
                },
                {
                    id: 3,
                    item: 'Shoe 3',
                    price: 5500,
                    stock: 8
                },
                {
                    id: 4,
                    item: 'Shoe 4',
                    price: 3200,
                    stock: 6
                },
                {
                    id: 5,
                    item: 'Shoe 5',
                    price: 2900,
                    stock: 3
                },
                {
                    id: 6,
                    item: 'Shoe 6',
                    price: 500,
                    stock: 7
                },
                 {
                    id: 7,
                    item: 'Shoe 8',
                    price: 1500,
                    stock: 8
                }
            ]
        }
    }
}
</script>