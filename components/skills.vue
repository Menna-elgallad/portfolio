<template lang="pug">
.container 
    .myheading: .mytitle
          .d-flex
              h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable lettersTitle fontshape" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
          p(class="subheading") What i do well ? 
    .row.gy-3.mt-5
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-html" descriprion="HTML5"):  div(class="bar learning el100" data-skill="100%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-css" descriprion="CSS3"): div(class="bar learning el100" data-skill="100%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-sass" descriprion="SASS"): div(class="bar learning el90" data-skill="90%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-vue" descriprion="VUE3"): div(class="bar learning el90" data-skill="90%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-nuxt" descriprion="NUXT3"): div(class="bar learning el90" data-skill="90%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-pug" descriprion="PUG"): div(class="bar learning el100" data-skill="100%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-js-official" descriprion="JAVASCRIPT"): div(class="bar learning el90" data-skill="90%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-typescript-official" descriprion="TYPESCRIPT"): div(class="bar learning el80" data-skill="80%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-git" descriprion="Git"): div(class="bar learning el80" data-skill="80%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="logos:bootstrap" descriprion="Bootstrap"): div(class="bar learning el80" data-skill="80%")
        .col-lg-3.col-md-4.col-sm-6
            card(logo="vscode-icons:file-type-graphql-config" descriprion="Graphql"): div(class="bar learning el90" data-skill="90%")    
        .col-lg-3.col-md-4.col-sm-6
            card(logo="logos:adobe-xd" descriprion="XD"): div(class="bar learning el80" data-skill="80%")
  
  

</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
if (process.client) {
  var el80 = CSSRulePlugin.getRule(".el80:before");
  var el90 = CSSRulePlugin.getRule(".el90:before");
  var el100 = CSSRulePlugin.getRule(".el100:before");
  var titleafter = CSSRulePlugin.getRule(".mytitle:after");
  gsap.from(".lettersTitle", {
    autoAlpha: 0,
    duration: 1,
    y: -100,
    ease: "bounce.out",
    stagger: {
      each: 0.04,
    },
    scrollTrigger: {
      trigger: ".lettersTitle",
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
  gsap.from(`.col-lg-3`, {
    autoAlpha: 0,
    duration: 1,
    scale: 0.5,
    delay: 1.2,
    stagger: {
      each: 0.1,
    },

    scrollTrigger: {
      trigger: ".col-lg-3",
      // toggleActions: "restart reset restart complete",
      //   markers: true,
      // end: "700px top",
    },
  });

  gsap.to(el80, {
    autoAlpha: 0,
    duration: 1,
    delay: 3,
    width: "80%",
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: ".el80",
    },
  });
  gsap.to(el100, {
    autoAlpha: 0,
    duration: 1,
    width: "100%",
    delay: 3,
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: ".el100",
    },
  });
  gsap.to(el90, {
    autoAlpha: 0,
    duration: 1,
    delay: 3,
    stagger: {
      each: 0.1,
    },
    width: "90%",
    scrollTrigger: {
      trigger: ".el90",
    },
  });
}
const hovering = ref(false);
const hovering2 = ref(false);
const hoverElement = ref(null);

const welcoming = "My Skills ";

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
.lettersTitle {
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

.el80::before {
  content: attr(data-skill);
  background-color: #99edc3;
  display: inline-block;
  padding: 5px 0 5px 10px;
  border-radius: inherit;
}
.el90::before {
  content: attr(data-skill);
  background-color: #99edc3;
  display: inline-block;
  padding: 5px 0 5px 10px;
  border-radius: inherit;
}
.el100::before {
  content: attr(data-skill);
  background-color: #99edc3;
  display: inline-block;
  padding: 5px 0 5px 10px;
  border-radius: inherit;
}
// .bar.learning::before {
//   width: calc(20% - 10px);
// }
</style>
