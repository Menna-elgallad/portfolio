<template lang="pug">
.d-flex.justify-content-between.align-items-center
        //- .logo
        //-     img(src="../assets/images/logoD.png" v-if="isdark")
        //-     img(src="../assets/images/logoL.png" v-if="!isdark")
        .links
            nav.hideinmobile
                ul
                    li.ms-5: NuxtLink(to="#skills" class="hoverable") 
                        a(style="display:block"): span(style="font-size:smaller ; color:#99edc3") 001 
                        span &lt;Skills/&gt;
                    
                    li.ms-5: NuxtLink(to="#projects" class="hoverable") 
                        a(style="display:block"): span(style="font-size:smaller ; color:#99edc3") 010 
                        span &lt;Projects/&gt;
                    li.ms-5: NuxtLink(to="#MyExpertise" class="hoverable")
                        a(style="display:block"): span(style="font-size:smaller ; color:#99edc3") 011 
                        span &lt;Experience/&gt;
                    li.ms-5: NuxtLink(to="#" class="hoverable") 
                        a(style="display:block" ): span(style="font-size:smaller ; color:#99edc3") 100
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
  if (localStorage.getItem("darkmode")) {
    const darktheme = JSON.parse(localStorage.getItem("darkmode"));
    toggle(darktheme);
  } else {
    toggle("true");
  }
});
</script>

<style lang="scss" scoped>
.dark {
  border-radius: 50%;
  padding: 0.5rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: #cccccc63;
    transform: rotate(360deg);
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
.hideinmobile {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
