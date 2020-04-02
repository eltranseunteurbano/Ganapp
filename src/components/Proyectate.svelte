<script>

    let input;
    let valorFinal = 0;

</script>


<style>
    .Proyectate{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 150px;
    }

    .Proyectate__content{
        display: grid;
        grid-template: auto / 480px 520px;
        grid-column-gap: 20px;
    }

    .Proyectate__info{
        padding-left: 40px;
        box-sizing: border-box;
    }

    .Proyectate__info__img{
        display: none;
    }

    .Proyectate__info__img img{
        width: 100%;
        max-width: 610px;
        min-width: 335px;
        margin: auto;
    }

    .Proyectate__info h1{
        color: #1F2464;
        margin-bottom: 15px;
        font-size: 30px;
    }

    .Proyectate__info p{
        font-size: 18px;
        margin-bottom: 50px;
    }

    .Proyectate__info__input{
        width: 100%;
        margin-bottom: 20px;
    }

    .Proyectate__info__input p{
        color: #1F2464;
        font-weight: bold;
        margin: 0;
        margin-bottom: 10px;
    }

    .Proyectate__info__input input{
        width: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 10px 20px;
        box-sizing: border-box;
    }

    .Proyectate__info__input div{
        width: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 10px 20px;
        box-sizing: border-box;
        border: solid 1px #ccc;
    }

    .Proyectate__img{
        margin: auto;
    }

    .Proyectate__img img{
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
       .Proyectate__content{
            grid-template: auto auto / 1fr;
            grid-gap: 0;
        } 

        .Proyectate__info{
            padding: 0;
            padding: 0 40px;
        }

        .Proyectate__info__img{
            display: flex;
        }

        .Proyectate__img{
            display: none;
        }

        .Proyectate__info h1, .Proyectate__info p{
            text-align: center;
        }

    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        .Proyectate__content{
            grid-template: auto / 1.5fr 2fr;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1060px) {
        .Proyectate__content{
            grid-template: auto / 450px 578px;
        }
    }

</style>


<section class="Proyectate">

    <article class="Proyectate__content">

        <article class="Proyectate__info">
            
            <h1>Proyéctate</h1>
            <p>Invertir con nosotros es super sencillo, <br/>prueba ahora cuánto podrías ganar.</p>
            
            <div class="Proyectate__info__img">
               <img src="/img/proyectate.png" alt="Proyéctate">
            </div>

            <div class="Proyectate__info__input">
            
                <p>Si invierto</p>
                <input type="number" placeholder="Digita el valor a invertir" bind:value={input}>

            </div>

            <div class="Proyectate__info__input">
            
                <p>Obtengo apróximadamente</p>
                <div>$ {valorFinal * 2}</div>
            </div>
        
        </article>

        <article class="Proyectate__img">
        
            <img src="/img/proyectate.png" alt="Proyéctate">

        </article>

    </article>


</section>