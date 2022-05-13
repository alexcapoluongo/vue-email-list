// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app = new Vue (
    {
        el: "#root",

        data:{
            email: "",
            emailsArray: [],
            min: 0,
            max: 10
        },

        methods: {
            generateEmail() {
                for(let i= 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {

                        this.email += ` ${response.data.response} ,  `
                        console.log(response.data.response );  
                          
                    })
                }
                this.email = "" 
            },

            
            generateArray() {
            }

        }

    }
)