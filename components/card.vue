<template lang="pug">
.mycontainer
  .box
    span.title
        Icon(:name="logo" style="font-size:60px ; display: block; margin: auto;" )
        div(style="margin:auto")
            strong {{descriprion}}
        div    
            //- p.fontshape.ms-2.mb-2(style="display:block") Skill level 
            slot
</template>

<script setup>
const props = defineProps({
  logo: String,
  descriprion: String,
});
</script>

<style scoped>
.mycontainer {
  position: relative;
  font-family: sans-serif;
}

/* .box::before,
.box::after {
  content: "";
  background-color: #fab5704c;
  position: absolute;
  filter: blur(20px);
}

.box::before {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  top: 30%;
  right: 7%;
}

.box::after {
  content: "";
  position: absolute;
  height: 3rem;
  top: 8%;
  right: 5%;
  border: 1px solid;
} */

.mycontainer .box {
  width: 11.875em;
  padding: 1rem;

  border-radius: 0.7rem;
  transition: all ease 0.3s;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid transparent;
}

div strong {
  display: block;
  margin: 0.5rem 0;
  text-align: center;
}

.mycontainer .box div p {
  margin: 0;
  font-size: 0.9em;
  font-weight: 300;
  letter-spacing: 0.1em;
}

.mycontainer .box div span {
  font-size: 0.7rem;
  font-weight: 300;
}

.mycontainer .box div span:nth-child(3) {
  font-weight: 500;
  margin-right: 0.2rem;
}

.mycontainer .box:hover {
  box-shadow: 13px 12px 0px -7px rgb(153 237 195 / 49%);
  transform: scale(1.03);
  /* border-color: rgba(255, 255, 255, 0.454); */
}
</style>
