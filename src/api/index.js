let endpoint = {
    profile_picture: 'user/profile/image',
    profile_details: {
        list_user: 'users'
    }
}

export default {
    async saveProfilePicture(formData) {
        return await axios( endpoint.profile_picture,
            {
                method: 'post',
                data: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'token': getToken().headers.token
                }
            },
        )
    },

    async getUserList(){
        return await axios.get(endpoint.profile_details.list_user)
    },
    async saveUserList(args){
        return await axios.post(endpoint.profile_details.list_user, args)
    }
}
