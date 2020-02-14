<template>
    <div>
        <v-alert type="warning">
            <small>I'm the child component</small>
        </v-alert>
        
        <div v-for="(datum, datum_index) in sample_data" :key="datum_index">
            <p>{{datum.name}}</p>
            <p>{{datum.position}}</p>
            <v-btn @click="emitData(datum)">Emit data</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        emitData(datum){
            this.$emit('update-emit', datum)
        }
    },
    data: () =>({
        sample_data: [
            {
                name: 'Nathan',
                position: 'Front End Developer'
            }
        ]
    })
}
</script>