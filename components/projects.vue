<template lang="pug">
.container 
    .myheading: .mytitle
            .d-flex
                h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable lettersTitle2 fontshape" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
            p(class="subheading") Some of my solo projects  
    .projects.mt-5
      swiper(
        :modules="modules"
      :slides-per-view="1.5"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange")
        swiper-slide: flipcard(srclogo="/_nuxt/assets/images/humm.svg" , linklive="https://humm-cloned-site-production.up.railway.app/" srcsite="/_nuxt/assets/images/p1png.png" linkcode="https://github.com/Menna-elgallad/humm-cloned-site-")
        swiper-slide: flipcard(srclogo="/_nuxt/assets/images/tygo.svg" , linklive="https://menna-elgallad.github.io/Tygoapp/" srcsite="/_nuxt/assets/images/tygosite.png" linkcode="https://github.com/Menna-elgallad/Tygoapp")
        swiper-slide: flipcard(srclogo="/_nuxt/assets/images/landing.svg" , linklive="https://menna-elgallad.github.io/kasper-landingpage/" srcsite="/_nuxt/assets/images/kasper.png" linkcode="https://github.com/Menna-elgallad/kasper-landingpage")
        swiper-slide: flipcard(srclogo="/_nuxt/assets/images/cart.svg" , linklive="https://menna-elgallad.github.io/cart-system/" srcsite="/_nuxt/assets/images/cart.png" linkcode="https://github.com/Menna-elgallad/cart-system")
        swiper-slide: flipcard(srclogo="/_nuxt/assets/images/landing.svg" , linklive="https://menna-elgallad.github.io/landing-page/" srcsite="/_nuxt/assets/images/land2.png" linkcode="https://github.com/Menna-elgallad/landing-page")
        


      
      
    
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
const onSlideChange = () => {
  console.log("slide change");
};
if (process.client) {
  var titleafter = CSSRulePlugin.getRule(".mytitle:after");
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
      markers: true,
      start: "100px bottom",
    },
  });

  gsap.to(titleafter, {
    width: "30%",
    autoAlpha: 0,
    delay: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".mytitle",
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

<style>
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
</style>
