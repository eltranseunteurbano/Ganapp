<style>

     .Beneficios{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 150px;
    }

    .Beneficios__content{
        display: grid;
        grid-template: auto 1fr / 430px 110px 520px;
        grid-template-areas: "title title title";
    }

    .Beneficios__content__img img{
        margin: auto;
    }

    .Beneficios__content h1{
        color: #1F2464;
        font-size: 30px;
        grid-area: title;
        text-align: center;
    }

    .Beneficios__content__body{
        display: inline-grid;
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
        grid-column-gap: 20px;
        justify-content: flex-start;
        align-items: center;

        padding: 50px 0;
        box-sizing: border-box;
    }

    .Beneficios__content__body__img{
        width: 100%;
        display: none;
    }

    .Beneficios__content__body__img img{
        margin: auto;
        
        max-width: 500px;
        min-width: 335px;
    }

    .Beneficios__content__body div{
        margin: 0;
        text-align: center;
    }

    .Beneficios__content__body h3{
        margin: 0;
        margin-bottom: 15px;
    }

    .Beneficios__content__body p{
        margin: 0;
    }

       @media only screen and (max-width: 768px){
        .Beneficios__content{
            grid-template: auto 1fr / 1fr;
            width: 100%;
        }
        .Beneficios__content h1{
            margin: 0;
        }

        .Beneficios__content__body{
            width: 100%;
            padding:0 40px;
            grid-template: repeat(4, auto) / 1fr;
            grid-row-gap: 30px;
        }

        .Beneficios__content__body h3{
            margin: 0;
        }

        .Beneficios__content__body__img{
            display: flex;
        }

        .Beneficios__content__img{
            display: none;
        }

        .Beneficios__content__blank{
            display: none;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 992px){
        .Beneficios__content{
            grid-template: auto 1fr / 4fr 5fr;

        }
        .Beneficios__content__body{
            padding: 0;
            padding-right: 40px;
        }

        .Beneficios__content__blank{
            display: none;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1060px){
        .Beneficios__content{
            grid-template: auto 1fr / 4fr 5fr;

        }
        .Beneficios__content__body{
            padding: 0;
            padding-right: 40px;
        }

        .Beneficios__content__blank{
            display: none;
        }
    }

</style>


<section class="Beneficios" id="beneficios">

    <article class="Beneficios__content">

    <h1>Beneficios</h1>
    
        <div class="Beneficios__content__img">
            <img src="./img/Beneficios.png" alt="Beneficios">
        </div>

        <div class="Beneficios__content__blank"></div>

        <article class="Beneficios__content__body">
            <div class="Beneficios__content__body__img">
                <img src="./img/Beneficios.png" alt="Beneficios">
            </div>
            <div class="Beneficios__content__body__item">
                <h3>Utilidades</h3>
                <p>Al invertir con nosotros, obtienes hasta un 20% de utilidades.</p>
            </div>

            <div class="Beneficios__content__body__item">
                <h3>Estado de Inversión</h3>
                <p>Actualización constante en la plataforma del estado de tu inversión.</p>
            </div>

            <div class="Beneficios__content__body__item">
                <h3>Ayuda</h3>
                <p>Tu inversión ayudará a campesinos colombianos.</p>
            </div>

            <div class="Beneficios__content__body__item">
                <h3>Rentabilidad</h3>
                <p>Más rentable que un CDT.</p>
            </div>
        </article>
    
    </article>



</section>