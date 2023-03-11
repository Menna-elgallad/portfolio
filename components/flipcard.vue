<template lang="pug">

    .flip-card-back
        .description 
          h3 {{ title }}
          h2(class="tech") Technologies 
          p {{  description}}
        .links
          a(:href="linklive" target="_blank") Live demo
          a(:href="linkcode" target="_blank")  github
  
</template>

<script setup>
const props = defineProps({
  description: String,
  srcsite: String,
  linklive: String,
  linkcode: String,
  title: String,
  index: Boolean
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
  .links {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
// .description {
//   width: 60%;
//   margin: auto;
// }
a {
  border: 1px solid $main-color;
  text-decoration: none;
  padding: 0.5rem 1rem;
  width: 30%;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #c2c2c22a !important;

    transform: scale(1.05);
  }
}
</style>
