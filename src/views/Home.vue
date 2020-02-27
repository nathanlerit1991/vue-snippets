<template>
    <v-container>
        <v-alert type="info">
            • Input validation using regex
            • Show more function
            • Search
            • Computed data
        </v-alert>
        <v-row>
            <v-flex md6 pa-8>
                <h3 :class="append_class + ' ' + 'sadsd'">Input field with regex validation</h3>

                <v-text-field 
                    v-model="text_type"
                    label="Alphabet only" 
                    :rules="[textRules.alphabet]"
                    outlined>
                </v-text-field>

                <v-text-field 
                    v-model="email_type"
                    label="Valid email only" 
                    :rules="[emailRules.email]"
                    outlined>
                </v-text-field>

                <v-text-field 
                    v-model="number_type"
                    label="Number only" 
                    :rules="[numberRules.number]"
                    outlined>
                </v-text-field>

                <v-text-field 
                    v-model="computed_label"
                    label="Computed label"
                    outlined>
                </v-text-field>
                <p>This is a computed data: {{computedData}}</p>

                <v-btn class="success" :disabled="text_type.length < 5" @click="resetInput()">Enabled if alphabet character inputs is greater than 5</v-btn>
            </v-flex>

            <v-flex md6 pa-8>
                <h3>List with show more</h3>

                <v-icon>
                    mdi-search
                </v-icon>

                <v-text-field
                    label="Search items"
                    prepend-inner-icon="mdi-magnify"
                    v-model="search"
                    outlined
                    @keyup="typingFn()"
                >
                </v-text-field>
                <span v-if="isLoading">Searching...</span>


                <div>
                    <div v-for="(list_port, list_port_index) in searchItem" :key='list_port_index'>
                        <p v-if="list_port_index < limit">{{list_port.name}}</p>
                    </div>
                    <v-btn class="success" @click="showMore">Show more</v-btn>
                </div>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    computed: {
        computedData(){
            return this.computed_label.toUpperCase()
        },

        searchItem(){
            return this.portfolio.filter(item =>{
                return item.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    watch: {
        isLoading: function(val){
            let _s = this

            return setInterval(function(){
                _s.isLoading = false
                console.log(_s.isLoading)
            }, 4000);
            
        }
    },
    methods:{
        showMore: function(){
            this.limit += this.showMoreAddItems
        },
        resetInput: function(){
            this.email = ''
        },
        typingFn(){
            this.isLoading = true
        }
    },
    data(){
        return{
            isLoading: false,
            search: '',
            append_class: 'sample-class',
            computed_label: '',
            text_type: '',
            textRules: {
                alphabet: v => /^[a-zA-Z\s]*$/i.test(v) || "Letters only",
            },

            email_type: '',
            emailRules: {
                email: v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(v) || "Enter Valid Email",
            },

            number_type: '',
            numberRules: {
                number: v => /^\+[0-9\s]*$/i.test(v) || "Enter valid phone number",
            },

            portfolio: [
                {
                    name: 'Item 1'
                },
                {
                    name: 'Item 2'
                },
                {
                    name: 'Item 3'
                },
                {
                    name: 'Item 4'
                },
                {
                    name: 'Item 5'
                },
                {
                    name: 'Item 6'
                },
                {
                    name: 'Item 7'
                },
                {
                    name: 'Item 8'
                } 
            ],
            limit: 5,
            showMoreAddItems: 1,
        }
    },
}
</script>
