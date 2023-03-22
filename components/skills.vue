<template lang="pug">
.container 
    .myheading: .mytitle
          .d-flex
              h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable lettersTitle fontshape heading2" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
          p(class="subheading ") ِAnd The skills, tools and technologies I use to bring your products to life 
    .aboutme.p-4.mt-3
      p.subheading Hi , My name is Menna Elgalld و iam a #[span.maincolor CS student and front end web developers ], My Passion is about crafting beautiful and intuitive user experiences that delight users and exceed expectations.#[br] I pay meticulous attention to detail and take pride in producing #[span.maincolor clean, efficient, and maintainable code.] #[br]  Also enjoy collaborating with designers, UX specialists, and other stakeholders to bring their visions to life. I am always learning and exploring new tools, frameworks, and techniques to stay ahead of the curve and deliver exceptional results.#[br]  #[span.maincolor My ultimate goal ]is to create websites that not only look great, but also perform flawlessly across all devices and platforms.
    .row.mt-3
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-html" descriprion="HTML5"):  div(class="bar learning el100" data-skill="100%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-css" descriprion="CSS3"): div(class="bar learning el100" data-skill="100%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-sass" descriprion="SASS"): div(class="bar learning el90" data-skill="90%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-vue" descriprion="VUE3"): div(class="bar learning el90" data-skill="90%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-nuxt" descriprion="NUXT3"): div(class="bar learning el90" data-skill="90%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-pug" descriprion="PUG"): div(class="bar learning el100" data-skill="100%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-js-official" descriprion="JAVASCRIPT"): div(class="bar learning el90" data-skill="90%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-typescript-official" descriprion="TYPESCRIPT"): div(class="bar learning el80" data-skill="80%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-git" descriprion="Git"): div(class="bar learning el80" data-skill="80%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="logos:bootstrap" descriprion="Bootstrap"): div(class="bar learning el80" data-skill="80%")
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="vscode-icons:file-type-graphql-config" descriprion="Graphql"): div(class="bar learning el90" data-skill="90%")    
        .col-xl-2.col-md-4.col-sm-6.col-lg-3
            card(logo="logos:adobe-xd" descriprion="XD"): div(class="bar learning el80" data-skill="80%")
  
  

</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

  var el80 = CSSRulePlugin.getRule(".el80:before");
  var el90 = CSSRulePlugin.getRule(".el90:before");
  var el100 = CSSRulePlugin.getRule(".el100:before");
  var titleafter = CSSRulePlugin.getRule(".mytitle:after");
  var titlebefore = CSSRulePlugin.getRule(".mytitle:before");
  var maincolor = CSSRulePlugin.getRule(".maincolor:before");

  gsap.from(".lettersTitle", {
    autoAlpha: 0,
    duration: 1,
    y: -100,
    ease: "bounce.out",
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: ".lettersTitle",
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
      trigger: ".mytitle",
    },
  });
  gsap.to(titleafter, {
    width: "30%",
    // autoAlpha: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".mytitle",
    },
  });
  gsap.from(".subtitle", {
    autoAlpha: 0,
    // autoAlpha: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".subtitle",
    },
  });
  gsap.to(maincolor, {
    width: "calc(100% + 4px)",
    // autoAlpha: 0,

    duration: 1,
    stagger: {
      each: 0.33,
    },

    scrollTrigger: {
      trigger: ".maincolor",
    },
  });

  gsap.from(`.col-lg-3`, {
    autoAlpha: 0,
    duration: 1,
    scale: 0.5,
    delay: 0.5,
    stagger: {
      each: 0.05,
    },

    scrollTrigger: {
      trigger: ".col-lg-3",
      // toggleActions: "restart reset restart complete",
      markers: false,
      // end: "700px top",
    },
  });

  gsap.to(el80, {
    // autoAlpha: 0,
    duration: 1,
    delay: 1,
    width: "80%",
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: ".col-lg-3",
    },
  });
  gsap.to(el100, {
    // autoAlpha: 0,
    duration: 1,
    width: "100%",
    delay: 1,
    stagger: {
      each: 0.1,
    },
    scrollTrigger: {
      trigger: ".col-lg-3",
    },
  });
  gsap.to(el90, {
    // autoAlpha: 0,
    duration: 1,
    delay: 1,
    stagger: {
      each: 0.1,
    },
    width: "90%",
    scrollTrigger: {
      trigger: ".col-lg-3",
    },
  });
}
const hovering = ref(false);
const hovering2 = ref(false);
const hoverElement = ref(null);

const welcoming = "Who am i ?";

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
.maincolor {
  position: relative;
  z-index: 2;

  font-weight: 500;
  &:before {
    content: "";
    background-color: rgba(132, 182, 157, 0.836);
    position: absolute;

    height: 60%;
    left: -2px;
    bottom: 0;
    z-index: -1;
    transform: rotate(-2deg);
  }
}

.el80:before {
  content: attr(data-skill);
  background-color: #99edc3;
  display: inline-block;
  padding: 5px 0 5px 10px;
  border-radius: inherit;
}
.el90:before {
  content: attr(data-skill);
  background-color: #99edc3;
  display: inline-block;
  padding: 5px 0 5px 10px;
  border-radius: inherit;
}
.el100:before {
  content: attr(data-skill);
  background-color: #99edc3;
  display: inline-block;
  padding: 5px 0 5px 10px;
  border-radius: inherit;
}
// .bar.learning::before {
//   width: calc(20% - 10px);
// }
.mytitle {
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
.aboutme {
  line-height: 2rem;
}
</style>
