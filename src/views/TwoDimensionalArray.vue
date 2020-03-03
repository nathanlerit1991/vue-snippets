<template>
    <v-container>
        <v-flex md2>
            <v-text-field
            outlined
            label="Add item"
            v-model="add_item"
            @keyup="addItem($event)"
            >

            </v-text-field>
        </v-flex>
    
        <v-row>
            <v-flex md4>
                <h3>Staging</h3>
                <v-btn @click="moveDev(item_index, item_data)" v-for="(item_data, item_index) in items[0]" :key="item_index">
                    {{item_data}}
                </v-btn>
                </div>
            </v-flex>

            <v-flex md4>
                <h3>Development</h3>
                <v-btn @contextmenu="moveStaging($event, item_index, item_data)" @click="moveLive(item_index, item_data)" v-for="(item_data, item_index) in items[1]" :key="item_index">
                    {{item_data}}
                </v-btn>
            </v-flex>

            <v-flex md4>
                <h3>Live</h3>
                <v-btn @contextmenu="moveDevLeft($event, item_index, item_data)" v-for="(item_data, item_index) in items[2]" :key="item_index">
                    {{item_data}}
                </v-btn>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
export default {
    methods: {
        addItem(e){
            let _s = this
            if (e.keyCode === 13) {
                _s.items[0].push(_s.add_item)
                _s.add_item = ''
            }
        },

        moveDev(index, datum){
            let _s = this
            _s.items[1].push(datum)         
            _s.items[0].splice(index, 1)
        },
        moveLive(index, datum){
            let _s = this
            _s.items[2].push(datum)         
            _s.items[1].splice(index, 1)
        },

        //Right click triggered
        moveStaging(e, index, datum){
            let _s = this
            _s.items[0].push(datum)         
            _s.items[1].splice(index, 1)
            e.preventDefault()
        },
        moveDevLeft(e, index, datum){
            let _s = this
            _s.items[1].push(datum)         
            _s.items[2].splice(index, 1)
            e.preventDefault()
        }
    },
    data(){
        return {
            add_item: '',
            items:[
                [],
                [],
                []
            ]
        }
    }
}
</script>