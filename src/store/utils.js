import api from '../api'
import { getField, updateField } from 'vuex-map-fields'

const state = {
    loader_dialog: false,
    props_dialog: false,
}

const getters = {
    getField
}

const actions = {
    
}

const mutations = {
    updateField,

    loaderFn(state, data){
        state.loader_dialog = !state.loader_dialog
    }
}


export const utils = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}