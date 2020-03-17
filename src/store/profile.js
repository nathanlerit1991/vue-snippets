import api from '../api'
import { getField, updateField } from 'vuex-map-fields'

const state = {
    profile_picture: '',
    user_list: ''
}

const getters = {
    getField
}

const actions = {
    async saveProfilePicture( {commit}, fdata ){
        let resApi = await api.saveProfilePicture(fdata)
        return resApi
    },

    async getUserList( {commit} ){
        let resApi = await api.getUserList()
        commit('onOkGetUserList', resApi.data)
    },

    async saveUserList( {commit}, data ){
        let resApi = await api.saveUserList(data)
    }
}

const mutations = {
    updateField,
    onOkGetUserList(state, data){
        state.user_list = data
    }
}


export const profile = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
