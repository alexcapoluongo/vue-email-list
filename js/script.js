// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const app = new Vue (
    {
        el: "#root",

        data:{
            emailsArray: [],
        },

        //prova con il created e non il method
        created() {
            for(let i= 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const newEmail = response.data.response
                    this.emailsArray.push(newEmail);
                })
            }
        },

        methods: {
            // generateEmail() {
            //     for(let i= 0; i < 10; i++) {
            //         axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            //         .then((response) => {
            //             this.emailsArray.push(response.data.response)
            //             this.showList()  
            //         })
            //     } 
            //     this.emailsArray = []
            // },

            
            // showList() {
            //     if(this.emailsArray.length > 9) {
            //         this.isVisible = true;
            //     }
            // }

        }

    }
)