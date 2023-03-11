<template lang="pug">

.project.col-lg-4
    img(:src="srcsite")
    button view project
    //- .flip-card-back
    //-     .description 
    //-       h3 {{ title }}
    //-       h2(class="tech") Technologies 
    //-       p {{  description}}
    //-     .links
    //-       a(:href="linklive" target="_blank") Live demo
    //-       a(:href="linkcode" target="_blank")  github
  
</template>

<script setup>
const props = defineProps({
  description: String,
  srcsite: String,
  linklive: String,
  linkcode: String,
  title: String,
  index: Boolean,
});
console.log("active", props.index);
</script>

<style lang="scss" scoped>
.project {
  // width: fit-content;
  // height: fit-content;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  z-index: 1000;
  position: relative;
  transition: all 0.6s ease;

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
  img {
    width: 100%;
    transition: all 0.5s ease;
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
</style>
