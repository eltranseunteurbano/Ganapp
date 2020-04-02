<style>

    .Requisitos{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 150px;
    }

    .Requisitos__content{
        display: grid;
        grid-template: auto 1fr / 520px 110px 430px;
        grid-template-areas: "title title title";
    }

    .Requisitos__content__img{
        display: flex;
        width: 100%;
    }

    .Requisitos__content__img img{
        margin: auto;
        width: 100%;
    }

    .Requisitos__content h1{
        color: #1F2464;
        font-size: 30px;
        grid-area: title;
        text-align: center;
    }

    .Requisitos__content__body{
        display: inline-grid;
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
        grid-column-gap: 20px;
        justify-content: flex-start;
        align-items: center;

        padding: 50px 0;
        box-sizing: border-box;
    }
    
    .Requisitos__content__body__img{
        display: none;
    }

    .Requisitos__content__body__img img{
        margin: auto;
    }

    .Requisitos__content__body div{
        margin: 0;
        text-align: center;
    }

    .Requisitos__content__body h3{
        margin: 0;
        margin-bottom: 15px;
    }

    .Requisitos__content__body p{
        margin: 0;
    }

    @media only screen and (max-width: 768px){
        .Requisitos__content{
            grid-template: auto auto / auto;
            grid-template-areas: "title";
            width: 100%;
        }
        .Requisitos__content h1{
            margin: 0;
        }

        .Requisitos__content__body{
            width: 100%;
            justify-content: center;
            grid-template: repeat(5, auto) / auto;
            grid-row-gap: 30px;
        }

        .Requisitos__content__body h3{
            margin: 0;
        }

        .Requisitos__content__body__img{
            display: flex;
        }

        .Requisitos__content__img{
            display: none;
        }

        .Requisitos__content__blank{
            display: none;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 992px){
        .Requisitos__content{
            grid-template: auto 1fr / 5fr 4fr;

        }
        .Requisitos__content__body{
            padding: 0;
            padding-left: 40px;
        }

        .Requisitos__content__blank{
            display: none;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1060px){
        .Requisitos__content{
            grid-template: auto 1fr / 5fr 4fr;

        }
        .Requisitos__content__body{
            padding: 0;
            padding-left: 40px;
        }

        .Requisitos__content__blank{
            display: none;
        }
    }

</style>


<section class="Requisitos" id="requisitos">

    <article class="Requisitos__content">

    <h1>Requisitos</h1>
    
        <article class="Requisitos__content__body">

            <div class="Requisitos__content__body__img">
                <img src="./img/Requisitos.png" alt="Requisitos">
            </div>
            
            <div class="Requisitos__content__body__item">
                <h3>+18</h3>
                <p>Debes ser mayor de edad.</p>
            </div>

            <div class="Requisitos__content__body__item">
                <h3>Colombiano</h3>
                <p>Ser ciudadano colombiano.</p>
            </div>

            <div class="Requisitos__content__body__item">
                <h3>Mínimo a Invertir</h3>
                <p>Invierte desde $200.000 COP sin límites.</p>
            </div>

            <div class="Requisitos__content__body__item">
                <h3>Largo Plazo</h3>
                <p>Invertir en un periodo mínimo de 420 días.</p>
            </div>
        </article>

        <div class="Requisitos__content__blank"></div>

        <div class="Requisitos__content__img">
            <img src="./img/Requisitos.png" alt="Requisitos">
        </div>
    
    </article>

</section>