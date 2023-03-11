<template lang="pug">
div.container
  section(id="section1")
      Mynav
      .head 
        div.d-flex
          h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable letters fontshape heading" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 

        div.d-flex

          p( @mouseover="hovereffect2(index)" @mouseleave="hovering2=false" :class="{hover : hovering2 && index===hoverElement}" class="hoverable letters subtitle" :key="index" v-for="(letter , index) in welcoming1.split('')") {{letter !==" "  ? letter :'&nbsp '}}
          .chat Hover on me !!
        Mybutton(link="#skills" content="Explore my Portofolio")  
 
  section#skills
      skills   
  section#projects
      projects       
  
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
if (process.client) {
  gsap.from("#skills", {
    autoAlpha: 0,
    duration: 1.5,
    delay: 0.2,
    scrollTrigger: {
      trigger: "#skills",
      toggleActions: "restart reset restart reset ",

      markers: false
    }
  });
  gsap.from("#section1", {
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#section1",
      toggleActions: "restart reset restart reset "
    }
  });
  gsap.from("#projects", {
    autoAlpha: 0,
    duration: 1.5,
    delay: 0.2,
    scrollTrigger: {
      trigger: "#projects",
      toggleActions: "restart reset restart reset "
    }
  });

  gsap.from(".letters", {
    autoAlpha: 0,
    duration: 1,
    y: -100,
    ease: "bounce.out",
    stagger: {
      each: 0.04
    },
    scrollTrigger: {
      trigger: ".letters"
    }
  });
}

const hovering = ref(false);
const hovering2 = ref(false);
const hoverElement = ref(null);

const welcoming = "Hi I'm Menna ! ";
const welcoming1 = "I'm a front end web developer :) ";

function hovereffect(index) {
  hoverElement.value = index;
  hovering.value = true;
}
function hovereffect2(index) {
  hoverElement.value = index;
  hovering2.value = true;
}
</script>

<style scoped lang="scss">
h2 {
  letter-spacing: 0.5rem;
  font-weight: 800;
}
h2.hover {
  color: #99edc3;
  animation: ani 0.8s ease-in-out infinite;
  // transform: scale(1.5, 1.8);
}
p {
  letter-spacing: 0.3rem;
  color: #d1d1d1;
  font-weight: 300;
}
p.hover {
  color: #99edc3;
  animation: ani 0.8s ease-in-out infinite;
  // transform: scale(1.5, 1.8);
}
section {
  min-height: 100vh;
  // scroll-snap-align: start;
  visibility: hidden;
  padding: 2rem 0;
}
.head {
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transform: translate(0, 100%);
  .chat {
    position: absolute;
    top: -23%;
    background-color: #99edc3;
    color: black;
    border-radius: 8px;
    right: 50%;
    padding: 0.5rem;
    font-weight: 500;
    &::after {
      content: "";
      top: 38px;
      left: 16px;
      border: 15px solid transparent;
      border-top: 0;
      border-top: 15px solid #99edc3;
      position: absolute;
    }
  }
}
</style>
