<template lang="pug">
.d-flex.justify-content-between.align-items-center.py-5
        //- .logo
        //-     img(src="../assets/images/logoD.png" v-if="isdark")
        //-     img(src="../assets/images/logoL.png" v-if="!isdark")

        .links
            nav
                ul
                    li.ms-5: NuxtLink(to="#") 
                        a(style="display:block") 001 
                        span &lt;Skills/&gt;
                    
                    li.ms-5: NuxtLink(to="#") 
                        a(style="display:block") 010 
                        span &lt;Experience/&gt;
                    li.ms-5: NuxtLink(to="#")
                        a(style="display:block") 011 
                        span &lt;Projects/&gt;
                    li.ms-5: NuxtLink(to="#") 
                        a(style="display:block") 100
                        span &lt;Contact/&gt;
        .dark 
            Icon(name="bi:sun-fill" @click="toggle(!isdark)" v-if="isdark" ).darklogo
            Icon(name="bi:moon-stars-fill"  @click="toggle(!isdark)"  v-else).darklogo
</template>

<script setup>
const isdark = ref(false);

function toggle(input) {
  console.log(input);
  isdark.value = input;
  document.body.className = input;
  localStorage.setItem("darkmode", input);
}
onBeforeMount(() => {
  const darktheme = JSON.parse(localStorage.getItem("darkmode"));
  console.log(darktheme);
  toggle(darktheme);
});
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
.wrapper {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
}
</style>
