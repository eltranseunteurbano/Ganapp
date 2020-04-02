<style>

    .works{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 150px;
    }

    .works__content{
        display: grid;
        grid-template: repeat(2, auto) / repeat(3, calc( 1060px / 3 ) );
        grid-template-areas: "title title title";
        grid-column-gap: 20px;
    }

    .works__content h1{
        color: #1F2464;
        font-size: 30px;
        grid-area: title;
        text-align: center;
    }

    .works__content__item{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
    }

    .works__content__item div{
        display: flex;
    }

    .works__content__item div img{
        margin: auto;
    }

    .works__content__item h3{
        color: #1F2464;
        text-align: center;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .works__content__item p{
        font-size: 16px;
        text-align: center;
        margin:0;
    }

    @media only screen and (max-width:600px){
        .works__content{
            grid-template: auto repeat(3, 1fr) / 1fr;
            grid-row-gap: 20px;
            grid-template-areas: "title";

            padding: 0 40px;
            box-sizing: border-box;
        }
        .works__content h1{
            margin: 0;
        }

        .works__content__item{
            display: grid;
            grid-template: repeat(2, auto) / 1fr 3fr;
            justify-content: flex-start;
            align-items: center;
            grid-template-areas: "icon title" "icon text";
        }

        .works__content__item div{
            grid-area: icon;
        }

        .works__content__item h3{
            grid-area: title;
            text-align: left;
            margin: 0;
        }

        .works__content__item p{
            grid-area: text;
            text-align: left;
            max-width: 100%;
        }
    }

    @media only screen and (min-width: 600px) and (max-width: 768px) {
        .works__content{
            grid-template: auto repeat(3, 1fr) / 1fr;
            grid-gap: 0;
            grid-row-gap: 20px;
            grid-template-areas: "title";

            padding: 0 40px;
            box-sizing: border-box;
        }
        .works__content h1{
            margin: 0;
        }

        .works__content__item{
            display: grid;
            grid-template: repeat(2, auto) / 1fr 3fr;
            justify-content: flex-start;
            align-items: center;
            grid-template-areas: "icon title" "icon text";
        }

        .works__content__item div{
            grid-area: icon;
        }

        .works__content__item h3{
            grid-area: title;
            text-align: left;
            margin: 0;
        }

        .works__content__item p{
            grid-area: text;
            text-align: left;
            max-width: 80%;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1060px) {

        .works{
            padding: 0 40px;
        }

        .works__content{
            display: grid;
            grid-template: repeat(2, auto) / repeat(3, calc( calc( 100% - 40px ) / 3 ) );
            grid-template-areas: "title title title";
            grid-column-gap: 20px;
        }
    
    }


</style>

<section class="works" id="works">
    <article class="works__content">
    
            <h1>¿Cómo funciona?</h1>

            <div class="works__content__item">
                <div>
                    <img src="./img/MetaMensual.png" alt="Meta mensual">

                </div>
                <h3>Meta mensual</h3>
                <p>Lanzamos mensualmente una meta que deberá cumplirse para realizar la inversión.</p>

            </div>

            <div class="works__content__item">
                <div>
                    <img src="./img/Inviertes.png" alt="Inviertes">

                </div>
                <h3>Inviertes</h3>
                <p>Invierte desde $200.000 COP y espera que se cumpla la meta.</p>

            </div>

            <div class="works__content__item">
                <div>
                    <img src="./img/Recibes.png" alt="Recibes">

                </div>
                <h3>Recibes</h3>
                <p>Después de 420 días recibes tu inversión más la utilidad neta.</p>

            </div>

    </article>
</section>