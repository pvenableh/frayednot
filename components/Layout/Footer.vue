<template>
  <div class="w-full max-w-7xl footer">
    <div class="w-full pt-0 pb-24 flex flex-col items-center justify-center mx-auto ">
      <div class="w-full flex flex-col items-start justify-center lg:flex-row lg:items-end lg:justify-between">

        <div
          class="mt-8 w-full flex items-center lg:items-start justify-center  flex-col sm:flex-row footer__col relative">
          <!-- <div class="flex flex-col sm:flex-row">
        <p class="text-center"><span class="hidden">Phone: </span><a href="tel:(908) 273-6565">908.273.6565</a></p>
        <p class="text-center sm:mx-5 "><span class="hidden">Studio: </span>16 Maple St Summit NJ</p>
        <p class="text-center sm:mr-5">
          <span class="hidden">Email: </span><a href="mailto:info@rkcad.com">Info@rkcad.com</a>
        </p>
      </div> -->
          <!-- <div class="flex flex-row mt-8 sm:mt-2 lg:-mt-[4px]">
          <a
            href="https://www.instagram.com/rkcad/"
            target="_blank"
            class="lg:ml-5 md:mb-3 lg:mb-0"
          >
            <nuxt-icon name="instagram" class="" />
          </a>
          <a
            href="https://www.houzz.com/professionals/architects-and-building-designers/rosen-kelly-conway-architecture-and-design-pfvwus-pf~1350653163?"
            target="_blank"
            class="ml-5"
          >
            <nuxt-icon name="houzz" class="" />
          </a>
        </div> -->
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-center mt-6 font-bold tracking-wide">
        <h5 class="mt-8 lg:mt-0 tracking-widest body-font copyright">
          &#169; {{ new Date().getFullYear() }} frayednot, llc
        </h5>
        <h5 class="mt-2 web-designer">
          <a href="https://huestudios.com" target="_blank" rel="noopener" class="columns shrink body-font">designed by
            <LayoutHue />
          </a>
        </h5>
      </div>
    </div>
  </div>
</template>
  


<style>
.footer {
  position: relative;
  padding-top: 100px;
  transition: all 0.4s var(--curve);
  z-index: 10;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: theme('screens.sm')) {
    padding-left: 35px;
    padding-right: 35px;
  }

  &__col {

    a,
    p {
      font-size: 9px;
      @apply uppercase tracking-widest font-bold;
    }

    a.router-link-exact-active {
      color: var(--green);
    }
  }

  &__nav {

    @media (min-width: theme('screens.md')) {
      width: 300px;
    }

    a {

      @media (min-width: theme('screens.md')) {
        width: 100px;
      }
    }
  }

  .nuxt-icon {
    font-size: 20px;
    margin-top: -5px;
    @apply inline-block;

    svg {}
  }

  .nuxt-icon:hover {
    svg path {
      fill: rgb(255, 0, 92) !important;
    }
  }
}

h5.web-designer {
  margin-bottom: -2px;

  a {
    font-size: 9px;
    display: inline-block;

    svg {
      width: 35px;
      height: auto;
      display: inline;
     fill:var(--grey);
      stroke: none;
      margin-top: -11px;
      margin-left: 3px;

      path {
        transition: all 0.3s linear;
      }

      path:nth-of-type(1) {
        transition-delay: 0.1s;
      }

      path:nth-of-type(2) {
        transition-delay: 0.2s;
      }

      path:nth-of-type(3) {
        transition-delay: 0.3s;
      }
    }
  }

  a:hover {
    svg path {
      fill: rgb(255, 0, 92);
    }
  }
}

h5.copyright {
  font-size: 9px;
  letter-spacing: 0.2em;
}

.page-contact {
  .footer {
    opacity: 0;
  }
}</style>
