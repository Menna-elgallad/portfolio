<template lang="pug">
.container 
    .myheading: .mytitle2
            .d-flex
                h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable heading2 lettersTitle2 fontshape" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
            p(class="subheading "  ) A Selection Of Stuff I've Built
    .projects.mt-5.row.gx-2.gy-2
      
        .project.col-lg-4
          div.project1
            img(src="/_nuxt/assets/images/cart.png" )
            .content.flex.justify-content-between
                .icons
                    icon(name="bxl:html5"  style="color:white" class="ms-2 fs-3")
                    icon(name="bxl:css3" style="color:white" class="ms-2 fs-3")
                    icon(name="bxl:typescript" style="color:white" class="ms-2 fs-3")
                .buttons.flex
                    button.mybuttonlink: a(href="https://menna-elgallad.github.io/cart-system/"  target="_blank") code   
                    button.mybuttonlink: a(href="https://github.com/Menna-elgallad/cart-system" target="_blank") Live
             
          div.mt-2.project1
                img(src="/_nuxt/assets/images/land2.png" )
                .content.flex.justify-content-between
                  .icons
                      icon(name="bxl:html5"  style="color:white" class="ms-2 fs-3")
                      icon(name="bxl:css3" style="color:white" class="ms-2 fs-3")
                      icon(name="bxl:bootstrap" style="color:white" class="ms-2 fs-3")
                  .buttons
                    button.mybuttonlink: a(href="https://github.com/Menna-elgallad/landing-page" target="_blank") code   
                    button.mybuttonlink: a(href="https://github.com/Menna-elgallad/landing-page/deployments/activity_log?environment=github-pages" target="blank") Live 

        .project.col-lg-8: div.icondiv.project2(style="background-color:#93afc9")
              img.logo(src="/_nuxt/assets/images/humm.svg")
              .content.flex.justify-content-between
                .icons
                    icon(name="tabler:brand-nuxt" style="color:white" class="ms-2 fs-3")
                    icon(name="bxl:bootstrap" style="color:white" class="ms-2 fs-3")
                    icon(name="bxl:typescript" style="color:white" class="ms-2 fs-3")
                    icon(name="bx:bxl-sass" style="color:white" class="ms-2 fs-3")
                .buttons
                    button.mybuttonlink: a(href="https://github.com/Menna-elgallad/humm-cloned" target="_blank") code   
                    button.mybuttonlink: a(href="https://humm-cloned-production.up.railway.app/" target="_blank") Live 

         
        .project.col-lg-6: div.icondiv.project1 
              img.logo(src="/_nuxt/assets/images/tygo.svg") 
   
              .content.flex.justify-content-between
                .icons
                      icon(name="bxl:html5"  style="color:white" class="ms-2 fs-3")
                      icon(name="bx:bxl-sass" style="color:white" class="ms-2 fs-3")
                      icon(name="bxl:bootstrap" style="color:white" class="ms-2 fs-3")
                      icon(name="bxl:javascript" style="color:white" class="ms-2 fs-3")
                .buttons
                    button.mybuttonlink: a(href="https://github.com/Menna-elgallad/Tygoapp" target="_blank") code   
                    button.mybuttonlink: a(href="https://menna-elgallad.github.io/Tygoapp/" target="_blank") Live 

        .project.col-lg-6: div.project2
              img(src="/_nuxt/assets/images/kasper.png"  )
   
              .content.flex.justify-content-between
                .icons
                  icon(name="bxl:html5"  style="color:white" class="ms-2 fs-3")
                  icon(name="bxl:css3" style="color:white" class="ms-2 fs-3")
                  icon(name="bxl:bootstrap" style="color:white" class="ms-2 fs-3")
                .buttons
                    button.mybuttonlink: a(href="https://github.com/Menna-elgallad/kasper-landingpage" target="_blank") code   
                    button.mybuttonlink: a(href="https://menna-elgallad.github.io/kasper-landingpage/" target="_blank") Live 

        
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
const modules = [Navigation, Pagination, Scrollbar, A11y];
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
const onSwiper = (swiper) => {
  console.log(swiper);
};
const slideI = ref(0);
const onSlideChange = (e) => {
  console.log("slide change");
  slideI.value = e.activeIndex;
};

