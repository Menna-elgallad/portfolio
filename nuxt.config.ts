// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          link: [{ rel: 'stylesheet',  type:'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700'}]
        }
      } ,
    css:[ '@/assets/styles/main.scss' ,] ,
    modules: ['nuxt-icon'] ,

})
