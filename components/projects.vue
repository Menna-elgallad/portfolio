<template lang="pug">
.container 
    .myheading: .mytitle2
            .d-flex
                h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable heading2 lettersTitle2 fontshape" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
            p(class="subheading "  ) A Selection Of Stuff I've Built
    .projects.mt-5.row.gx-2.gy-2
      
        .project.col-lg-4
          div 
            img(src="/_nuxt/assets/images/cart.png" )
            .content HTML CSS 
          div.mt-2
             img(src="/_nuxt/assets/images/land2.png" )
             .content HTML CSS 
        .project.col-lg-8: div.icondiv(style="background-color:beige")
             img.logo(src="/_nuxt/assets/images/humm.svg")
             .content HTML CSS 
        .project.col-lg-6: div.icondiv 
              img.logo(src="/_nuxt/assets/images/tygo.svg") 
              .content HTML CSS 

        .project.col-lg-6: div
               img(src="/_nuxt/assets/images/kasper.png"  )
               .content HTML CSS 
        
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

  overflow: hidden;

  z-index: 1000;
  position: relative;
  transition: all 0.6s ease;
  div {
    border: 5px solid white;
    position: relative;
    .content {
      width: 100%;
      background-color: white;
      position: absolute;
      bottom: 0;
      color: black;
      border-radius: 0;
      padding: 1rem;
    }
    &:hover {
      button {
        display: block;
        width: 100px;
        height: 100px;
      }
      img {
        transform: scale(1.2);
        opacity: 50%;
      }
    }
    &.icondiv {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: white;
    }
    overflow: hidden;
    border-radius: 1.2rem;
    img {
      width: 100%;
      transition: all 0.5s ease;
      &.logo {
        width: 50% !important;
      }

      button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;
        padding: 1.5rem;

        border-radius: 50%;

        background-color: rgb(153 237 195);
        // font-weight: 600;
        color: white;
        display: none;
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
