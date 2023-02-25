<template lang="pug">
div.container
  section(id="section1")
      Mynav
      .head 
        div.d-flex
          h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement}" :key="index" v-for="(letter , index) in welcoming.split('')" style="font-family: 'Rampart One', cursive;")  {{letter !==" "  ? letter :'&nbsp '}} 

        div.d-flex

          h2( @mouseover="hovereffect2(index)" @mouseleave="hovering2=false" :class="{hover : hovering2 && index===hoverElement}" :key="index" v-for="(letter , index) in welcoming1.split('')") {{letter !==" "  ? letter :'&nbsp '}}
          .chat Hover on me !!
        NuxtLink(href="#section2")
          div(class="button" id="button-7")
            div(id="dub-arrow"): img(src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="") 
            span Explore my Portofolio
  section#section2
    .head
        div.d-flex
          h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement}" :key="index" v-for="(letter , index) in welcoming.split('')" style="font-family: 'Rampart One', cursive;")  {{letter !==" "  ? letter :'&nbsp '}} 

        div.d-flex

          h2( @mouseover="hovereffect2(index)" @mouseleave="hovering2=false" :class="{hover : hovering2 && index===hoverElement}" :key="index" v-for="(letter , index) in welcoming1.split('')") {{letter !==" "  ? letter :'&nbsp '}}
        .chat Hover on me !!    
  section(id="section3")
    .head
        div.d-flex
          h2( @mouseover="hovereffect(index)" @mouseleave="hovering=false" :class="{hover : hovering && index===hoverElement}" :key="index" v-for="(letter , index) in welcoming.split('')" style="font-family: 'Rampart One', cursive;")  {{letter !==" "  ? letter :'&nbsp '}} 

        div.d-flex

          h2( @mouseover="hovereffect2(index)" @mouseleave="hovering2=false" :class="{hover : hovering2 && index===hoverElement}" :key="index" v-for="(letter , index) in welcoming1.split('')") {{letter !==" "  ? letter :'&nbsp '}}
        .chat Hover on me !!    
</template>

<script setup>
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
@keyframes ani {
  0% {
    transform: scale(1.2, 0.5);
  }
  16% {
    transform: scale(1.2, 0.5);
  }
  25% {
    transform: scale(1.2, 0.5);
  }
  32% {
    transform: scale(0.8, 1.1);
  }
  48% {
    transform: scale(0.95, 1);
  }
  64% {
    transform: scale(0.8, 1.2);
  }
  80% {
    transform: scale(1.15, 1);
  }
  87% {
    transform: scale(1.15, 1);
  }
  90% {
    /* This will add the shaking effect one time almost at the end   */
    transform: scale(0.8, 1);
  }
  95% {
    transform: scale(1.05, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes ani2 {
  0% {
    transform: scale(1.2, 0.5);
  }
  16% {
    transform: scale(1.2, 0.5);
    color: #99edc3;
  }
  25% {
    transform: scale(1.2, 0.5);
  }
  32% {
    transform: scale(0.8, 1.1);
    color: #99edc3;
  }
  48% {
    transform: scale(0.95, 1);
  }
  64% {
    transform: scale(0.8, 1.2);
    color: #99edc3;
  }
  80% {
    transform: scale(1.15, 1);
  }
  87% {
    transform: scale(1.15, 1);
    color: #99edc3;
  }
  90% {
    /* This will add the shaking effect one time almost at the end   */
    transform: scale(0.8, 1);
  }
  95% {
    transform: scale(1.05, 1);
    color: #99edc3;
  }
  100% {
    transform: scale(1, 1);
  }
}

h2 {
  letter-spacing: 0.3rem;
  font-weight: 800;
  font-size: 50px;
  animation: ani2 0.8s ease-in-out 1;
}
h2.hover {
  color: #99edc3;

  animation: ani 0.8s ease-in-out infinite;
  transform: scale(1.5, 1.8);
}
section {
  height: 100vh;
  scroll-snap-align: start;
}
.head {
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .chat {
    position: absolute;
    top: 83px;
    background-color: #99edc3;
    color: black;
    border-radius: 8px;
    right: 350px;
    padding: 0.5rem;
    font-weight: 800;
    &::after {
      content: "";
      top: 40px;
      left: 16px;
      border: 15px solid transparent;
      border-top: 0;
      border-top: 15px solid #99edc3;
      position: absolute;
    }
  }
}
</style>
