<template>
    <v-container>
        <h3>Deep Clone</h3>

        <v-btn @click="usingParse()">Clone using parse</v-btn>
        <v-btn @click="usingObject()">Clone using parse</v-btn>

        <p>Clone array: {{newCloneArray}}</p>
        <p>Clone object: {{newCloneObject}}</p>

        <h3>Map</h3>
        <!--MAP muatation data -->
        {{this.sample}}
    </v-container>
</template>


<script>
    export default {
        mounted(){
            this.mapData.map(item => {
                this.sample = item = {
                    fullname: item.name + item.last
                }
                console.log("==========", item)
            })
        },
        methods: {
            usingParse(){
                this.newCloneArray = JSON.parse(JSON.stringify(this.arraySample))
            },
            usingObject(){
                this.newCloneObject = Object.assign(this.objectSample)
            }
        },
        data(){
            return{
                sample: '',
                mapData: [
                    {
                        name: "Nathan",
                        middle: "Bonifacio",
                        last: "Lerit"
                    }
                ],


                newCloneArray: '',
                newCloneObject: '',

                arraySample: ['Jim', 'Pam', 'Fred'],
                objectSample: [
                    {
                        name: 'nathan', 
                        last: 'lerit'
                    }
                ]
            }
        }
    }
</script>