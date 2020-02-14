import { getField, updateField } from 'vuex-map-fields'

const state = {
    // dialog_store: false,
}

const getters = {
    // dialogState: (state) => state.dialog_store,
    getField,
}

const actions = {

}

const mutations = {
    updateField
}

export const home = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}