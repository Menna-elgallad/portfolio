<template lang="pug">
.flip-card
  .flip-card-inner
    .flip-card-front(:style="{  'background-image': 'url(' + srcsite + ')' }")
      .img
         img(:src="srclogo")
         h3( class="fontshape mybadge") Humm cloned website 
    .flip-card-back
        .description 
          p project description project description project description project description project description project description 
        .links
          a(:href="linklive") Live demo
          a(:href="linkcode")  github
  
</template>

<script setup>
const props = defineProps({
  srclogo: String,
  srcsite: String,
  linklive: String,
  linkcode: String,
});
</script>

<style lang="scss" scoped>
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

.flip-card:hover .flip-card-inner {
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
  .img {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);

    img {
      width: 50%;
      height: 50%;
      object-fit: contain;
      object-position: center;
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
.mybadge {
  background-color: rgb(204, 204, 204);
  padding: 1rem;
}
.flip-card-back {
  transform: rotateY(180deg);
  div {
    width: 100%;
  }
  .links {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
a {
  border: 1px solid $main-color;
  text-decoration: none;
  padding: 0.5rem 1rem;
  width: 30%;
  transition: all 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 0 8px 2px #cccccc3a;
    transform: scale(1.05);
  }
}
</style>
