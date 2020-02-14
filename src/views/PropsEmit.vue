<template>
    <v-container>
        <v-alert type="info">
            <strong>Props</strong> is used to pass data to it's child component, while <strong>Emits</strong> is used to pass data from child to it's parent
        </v-alert>

        <v-row>
            <v-flex md6>
                <h2>Props sample</h2>
                <v-alert type="warning">
                    <small>I'm the parent / main page</small>
                </v-alert>
                <v-text-field
                    label="Input title for the modal"
                    v-model="title_props"
                    outlined
                >
                </v-text-field>
                <v-text-field
                    label="Input content for the modal"
                    v-model="content_props"
                    outlined
                >
                </v-text-field>
                
            </v-flex>
            <v-flex md6>
                <h2>This the modal (component) that uses props to get data from it's parent</h2>
                <v-alert type="warning">
                    <small>I'm the child component</small>
                </v-alert>
                <v-btn @click="props_dialog = true" class="success">Open props modal</v-btn>
                <PropsModal 
                    :title='title_props' 
                    :content='content_props' 
                /> <!--props data will pass to PropsModal component-->
            </v-flex>
        </v-row>

        <v-divider></v-divider>
        
         <v-row>
            <v-flex md6>
                <h2>Emit sample</h2>
                <!--
                    child component
                    when @update-emit triggers from the child component, it will call the function 'updateEmit'
                -->
                <EmitComponent @update-emit="updateEmit" /> 
            </v-flex>


            <v-flex md6>
                <h2>This is where data from child to parent emits</h2>
                <v-alert type="warning">
                    <small>I'm the parent / main page</small>
                </v-alert>

                <!--This loops the data coming from the child component 'data_from_emit'-->
                <div v-for="(item, item_index) in data_from_emit" :key="item_index">
                    <p>{{item.name}}</p>
                    <p>{{item.position}}</p>
                </div>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import { mapFields } from 'vuex-map-fields'
import PropsModal from '@/components/PropsEmit/PropsModal.vue'
import EmitComponent from '@/components/PropsEmit/Emit.vue'

export default {
    components:{
        PropsModal,
        EmitComponent
    },
    computed:{
        ...mapFields('utils', ['props_dialog'])
    },
    methods:{
        //Data from child component push to 'data_from_emit'
        updateEmit(emitData){
            this.data_from_emit.push(emitData)
        }
    },
    data: () => ({
        title_props: '',
        content_props: '',

        data_from_emit: []
    })
}
</script>