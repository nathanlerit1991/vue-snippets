import Vue from 'vue'
import Vuex from 'vuex'

// import { getField, updateField } from 'vuex-map-fields'

Vue.use(Vuex)

import {utils} from './utils.js'
import {home} from './home.js'
import {profile} from './profile.js'

const store = new Vuex.Store({
    namespaced: true,
    modules: {
        home,
        profile,
        utils
    }
})

export default store
