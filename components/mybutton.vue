<template lang="pug">
NuxtLink(:href="link")
    div(class="button" id="button-7")
        div(id="dub-arrow"): img(src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="") 
        span {{content}}
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    required: false,
  },
  content: String,
});
</script>

<style scoped lang="scss">
#button-7 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-7 a {
  position: relative;
  left: 0;
  transition: all 0.35s ease-Out;
  font-weight: 800;
}

#dub-arrow {
  width: 104%;
  height: 100%;
  background: $main-color;
  left: -243px;
  position: absolute;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.35s ease-Out;
  bottom: 0;
  z-index: 100;
}

#button-7 img {
  width: 20px;
  height: auto;
}

#button-7:hover #dub-arrow {
  left: 0;
}

#button-7:hover a {
  left: 150px;
}
</style>
