<template>
    <div id="intro-animation" class="flex items-center justify-center flex-row relative">
        <div id="logo" class="flex flex-col items-end justify-end relative">
            <div id="square" class="h-full w-full absolute"></div>
            <LayoutRosen id="rosen" />
            <LayoutKelly id="kelly" />
            <LayoutConway id="conway" />
        </div>

        <div class="flex flex-col items-start justify-start text">
            <p>Embracing</p>
            <p>Design</p>
            <p>Heritage</p>
            <p>With a</p>
            <p>Modern</p>
            <p>Vision</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
#intro-animation {
    width: 100%;
    max-width: 525px;
    height: 275px;
    transform: scale(0.6);
    /* animation: intro-animation 1s 4.5s var(--curve) forwards; */
    animation: intro-animation 1s 6s var(--curve) forwards;
    @media (min-width: 525px) {
        transform: scale(1);
    }

    #logo {
        width: 250px;
        height: 250px;
        padding: 20px;
        #square {
            background: var(--blue);
            z-index: 5;
            opacity: 0;
            /* animation-name: square-animation;
            animation-direction: farwards;
            animation-delay: 2s;
            animation-duration: 1s;
            animation-easing-function: var(--curve); */
            animation: square-animation 1s 1.15s var(--curve) forwards;
            top: 0px;
            left: 0px;
        }

        svg {
            height: 30px;
            z-index: 10;
            fill: var(--white);
            animation: name-animation 1.5s var(--curve) forwards;
            

            path {}
        }

        #rosen {
            animation-delay: 0s;
        }

        #kelly {
            animation-delay: 0.15s;
            @apply my-2;
        }

        #conway {
            animation-delay: 0.2s;
        }
    }

    .text {
        width: 260px;
        font-size: 42px;
        line-height: 43px;
        color: var(--grey);
        margin-left: 15px;
        z-index: 0;
        @apply uppercase tracking-wide font-light;

        p {
            opacity: 0;
            animation: text-animation 1.5s 2s var(--curve) forwards;
        }

        p:nth-of-type(1) {
            animation-delay: 1.6s;
        }

        p:nth-of-type(2) {
            animation-delay: 1.7s;
        }

        p:nth-of-type(3) {
            animation-delay: 1.75s;
        }

        p:nth-of-type(4) {
            animation-delay: 1.8s;
        }

        p:nth-of-type(5) {
            animation-delay: 1.83s;
        }

        p:nth-of-type(6) {
            animation-delay: 1.85s;
        }
    }
}

@keyframes name-animation {
    0% {
        opacity: 0;
        transform: translateY(100px);
        fill: var(--blue);
    }

    30% {
        opacity: 0;
    }

    80% {
        transform: translateY(0px);
        fill: var(--blue);
        opacity: 1;
    }

    100% {
        opacity: 1;
        fill: var(--white);
    }
}

@keyframes square-animation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes text-animation {
    0% {
        opacity: 0;
        transform: translateX(-275px);
    }

    100% {
        opacity: 1;
        transform: translateX(0px);

    }
}

@keyframes intro-animation {
    0% {
        opacity: 1;
  
    }
    100% {
        opacity: 0;
   

    }
}</style>
