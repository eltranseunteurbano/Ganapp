<script>
    import FaPhoneAlt from 'svelte-icons/fa/FaPhoneAlt.svelte'
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
    import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
    import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte'
</script>

<style>

    footer{
        background-color: #202564;
        padding: 40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .footer__item{
        margin-bottom: 30px;
    }

    .footer__item h3{
        color: white;
        margin: 0;
        margin-bottom: 5px;
        font-weight: bold;
    }

    .footer__item p, .footer__item a{
        color: white;
        margin: 0;
    }

    .footer__item a{
        color: white;
        margin: auto;
        display: block;
        text-decoration: none;
        cursor: pointer;
        transition: all .4s;
    }

    .footer__item a:hover{
        letter-spacing: .5px;
    }

    .footer__redes{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .footer__redes a{
        background: white;
        color: #202564;

        width: 30px;
        height: 30px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        margin-right: 15px;
        margin-bottom: 10px;
        padding: 4px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-radius: 30px;
        
        transition: all .4s;
        cursor: pointer;
    }

    .footer__redes a:hover{
        color: #E94A47;
        border: solid 2px #E94A47;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }

    .footer__final{
        width: 100%;

    }

    .footer__final p{
        color: white;
        margin: 0;
    }

    .footer__content{
        width: 100%;
    }

    @media only screen and (min-width:768px) and (max-width: 1060px){
        
        .footer__content{
            display: grid;
            width: 100%;
            grid-template: repeat(2, auto) / repeat(3, auto);
            justify-content: space-between;
            align-items: center;
        }

        .footer__final{
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
        }
        .footer__redes a{
            margin-bottom: 0;
        }

    }

     @media only screen and (min-width:1060px){
        
        .footer__content{
            width: 100%;
            max-width: 1060px;
            display: grid;
            grid-template: repeat(2, auto) / repeat(3, auto );
            justify-content: space-between;
            align-items: center;
        }

        .footer__final{
            max-width: 1060px;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
        }
        .footer__redes a{
            margin-bottom: 0;
        }

    }
</style>

<footer>

    <article class="footer__content">
    
        <div class="footer__item">
            <h3>Nombre App</h3>
            <p>Colombia</p>
        </div>

        <div class="footer__item">
            <a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank">302 288 0083</a>
            <a href="mailto:nombreapp@gmail.com">nombreapp@gmail.com</a>
        </div>

        <div class="footer__item">
            <h3>Información</h3>
            <a>Preguntas Generales</a>
            <a>Términos y Condiciones</a>
        </div>

        <div class="footer__logo">
            <h1>Logo</h1>
        </div>

    </article>

    <div class="footer__final">
        <div class="footer__redes">
            <a href="https://api.whatsapp.com/send?phone=573022880083" target="_blank"> <FaPhoneAlt/> </a>
            <a> <FaInstagram/> </a>
            <a> <FaTwitter /> </a>
            <a> <FaFacebookF /></a>
        </div>
        <p>Todos los derechos reservados.</p>
    </div>

</footer>