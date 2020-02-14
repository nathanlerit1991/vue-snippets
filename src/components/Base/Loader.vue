<template>
    <div>
        <v-overlay :value="loader_dialog">
            <v-progress-circular indeterminate size="64" color="#b8f0ff"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex"
import { mapFields } from 'vuex-map-fields'

export default {
    name: 'Loader',
    computed: {
        ...mapFields('utils', ['loader_dialog'])
    },
}
</script>