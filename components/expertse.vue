<template lang="pug">
.container 
    .myheading: .mytitle3
            .d-flex
                h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable lettersTitle3 fontshape heading2" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
            p(class="subheading ") My Expertise in many fields 
    .exper_content(style="margin-top:5rem")
        .row
            .col-lg-4.mycol
                .card_exp
                    .headd.d-flex(style="gap:7px")
                        icon(name="ri:vuejs-line" style="color:white ; font-size: 3.5rem" )
                        h3 
                            span.maincolor2 Front End
                            p(class="fs-4" ) Vue , Nuxt 
                    .content.mt-2
                        p  Passionate about Web Designing . Development experience in HTML, CSS, JS, Vue and NuxtJS frameworks , also great knowledge about animation libraries like GSAP. 
            .col-lg-4.mycol
                .card_exp
                    .headd.d-flex(style="gap:7px")
                        icon(name="ri:computer-line" style="color:white ; font-size: 3.5rem" )
                        h3 
                            span.maincolor2 Development
                            p(class="fs-4" ) Python , JS , TS 
                    .content.mt-2
                        p  Experienced in Problem Solving , and OOP programming : Python, JavaScript, TypeScript . A little Knowledge in some fields : Machine Learning , OCR and Image Detection  
            .col-lg-4.mycol
                .card_exp
                    .headd.d-flex(style="gap:7px")
                        icon(name="basil:adobe-experince-design-outline" style="color:white ; font-size: 3.5rem" )
                        h3 
                            span.maincolor2 Designing
                            p(class="fs-4" ) Adobe XD 
                    .content.mt-2
                        p Acceptable skills in Designing and being Creative with different styling aspects , using Adobe Software : Photoshop , Ilustrator , XD
    
    

</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

  var titleafter = CSSRulePlugin.getRule(".mytitle3:after");
  var titlebefore = CSSRulePlugin.getRule(".mytitle3:before");

  gsap.from(".lettersTitle3", {
    autoAlpha: 0,
    duration: 1,
    y: -100,
    ease: "bounce.out",
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: ".lettersTitle3",
      markers: false,
      start: "100px bottom",
    },
  });
  gsap.to(titlebefore, {
    // width: "30%",
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".mytitle3",
    },
  });
  gsap.to(titleafter, {
    width: "30%",
    // autoAlpha: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".mytitle3",
    },
  });
  gsap.from(".mycol", {
    autoAlpha: 0,
    scale: 0.5,
    delay: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".mycol",
    },
  });
}
const hovering = ref(false);
const hovering2 = ref(false);
const hoverElement = ref(null);

const welcoming = "MY Expertise";

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
// .col-lg-3 {
//   visibility: hidden;
// }

.lettersTitle3 {
  visibility: hidden;
}
h2 {
  letter-spacing: 0.3rem;
  font-weight: 800;
}

h2.hover {
  color: #99edc3;
  animation: ani 0.8s ease-in-out infinite;
  // transform: scale(1.5, 1.8);
}
.mytitle3 {
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
.mycol {
  // border: 1px solid white;
  padding: 2rem 3rem;
  .content {
    p {
      line-height: 2rem;
      font-weight: 600;
    }
  }
}
.maincolor2 {
  position: relative;
  z-index: 2;
  font-weight: 800;
  &:before {
    content: "";
    background-color: rgba(132, 182, 157, 0.836);
    position: absolute;

    height: 60%;
    left: -2px;
    bottom: 0;
    z-index: -1;
    transform: rotate(-2deg);
    width: calc(100% + 4px);
  }
}
</style>
