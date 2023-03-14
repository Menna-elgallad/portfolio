<template lang="pug">
.container
  #wrapper
    .myheading: .mytitle4
                .d-flex
                    h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable heading2 lettersTitle4 fontshape" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
                p(class="subheading "  ) Hey Tell me anything u want 

    section#content
      .form-area
        form(role='form')
          
          .form-group
            input#name(type='name'   v-model="name")
            label(for='name') Your Name
          .form-group
            input#email(type='email' v-model="mail")
            label(for='email') Email Address
          .form-group
            input#mobile(type='tel'   v-model="phonenum")
            label(for='mobile') Your Phone Number
          .form-group.message
            textarea#message( spellcheck='true' rows='10' cols='50' tabindex='4'  v-model="message")
            label(for='message') Subject
          .d-flex.justify-content-center
                mybutton(content="Send" link="#" @click="sendmail()") 
    
</template>
<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import emailjs from "emailjs-com";

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
emailjs.init("-0_peAvjq4WrXgwPs");
if (process.client) {
  var titleafter2 = CSSRulePlugin.getRule(".mytitle4:after");
  var titlebefore2 = CSSRulePlugin.getRule(".mytitle4:before");

  gsap.from(".lettersTitle4", {
    autoAlpha: 0,
    duration: 1,
    y: -100,
    ease: "bounce.out",
    stagger: {
      each: 0.04,
    },
    scrollTrigger: {
      trigger: ".lettersTitle4",
      markers: false,
      start: "100px bottom",
    },
  });
  gsap.to(titlebefore2, {
    opacity: 1,
    delay: 0.5,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".mytitle4",
    },
  });

  gsap.to(titleafter2, {
    width: "30%",

    duration: 0.5,
    scrollTrigger: {
      trigger: ".mytitle4",
    },
  });
}
const hovering = ref(false);
const hovering2 = ref(false);
const hoverElement = ref(null);

const welcoming = "Contact Me !  ";

function hovereffect(index) {
  hoverElement.value = index;
  hovering.value = true;
}
function hovereffect2(index) {
  hoverElement.value = index;
  hovering2.value = true;
}
const mail = ref("");
const name = ref("");
const message = ref("");
const phonenum = ref("");

async function sendmail() {
  const templateParams = {
    to_email: "mennaelgallad2001@gmai.com",
    from_email: mail.value,
    from_name: name.value,
    message: "phonen number : " + phonenum.value + "message :" + message.value,
  };

  const response = await emailjs.send(
    "service_7d6bxto",
    "template_oh57hrm",
    templateParams
  );
  return response;
}
</script>
<style lang="scss">
.lettersTitle4 {
  visibility: hidden;
}
.mytitle4 {
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
form {
  margin: 0 auto;
}

form > div {
  clear: both;
  margin: 0 0 1em;
  overflow: hidden;
  padding: 1px;
}

area,
input,
textarea,
input[type="text"],
input[type="email"],
input[type="url"],
input[type="password"],
input[type="tel"],
input[type="name"] {
  box-sizing: border-box;
  background-color: transparent;
  font-size: 1em;
  margin: 0 0 1.5em;
  outline: none;
  padding: 1em;
  position: relative;
  transition: all 0.15s ease;
  width: 100%;
}

area:hover,
input:hover,
textarea:hover,
input[type="text"]:hover,
input[type="email"]:hover,
input[type="url"],
input[type="password"],
input[type="tel"]:hover,
input[type="name"]:hover,
area:active,
input:active,
textarea:active,
input[type="text"]:active,
input[type="email"]:active,
input[type="url"],
input[type="password"],
input[type="tel"]:active,
input[type="name"]:active,
area:focus,
input:focus,
textarea:focus,
input[type="text"]:focus,
input[type="email"]:focus,
input[type="url"],
input[type="password"],
input[type="tel"]:focus,
input[type="name"]:focus,
textarea:hover,
textarea:active,
textarea:focus {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 2px 3px rgba(0, 0, 0, 0.05);
  -webkit-transition: all 0.3s ease;
  background-color: transparent;

  outline: none;
  transition: all 0.3s ease;
}

.form-area {
  margin: 2em auto;
  min-width: 325px;
  width: 50%;
}

.form-group {
  margin: 0 auto;
  position: relative;
  padding-top: 10px;
}

.form-group label {
  box-sizing: border-box;

  font-size: 0.75em;
  left: 20px;
  top: 20px;
  padding: 2px;
  padding-bottom: 0;
  pointer-events: none;
  position: absolute;
  text-transform: uppercase;

  transition: transform 100ms ease;
  z-index: 200;
}

input,
textarea {
  font-size: 1em;
  outline: none;
  padding: 10px;
  position: relative;
  background-color: transparent !important;
  border: 1px solid #cccccc41;
  color: white;
}

input:invalid + label,
textarea:invalid + label {
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

input:focus + label,
textarea:focus + label {
  -moz-transform: translateY(-22px);
  -ms-transform: translateY(-22px);
  -o-transform: translateY(-22px);
  -webkit-transform: translateY(-22px);

  transform: translateY(-22px);
}
</style>