if (process.client) {
  var titleafter2 = CSSRulePlugin.getRule(".mytitle2:after");
  var titlebefore2 = CSSRulePlugin.getRule(".mytitle2:before");

  gsap.from(".project1", {
    autoAlpha: 0,
    duration: 1, // Animation duration in seconds
    x: -100,
    y: 200,
    // Move the element from left (-100) to the original position (0)
    // autoAlpha: 0,
    stagger: {
      each: 0.5,
    },
    scrollTrigger: {
      trigger: ".project1",
    },
  });
  gsap.from(".project2", {
    autoAlpha: 0,
    duration: 1, // Animation duration in seconds
    x: 100,
    y: 200,
    // Move the element from left (-100) to the original position (0)
    // autoAlpha: 0,
    stagger: {
      each: 0.5,
    },
    scrollTrigger: {
      trigger: ".project2",
    },
  });
  gsap.from(".lettersTitle2", {
    autoAlpha: 0,
    duration: 1,
    y: -100,
    ease: "bounce.out",
    stagger: {
      each: 0.04,
    },
    scrollTrigger: {
      trigger: ".lettersTitle2",
      markers: false,
      start: "100px bottom",
    },
  });
  gsap.to(titlebefore2, {
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".mytitle2",
    },
  });

  gsap.to(titleafter2, {
    width: "30%",

    duration: 0.5,
    scrollTrigger: {
      trigger: ".mytitle2",
    },
  });
}
const hovering = ref(false);
const hovering2 = ref(false);
const hoverElement = ref(null);

const welcoming = "My Projects ";

function hovereffect(index) {
  hoverElement.value = index;
  hovering.value = true;
}
function hovereffect2(index) {
  hoverElement.value = index;
  hovering2.value = true;
}
</script>

<style lang="scss">
@import "../node_modules/vue3-carousel/dist/carousel.css";

.project {
  // width: fit-content;

  z-index: 1000;
  position: relative;
  transition: all 0.6s ease;
  div {
    position: relative;

    overflow: hidden;

    button.mybuttonlink {
      padding: 0.2rem 0.5rem;
      border: none;
      outline: none;
      border-radius: 0;
      background-color: transparent;
      color: white;
      position: relative;
      &:hover {
        &::after {
          width: 100%;
        }
      }
      &::after {
        content: "";
        width: 0%;
        height: 1px;
        background-color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all 0.7s ease;
      }
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      background-color: rgba(44, 44, 44, 0.425);
      position: absolute;
      bottom: 0;
      color: black;
      border-radius: 0;
      padding: 1rem;
      transform: translateY(150px);
      transition: all 1s ease;

      .labeltech {
        border-radius: 1.2rem;
        padding: 0.3rem 1rem;
        margin: 0.2rem 0.5rem;
        background-color: #ccc;
      }
    }
    &:hover {
      img {
        transform: scale(1.2);
        opacity: 50%;
      }

      .content {
        transform: translateY(0);
      }
    }
    &.icondiv {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: white;
      @media screen and (max-width: 991px) {
        height: 318px;
      }
      @media screen and (max-width: 767px) {
        height: 229px;
      }
    }

    img {
      width: 100%;
      transition: all 0.5s ease;
      &.logo {
        width: 50% !important;
      }
    }
  }
}

.lettersTitle2 {
  visibility: hidden;
}
h2 {
  letter-spacing: 0.3rem;
  font-weight: 800;
}

h2.hover {
  color: #99edc3;
  animation: ani 0.8s ease-in-out infinite;
}
.bar {
  background-color: #fff;
  padding: 2px;
  border-radius: 15px;
  margin-bottom: 5px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.mytitle2 {
  position: relative;
  width: fit-content;
  &:after {
    content: "";
    position: absolute;
    height: 5px;
    bottom: 4px;
    border-radius: 3rem;
    background-color: $main-color;
    left: 1px;
  }
  &:before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    bottom: 0;
    border-radius: 3rem;
    background-color: $main-color;
    left: 0;
    opacity: 0;
  }
}
</style>
