


// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue(
    {
        el: '#contenitore',

        data:
        {
            nome: "",
            cognome: "",
            myClass: "",
            my_dog:""       
        },
        methods: {
            call_me: function () {
                if(!this.my_dog){

                    this.my_dog = "back_ground"
                }
            },
            myfunction: function () {
                if (!this.myClass) {
                    this.myClass = " text_underline text_red"

                } else {
                    this.myClass = ""

                }


                console.log(`ciao belli `);
            },

            reset_func: function () {

                this.nome = ""
                this.cognome = ""
                this.myClass = ""

            }


        }

    }
)