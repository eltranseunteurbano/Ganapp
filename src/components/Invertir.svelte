    <script>

    import { db } from '../firebase.js';
    import Swal from 'sweetalert2';

    let nombre;
    let celular;
    let correo;
    var date = new Date();
    let today = "";

    async function asyncDate(){
        var date = new Date();
        let hora = String(date.getHours()).padStart(2, '0');
        let segundos = String(date.getSeconds()).padStart(2, '0');
        let minuto = String(date.getMinutes()).padStart(2, '0');
        let dia = String(date.getDate()).padStart(2, '0');
        let mes = String(date.getMonth()).padStart(2, '0');
        let ano = String(date.getFullYear()).padStart(2, '0');

        today = hora + ':' + minuto + ':' + segundos + ' - ' + dia + ' / ' + mes + ' / ' + ano;
    }


    console.log(today);

    function enviar (){
        
        if(nombre){
            if(celular){
                if(correo){
                    asyncDate();
                    db.collection("interesados").add({
                        nombre,
                        celular,
                        correo,
                        date: today
                    })
                   .then(function( docRef ){
                       nombre = null;
                       celular = null;
                       correo = null;

                       Swal.fire({
                           icon: 'success',
                           title: 'Hemos registrado tus datos',
                           text: 'Estaremos en contacto contigo cuando estemos operando'
                        })

                   })
                   .then(function( error ){
                      
                       console.log(error)
                   })
                }
                else{
                    Swal.fire({
                           icon: 'error',
                           title: 'Ops...',
                           text: 'Al parecer falta llenar el campo del correo'
                        })
                }
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Ops...',
                    text: 'Al parecer falta llenar el campo del número de celular'
                })
            }
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: 'Al parecer falta llenar el campo de tu nombre'
            })
        }
    }

</script>


<style>
    .Invertir{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 150px;
    }

    .Invertir__content{
        display: grid;
        grid-template: auto / 520px 520px;
        grid-column-gap: 20px;
    }

    .Invertir__info{
        padding-left: 40px;
    }

    .Invertir__info h1{
        color: #1F2464;
        margin-bottom: 15px;
        font-size: 30px;
    }

    .Invertir__info p{
        font-size: 18px;
        margin-bottom: 50px;
    }

    .Invertir__info__input{
        width: 100%;
        margin-bottom: 10px;
    }

    .Invertir__info__input p{
        font-weight: bold;
        margin: 0;
        margin-bottom: 10px;
    }

    .Invertir__info__input input{
        width: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    .Invertir__info__input button{
        width: 100%;
        background-color: #E94A47;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        
        color:white;
        font-weight: bold;
        letter-spacing: .4;
        
        border-radius: 8px;
        
        transition: all .4s;
        cursor: pointer;
        
        padding: 10px 20px;
        margin-top: 15px;
        box-sizing: border-box;
    }

    .Invertir__info__input button:hover{
        background-color: rgb(243, 41, 38);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    }

    .Invertir__img{
        margin: auto;
    }

    .Invertir__info__img{
        display: none;
    }

    .Invertir__info__img img{
        width: 100%;
        max-width: 610px;
        min-width: 300px;
        margin: auto;
    }

    @media only screen and (max-width: 768px) {
       .Invertir__content{
            grid-template: auto auto / 1fr;
            grid-gap: 0;
        } 

        .Invertir__info{
            padding: 0;
            padding: 0 40px;
        }

        .Invertir__info__img{
            display: flex;
            margin-bottom: 20px;
        }

        .Invertir__img{
            display: none;
        }

        .Invertir__info h1, .Invertir__info p{
            text-align: center;
            margin: 0;
        }

    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        .Invertir__content{
            grid-template: auto / 1.5fr 2fr;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1060px) {
        .Invertir__content{
            grid-template: auto / 450px 578px;
        }
    }

</style>


<section class="Invertir" id="contacto">

    <article class="Invertir__content">

        <article class="Invertir__info">
            
            <h1>¿Quieres invertir?</h1>
            <p>Próximamente estaremos operando virtualmente, si quieres estar informado déjanos tus datos.</p>
            
            <div class="Invertir__info__img">
                <img src="/img/Invertir.png" alt="Invertir">
            </div>
            
            <div class="Invertir__info__input">
                <p>Nombre completo</p>
                <input type="text" placeholder="Pepito Peréz" bind:value={nombre}>
            </div>

            <div class="Invertir__info__input">
                <p>Teléfono</p>
                <input type="number" placeholder="300 123 45 67" bind:value={celular}>
            </div>

            <div class="Invertir__info__input">
                <p>Correo</p>
                <input type="email" required placeholder="pepitoperez@gmail.com" bind:value={correo}>
            </div>

            <div class="Invertir__info__input">
                <button on:click={enviar}>Enviar</button>    
            </div>
            
        
        </article>

        <article class="Invertir__img">
        
            <img src="/img/Invertir.png" alt="Invertir">

        </article>

    </article>


</section>