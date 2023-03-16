// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          link: [{ rel: 'stylesheet',  type:'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700'}] ,
          script :[ {src:"https://cdn.lordicon.com/ritcuqlt.js"}] ,  
          
        }
        

      } ,
    css:[ '@/assets/styles/main.scss' ,] ,
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/assets/styles/globals.scss" as *;`,
          },
        },
      },
    },
    modules: ['nuxt-icon'] ,


})
