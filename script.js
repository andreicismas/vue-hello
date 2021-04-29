


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
        },
        methods: {
            myfunction: function () {
                if(!this.myClass){
                    this.myClass = " text_red"
                    this.myClass = " text_underline"
                }else{
                    this.myClass = ""

                }


                console.log(`ciao belli `);
            },

        },

    }
)