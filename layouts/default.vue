<template lang="pug">
.wrapper 
  
  #stars 
  #stars2
  #stars3
  #starss 
  #starss2
  #starss3
  .cursor
   .cursor__ball.cursor__ball--big
     svg(height='30' width='30')
       circle(cx='15' cy='15' r='12' stroke-width='0' )
   .cursor__ball.cursor__ball--small
     svg(height='10' width='10' color="red")
       circle(cx='5' cy='5' r='4' stroke-width='0')
  .container
      .main 
          slot 
</template>

<script setup>
import TweenMax from "gsap";
import gsap from "gsap";

if (process.client) {
  const $hoverables = document.querySelectorAll(".hoverable");

  gsap.to(".myicon", {
    keyframes: {
      "50%": { y: "-=15" },
      "100%": { y: "+=15", delay: 0.1 },
    },
    duration: 2,

    repeat: -1,
  });
  //move down right

  // Listeners
  document.body.addEventListener("mousemove", onMouseMove);
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener("mouseenter", onMouseHover);
    $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    TweenMax.to(".cursor__ball--big", 0.4, {
      left: e.pageX - 15,
      top: e.pageY - 15,
    });
    TweenMax.to(".cursor__ball--small", 0.1, {
      left: e.pageX - 5,
      top: e.pageY - 7,
    });
  }

  // Hover an element
  function onMouseHover() {
    TweenMax.to(".cursor__ball--big", 0.3, {
      scale: 4,
    });
  }
  function onMouseHoverOut() {
    TweenMax.to(".cursor__ball--big", 0.3, {
      scale: 1,
    });
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  overflow: hidden;
}

.cursor {
  pointer-events: none;

  &__ball {
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    z-index: 10000;
    &svg {
      position: fixed;
    }
  }
}

.dark {
  border-radius: 50%;
  padding: 0.5rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: #cccccc63;
  }
  .darklogo {
    cursor: pointer;
    font-size: 25px;
  }
}

.logo {
  img {
    width: 130px;
  }
}
</style>
