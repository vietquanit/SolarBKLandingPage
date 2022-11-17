<template>
  <Toast />
  <router-view/>
</template>
<script>
export default {
  name: 'AppView',
  created(){
  },
  methods: {
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #0a5ea2;
}
.container{
  max-width: 90%;
  
}
.btn-primary{
  background: #0a5ea2 !important;
}
.bg-table{
  background-color: #f0f0f0 !important;
}
.color-primary{
  color: #0a5ea2 !important;
}
label{
  text-align: left;
}
.copy-color{
  color: #d92128 !important;
}
.open-color{
  color: #0a5ea2 !important;
}
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
