<template>
    <v-container>
        <v-alert type="info">
            • Axios API call
            • Loader function
            • Upload image "blob"
        </v-alert>
        <v-row>
            <v-flex md4 class="profile-picture">
                <croppa 
                    initial-image="@/assets/default_avatar.jpg"
                    v-model="myCroppa"
                    >
                </croppa>
                <v-btn class="success" @click="generateImage()">Generate image</v-btn>
                <!-- <v-btn class="success" @click="uploadCroppedImage()">Upload image</v-btn> -->

                <v-text-field
                    label="Email"
                    v-model="email"
                    outlined
                ></v-text-field>
                <v-text-field
                    label="First name"
                    v-model="first_name"
                    outlined
                ></v-text-field>
                <v-text-field
                    label="Last name"
                    v-model="last_name"
                    outlined
                ></v-text-field>


                <v-btn class="success" @click="addUser()">Add user</v-btn>
            </v-flex>

            <v-flex md8>
                <h2>Profile Details</h2>

                <!-- <div class="profile-details">
                    <div v-for="(users, users_index) in user_list" :key="users_index">
                        <img :src="users.avatar"/>
                        <p>ID {{users.id}}</p>
                        <p>Email {{users.email}}</p>
                        <p>Name {{users.first_name}} {{users.last_name}}</p>
                    </div>
                </div>-->
            </v-flex>
        </v-row>






        <div class="upload-file">
            <label>File
                <input accept=".csv" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            </label>
            <button v-on:click="submitFile()">Submit</button>
        </div>





    </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import { mapFields } from 'vuex-map-fields'
export default {
    data(){
        return{
            file: '',
            imgUrl: '',
            myCroppa: null,
            email: '',
            first_name: '',
            last_name: '',
        }
    },
    async mounted(){
        await this.loaderFn()
        await this.getUserList()
        await this.loaderFn()
    },
    computed: {
        ...mapFields('profile', ['profile_picture', 'user_list']),
        ...mapFields('utils', ['loader_dialog'])
    },
    methods: {
        ...mapActions('profile', ['saveProfilePicture', 'getUserList']),
        ...mapMutations('utils', ['loaderFn']),






        handleFileUpload(){
            this.file = this.$refs.file.files[0]
        },

        submitFile(){
            let formData = new FormData()
            formData.append('file', this.file)

            //check file type
            // if(this.file['type']==='image/png'){
            //     alert("true")
            // }
            // else{
            //     alert("false")
            // }
            console.log("========", this.file)
            // console.log("========", formData)
        },







        generateImage: function(){
            let url = this.myCroppa.generateDataUrl()
            if(!url){
                alert('No image')
                return
            }
            this.imgUrl = url
        },

        addUser(){
            this.user_list.push({
                id: 3,
                email: this.email,
                first_name: this.first_name,
                last_name: this.last_name,
                avatar: this.imgUrl
            })
        },

        // uploadCroppedImage(){
        //     let _s = this
        //     let fdata = new FormData()

        //     if (!this.myCroppa.hasImage()) {
		//         alert("No image")
        //     }
        //     else{
        //         _s.myCroppa.generateBlob(async (blob) => {
        //             fdata.append('profile_picture', blob, 'profile_picture.jpg')
        //             let resApi = await _s.saveProfilePicture(fdata)
        //             if(resApi.status === 200){
        //                 let url = this.myCroppa.generateDataUrl()
        //                 this.profile_picture = url
        //             }
        //         })
        //     }
        // }
    }
}
</script>