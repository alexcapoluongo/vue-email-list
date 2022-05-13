// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app = new Vue (
    {
        el: "#root",

        data:{
            email: "",
            emailsArray: [],
            isVisible: false
        },

        methods: {
            generateEmail() {
                for(let i= 0; i < 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {

                        this.email += ` ${response.data.response} ,  `
                        this.emailsArray.push(this.email)
                        console.log(this.emailsArray);  
                        this.showList()  
                    })
                }
                this.email = "" 
               
            },

            
            showList() {
                if(this.emailsArray.length > 9) {
                    this.isVisible = true;
                }
            }

        }

    }
)