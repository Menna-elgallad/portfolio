<template lang="pug">
.container
  .myheading: .mytitle4
              .d-flex
                  h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement } " class="hoverable heading2 lettersTitle4 fontshape" :key="index" v-for="(letter , index) in welcoming.split('')" )  {{letter !==" "  ? letter :'&nbsp '}} 
              p(class="subheading "  ) Feel free to Contact me
  form.mt-5
    h3 Contact Form
    .did-floating-label-content.mt-3
      input.did-floating-input(type='text' placeholder=' ' v-model="name")
      label.did-floating-label Name
      p.errormas {{errorname ? "*" +" " +errorname : "" }}
    .did-floating-label-content
      input.did-floating-input(type='text' placeholder=' ' v-model="mail")
      label.did-floating-label Email
      p.errormas {{errormail ? "*"+" " +errormail : "" }}
    .did-floating-label-content
      input.did-floating-input(type='text' placeholder=' ' v-model="phonenum")
      label.did-floating-label Phone Number
    
    .did-floating-label-content
      textarea.did-floating-input( placeholder=' ' rows="10" v-model="message")
      label.did-floating-label Message  
      p.errormas {{errormessage ? "*"+" " + errormessage : ""}}
    mybutton(content="Send"  @click="sendmail()") 
    .popup_succied(ref="eleme")
        lord-icon( src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0000,secondary:#08a88a" style="width: 206px ; height: 140px" class="congrats"  )  
        .text-congrates.text-center
            h4 Thank you for contact me 
            p I hope we will get in touch as soon as possible

    
</template>
<script setup>
import emailjs from "emailjs-com";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

emailjs.init("-0_peAvjq4WrXgwPs");
// onMounted(() => {
//   gsap.set("popup_succied", { opacity: 1 });
// });

if (process.client) {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

  var titleafter2 = CSSRulePlugin.getRule(".mytitle4:after");
  var titlebefore2 = CSSRulePlugin.getRule(".mytitle4:before");

  gsap.from(".lettersTitle4", {
    autoAlpha: 0,
    duration: 0.8,
    y: -100,
    ease: "bounce.out",
    stagger: {
      each: 0.08,
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
const eleme = ref(null);

const hovering = ref(false);
const hovering2 = ref(false);
const hoverElement = ref(null);
const displayicon = ref(false);
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
const errormail = ref("");
const errorname = ref("");
const name = ref("");
const message = ref("");
const errormessage = ref("");
const phonenum = ref("");
const errorphone = ref("");

async function sendmail() {
  if (!mail.value || !message.value || !name.value) {
    if (!mail.value) {
      errormail.value = "Please enter your email";
    }
    if (!message.value) {
      errorname.value = "Please enter your name";
    }
    if (!name.value) {
      errormessage.value = "Please enter the message";
    }
    return;
  }
  eleme.value.style.opacity = 1;

  gsap.from(".popup_succied", {
    autoAlpha: 0,
    scale: 0.2,
    duration: 1,
  });
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
  console.log(response.text);
  if (response.text === "OK") {
    errormail.value = errormessage.value = errorname.value = "";
    mail.value = "";
    name.value = "";
    phonenum.value = "";
    message.value = "";
    gsap.to(".popup_succied", {
      opacity: 0,
      duration: 1,
      delay: 2,
    });
  }

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
  position: relative;
  width: 50%;
  margin: auto;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
}
.did-floating-label-content {
  position: relative;
  margin-bottom: 20px;
}
.did-floating-label {
  // color: #ccc;
  font-size: 13px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 11px;
  padding: 0 5px;

  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.did-floating-input,
.did-floating-select {
  font-size: 12px;
  display: block;
  width: 100%;
  padding: 0 2rem;

  border-radius: 4px;
  box-sizing: border-box;
  background-color: transparent;
  border-color: transparent;
  box-shadow: 0 0 5px -1px #7e7e7e2b;
  border: 0.5px solid #ccc3;
  outline: none;
  &:focus {
    outline: none;
    ~ .did-floating-label {
      top: -18px;
      font-size: 13px;
    }
  }
}

select.did-floating-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select.did-floating-select::-ms-expand {
  display: none;
}

.did-floating-input:not(:placeholder-shown) ~ .did-floating-label {
  top: -18px;
  font-size: 13px;
}
.did-floating-select:not([value=""]):valid ~ .did-floating-label {
  top: -18px;
  font-size: 13px;
}
.did-floating-select[value=""]:focus ~ .did-floating-label {
  top: 11px;
  font-size: 13px;
}

input {
  height: 55px;
}

.input-group-append {
  display: flex;
  align-items: center;
  /*   margin-left:-1px; */
}
.input-group-text {
  display: flex;
  align-items: center;
  font-weight: 400;
  height: 34px;
  color: #323840;
  padding: 0 5px 0 20px;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  border-radius: 4px 0 0 4px;
  border-right: none;
}
.popup_succied {
  visibility: hidden;
  position: absolute;
  top: 13%;
  right: 26%;
  background-color: rgba(158, 158, 158, 0.205);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.2rem;
  border-radius: 1.2rem;
}
.text-congrates {
  h4 {
    color: $main-color;
  }
}
.errormas {
  color: #e99999;
}
</style>
