<template lang="pug">
.wrapper 
  #stars 
  #stars2
  #stars3
  #starss 
  #starss2
  #starss3
  .container
      
      .main 
          slot 
</template>

<script setup>
if (process.browser) {
  var pageHeight = window.innerHeight;
  var isAnimating = false;
  document.body.style.transform = "translate3d(0px,0px,0px)";

  document.addEventListener("scroll", function (e) {
    document.body.scrollTop = 0;
  });
  document.addEventListener("wheel", wheelListener);

  function wheelListener(e) {
    if (e.deltaY > 0) {
      scrollPage(-pageHeight);
    } else {
      scrollPage(+pageHeight);
    }
  }

  function scrollPage(scrollSize) {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    var yPos = getNewYPos(scrollSize);
    document.body.style.transform = "translate3d(0px," + yPos + ",0px)";
  }

  function getNewYPos(add) {
    var oldYPos = document.body.style.transform.split(",")[1];
    oldYPos = parseInt(oldYPos.replace(/px/, ""));
    var newYPos = oldYPos + add;
    if (newYPos > 0) {
      isAnimating = false;
    }
    return Math.min(0, newYPos) + "px";
  }

  document.body.addEventListener("transitionend", function () {
    setTimeout(function () {
      isAnimating = false;
    }, 500);
    document.addEventListener("wheel", wheelListener);
  });
}
</script>

<style lang="scss" scoped>
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
