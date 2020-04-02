 <script>

    import Header from './Header.svelte'
    import FaArrowDown from 'svelte-icons/fa/FaArrowDown.svelte';

</script>

<style>
    .Banner{
        width: 100%;
        height: 80vh;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        background-color: #498FEB;

        padding-bottom: 25px;
        box-sizing: border-box;
        margin-bottom: 50px;
    }

    .Banner__content{
        display: grid;
        grid-template: auto / 430px 630px;
        box-sizing: border-box;
    }
    
    .Banner__content__info{
        padding-left: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .Banner__content__info__img{
        width: 100%;
        max-width: 630px;
        min-width: 300px;
        display: none;
    }

    .Banner__content__info__img img{
        margin: auto;
        width: 100%;
    }

    .Banner__content__info h1{
        color: white;
        font-weight: bolder;
        font-size: 40px;
        line-height: 35px;
    }

    .Banner__content__info p {
        color: white;
        font-size: 20px;
    }

    .Banner__icon{
        color:white;
        width: 20px;
        transition: all .4s;

        animation-name: moved;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-duration: 1.5s;
    }

    .Banner__icon:hover{
        transform: scale(1.1);
    }

    .Banner__content__img{
        width: 100%;
        max-width: 630px;
        display: flex;
    }

    .Banner__content__img img{
        margin: auto;
        width: 100%;
    }

    @keyframes moved{
        0%{
            transform: translate(0);
        }

        50%{
            transform: translate(0, 5px)
        }
    }


    @media only screen and  (max-width: 768px) {
       .Banner__content{
            grid-template: auto auto / 1fr;
        } 

        .Banner__content__info{
            padding: 0 40px;
            justify-content: center;
            align-items: center;
        }

        .Banner__content__info__img{
            display: flex;
            width: 70%;
        }

        .Banner__content__info h1, .Banner__content__info p{
            text-align: center;
        }

        .Banner__content__info h1 br{
            display: none;
        }

        

        .Banner__content__img{
            display: none;
        }
    }


    @media only screen and (min-width: 768px) and (max-width: 992px) {
        .Banner__content{
            grid-template: auto / 1.5fr 2fr;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1060px) {
        .Banner__content{
            grid-template: auto / 400px 580px;
        }
    }
</style>

 <article class="Banner">
        <Header />

        <article class="Banner__content">
        
            <div class="Banner__content__info">
            
                <h1>Invierte y <br/>gana en grande</h1>

                 <div class="Banner__content__info__img">
                        <img src="./img/MacBook.png" alt="Simulación">
                    </div>

                <p>Obtén hasta un 20% de efectivo anual de utilidad inviertiendo en pequeñas y medianas fincas ganaderas colombianas.</p>

            </div>

            <div class="Banner__content__img">
                <img src="./img/MacBook.png" alt="Simulación">
            </div>

        </article>

        <div class="Banner__icon">
            <FaArrowDown />
        </div>

    </article>