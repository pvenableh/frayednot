<template>
    <div id="loader" class="absolute flex items-center justify-center flex-col w-full">
       <h5 class="uppercase tracking-wider">Frayednot</h5>
    </div>
</template>

<style scoped>
#loader {
    top: 0px;
    left: 0px;
    height: 550px;
    @media (min-width: theme('screens.sm')) {
      height: 550px;
    }
    @media (min-width: theme('screens.md')) {
      height: 600px;
    }
    @media (min-width: theme('screens.lg')) {
      height: calc(100vh - 57px);
    }
    svg {
        width: 250px;

        path {
            opacity: 0.4;
            fill: var(--grey);
            animation-duration: 3s;
            animation-timing-function: var(--curve);
            animation-iteration-count: infinite;
            animation-name: example1;
        }

        path:nth-of-type(1) {
            animation-delay: 0.1s;

        }

        path:nth-of-type(2) {
            animation-delay: 0.4s;
        }

        path:nth-of-type(3) {
            animation-delay: 0.8s;
        }

        @keyframes example1 {
            0% {
                opacity: 0.4;
                fill: var(--grey);

            }

            50% {
                opacity: 1;
                fill: var(--blue);
            }

            100% {
                opacity: 0.4;
                fill: var(--grey);
            }
        }

        @keyframes example2 {
            0% {
                opacity: 0.4;
                fill: var(--grey);
                transform: translate(-11903.06 -753.296) scale(1);

            }

            50% {
                transform: translate(-11903.06 -753.296) scale(1.2);
                opacity: 1;
                fill: var(--blue);
            }

            100% {
                transform: translate(-11903.06 -753.296) scale(1);
                opacity: 0.4;
                fill: var(--grey);
            }
        }



    }
}
</style>
