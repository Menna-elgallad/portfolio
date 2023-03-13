<template lang="pug">
.container(ref="container")
    button.btn.btn-primary(type='submit' @click="addto()") Add to parent
    .parent(ref="parent")
    .child(ref="child")
    
</template>

<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin, Flip);
const parent = ref(null);
const child = ref(null);
const container = ref(null);
function addto() {
  const state = Flip.getState(child.value);
  console.log(child.value.parentElement.className);
  if (child.value.parentElement.className ==="container") {
    parent.value.appendChild(child.value);
    Flip.from(state, { duration: 1, scale: true });
  } else {
    container.value.appendChild(child.value);
    Flip.from(state, { duration: 1, scale: true });
  }
  console.log(child);
}
</script>

<style lang="scss" scoped>
.parent {
  background-color: grey;
  width: 500px;
  height: 500px;
  .child {
    width: 100% !important;
    height: 100% !important;
  }
}
.child {
  background-color: rgb(180, 79, 79);
  width: 200px;
  height: 200px;
}
</style>
