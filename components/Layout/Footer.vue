<template>
  <div class="w-full max-w-7xl pb-24 footer">


    <div class="w-full flex items-end justify-center flex-row mt-8 social">
      <a href="https://www.facebook.com/frayednotLLC" target="_blank" class="">
        <IconsFacebook />
      </a>
      <a href="https://www.instagram.com/frayednotllc/" target="_blank" class="mx-5 ">
        <IconsInstagram class=""/>
      </a>

      <a href="https://www.linkedin.com/in/constantinossandoukas/" target="_blank" class="">
        <IconsLinkedin />
      </a>
    </div>


    <div class="flex w-full flex-col items-center justify-center mt-12 font-bold tracking-wide">
      <img src="/assets/images/logo.png" alt="frayednot Logo" class="logo"/> 
      <h5 class="mt-4 tracking-widest body-font copyright">
        &#169; {{ new Date().getFullYear() }} frayednot, llc
      </h5>
      <h5 class="mt-2 web-designer">
        <a href="https://huestudios.com" target="_blank" rel="noopener" class="columns shrink body-font">designed by
          <LayoutHue />
        </a>
      </h5>
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

  .logo {
    height: 65px;
      width: auto;
  }

  .social {
    a {
      background: rgba(204,204,204, 0.25);
      /* box-shadow: inset 0px 5px 5px 5px rgba(0,0,0,0.25); */
      @apply inline-block rounded-full p-3 shadow-inner overflow-hidden;
      svg {
        height: 20px;
        width: auto;
        fill: var(--grey);
        transition: all 0.3s linear;
       
        filter: drop-shadow(3px 3px 2px rgba(66, 66, 66, 0.25));
      }
    }
    a:hover {
      background: rgba(204,204,204, 0.25);
      /* @apply shadow-lg; */
      svg {
        transform: scale(1.2);
        filter: drop-shadow(4px 5px 2px rgba(66, 66, 66, 0.35));
      }
    }
    /* a:first-of-type {
      svg {
        height: 23px;
      }
    } */
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
      fill: var(--grey);
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
}
</style>
