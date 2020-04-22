<script>
    import FaBars from 'svelte-icons/fa/FaBars.svelte'
    import { fly } from 'svelte/transition';

    $: showMenu = false;

    function toggleMenu ( event ) {
        showMenu = event;
    }

</script>


<style>

    header{
        width: 100%;
        display: grid;
        grid-template: auto / 450px 610px;
        justify-content: center;
        padding: 20px 40px;
        box-sizing: border-box;
    }

    .header__logo{
        max-width: 120px;
    }

    .header__logo a img {
        fill: white;
    }

    .header__bars{
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .header__bars__icon{
        width: 30px;
        color:white;
        cursor: pointer;
    }

    .header__bars__items{
        color: white;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;

        width: 90%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    }

    .header__bars__items a{
        width: 100%;
        background-color: white;

        color: #498FEB;
        font-weight: bolder;
        text-align: center;
        text-decoration: none;
        
        transition: all .4s;
        border-bottom: solid 1px #498FEB;
        padding:5px 0;
        box-sizing: border-box;

    }

    .header__menu{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
    }

    .header__menu a{
        color: white;
        font-weight: bolder;
        text-decoration: none;
        transition: all .4s;
    }

    .header__menu a:hover{
        letter-spacing: 1px;
    }

    .show{
        display: flex !important;
        position: absolute;
        top: 70px;
        left: 5%;
        right: 5%;
    }


    @media only screen and (max-width: 768px) {
        .header{
            width: 100%;
            grid-template: auto / 120px 1fr;
            justify-content: space-between;
        }

        .header__menu{
            display: none;
        }

        .header__bars{
            display: flex;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 992px) {
        .header{
            grid-template: auto / 324px 444px;
        }

        .header__menu{
            display: flex;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1060px) {
        .header{
            grid-template: auto / 420px 574px;
        }

        .header__menu{
            display: flex;
        }
    }

</style>


<header class="header">

    <div class="header__logo"> <a href="/"> <img src="./Logo.svg" alt="Logo Vakros" > </a></div>

    <div class="header__bars">
        <div class="header__bars__icon" on:click="{ () => toggleMenu(!showMenu) }">
            <FaBars />
        </div>

    {#if showMenu}
        <div class="header__bars__items" class:show="{showMenu === true }" transition:fly="{{ y:-100, duration: 400 }}">
            <a href="#works">¿Cómo funciona?</a>
            <a href="#requisitos">Requisitos</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#contacto">Contáctanos</a>
        </div>
    {/if}
    </div>

    <nav class="header__menu">
    
        <a href="#works">¿Cómo funciona?</a>
        <a href="#requisitos">Requisitos</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#contacto">Contáctanos</a>
    </nav>

</header>