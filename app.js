const app = Vue.createApp({
    
    data(){
        return {
            firstName:'John',
            lastName:'Doe',
            email:'johndoe@example.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/20.jpg',
            country : 'USA',
            city :'Huston',
            contactPhone:'(01-038-788-789)',
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email =  results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.country = results[0].location.country
            this.city = results[0].location.city
            this.contactPhone = results[0].cell
        }
    },
})

app.mount('#app')