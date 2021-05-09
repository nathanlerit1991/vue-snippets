<template>
    <div>
        <v-alert type="warning" width='250'>
            <small>I'm the child component - sample data below <v-icon>mdi-arrow-down-bold-circle-outline</v-icon></small>
        </v-alert>

        <div v-for="(datum, datum_index) in sample_data" :key="datum_index">
            <p>{{datum.name}}</p>
            <p>{{datum.position}}</p>
            <v-btn class="success" @click="emitData(datum)">Emit data</v-btn>
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
