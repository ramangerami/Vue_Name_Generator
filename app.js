const app = Vue.createApp({
    
    data() {
        return {
            firstName: 'Jonny',
            lastName: 'Dang',
            email: 'jonnydang@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            this.firstName = 'Rachel',
            this.lastName = 'Smith',
            this.email = 'rachelsmith@gmail.com',
            this.gender = 'female',
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        },
    },

})

app.mount('#app')