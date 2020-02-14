<template>
    <v-dialog
        v-model="props_dialog"
        width="500"
    >
        <v-card>
            <v-card-title class="headline grey lighten-2">
                {{title}} <!--props -->
            </v-card-title>

            <v-card-text>
                {{content}} <!--props -->
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="props_dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import { mapFields } from 'vuex-map-fields'

export default {
    props: [
        'title',
        'content'
    ],
    computed:{
        ...mapFields('utils', ['props_dialog'])
    },
    data: () => ({

    })
}
</script>