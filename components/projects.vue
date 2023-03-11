<template lang="pug">
.container 
    .myheading: .mytitle2
            .d-flex
                h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable heading2 lettersTitle2 fontshape" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
            p(class="subheading "  ) A Selection Of Stuff I've Built
    .projects.mt-5.row.gx-0
      
        flipcard(srclogo="/_nuxt/assets/images/humm.svg" , linklive="https://humm-cloned-site-production.up.railway.app/" srcsite="/_nuxt/assets/images/humm.png" linkcode="https://github.com/Menna-elgallad/humm-cloned-site-" title="Humm clones website" description="Nuxt3 , pug , Graphql-client , Bootstrap , Typescript" :index="slideI === 0" )
        flipcard(srclogo="/_nuxt/assets/images/tygo.svg" , linklive="https://menna-elgallad.github.io/Tygoapp/" srcsite="/_nuxt/assets/images/tygo.png" linkcode="https://github.com/Menna-elgallad/Tygoapp" title="Tygo app" description="Html , Sass , Bootstrap , vanilla jasvascript " :index="slideI === 1" )
        flipcard(srclogo="/_nuxt/assets/images/landing2.svg" , linklive="https://menna-elgallad.github.io/kasper-landingpage/" srcsite="/_nuxt/assets/images/kasper.png" linkcode="https://github.com/Menna-elgallad/kasper-landingpage" title="kasper responsive landing page" description="Html , Css ,Bootstrap" :index="slideI === 2"  )
        flipcard(srclogo="/_nuxt/assets/images/cart.svg" , linklive="https://menna-elgallad.github.io/cart-system/" srcsite="/_nuxt/assets/images/cart.png" linkcode="https://github.com/Menna-elgallad/cart-system" title ="cart system" description="Html , Css ,Typescript" :index="slideI === 3" )
        flipcard(srclogo="/_nuxt/assets/images/landing.svg" , linklive="https://menna-elgallad.github.io/landing-page/" srcsite="/_nuxt/assets/images/land2.png" linkcode="https://github.com/Menna-elgallad/landing-page" title="Responsive landing page" description="Html , Css ,Bootstrap" :index="slideI === 4"  )
        
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
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
