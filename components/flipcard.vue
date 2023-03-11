<template lang="pug">
.flip-card(:class="{indexmatch : index }")
  .flip-card-inner
    .flip-card-front(:style="{  'background-image': 'url(' + srcsite + ')' }")

    .flip-card-back
        .description 
          h3 {{ title }}
          h2(class="tech") Technologies 
          p {{  description}}
        .links
          Mybutton(:link="linklive" content="Live")
          Mybutton(:link="linkcode" content="code")
          
  
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
.tech {
  color: $main-color;
}
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 50vh;
  perspective: 1000px;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.indexmatch:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid #c2c2c2;
  border-radius: 1rem;
  overflow: hidden;
  background-size: cover;
  background-position: top center;
  .img {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);

    img {
      width: 50%;
      height: 50%;
      object-fit: contain;
      object-position: center;
      position: absolute;
      bottom: 19%;
      right: 26%;
    }
  }
}
// .flip-card-front {
//   img {
//     object-fit: cover;
//     width: 100%;
//     height: 100%;
//   }
// }
.project_title {
  background-color: rgba(240, 240, 240, 0.699);
  box-shadow: 0 0 8px 2px #cccc;
  padding: 1rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-weight: 700;
}
.flip-card-back {
  transform: rotateY(180deg);
  background-color: rgba(240, 240, 240, 0.123);
  div {
    width: 100%;
  }
  .links {
    display: flex;
    justify-content: center;
    // gap: 10px;
  }
}
// .description {
//   width: 60%;
//   margin: auto;
// }
</style>
