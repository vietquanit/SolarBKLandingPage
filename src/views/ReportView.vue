<template>
  <div class="container report-view mx-auto">
    <HeaderComponent />
        <div class="">
          <p>{{dataAll.hasOwnProperty('ending') ? dataAll['ending'] : ''}} <br /><span class="text-sm" v-show="isShowTextLoad">Trang sẽ được load lại trong <span class="text-red-600">{{countDown}}</span></span></p>
        </div>
  </div>
</template>
<script>
import HeaderComponent from "./../components/Header.vue";
export default {
  inject: ["headerSetting", "urlAPI"],
  name: 'ReportView',
  components: {
    HeaderComponent: HeaderComponent
  },
  data(){
    return {
      countDown: 5,
      currentPathName: location.href,
      isShowTextLoad: false
    }
  },
  created(){
    setTimeout(() => this.clearLocalStorage(), 5000);
    this.countDownTimer();
    if(this.currentPathName.includes('internal')){
      this.isShowTextLoad = true;
    }
  },
  methods: {
    clearLocalStorage(){
      localStorage.clear();
      if(this.currentPathName.includes('internal')){
        this.$router.push({ path: "/" });
      }
      // window.location.reload();
    },
    countDownTimer () {
        if (this.countDown > 0) {
            setTimeout(() => {
                this.countDown -= 1
                this.countDownTimer()
            }, 1000)
        }
    }
  },
  computed: {
    dataAll: {
      get() {
        return this.$store.state.dataAll;
      },
    },
  }
}
</script>
<style scoped>
p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
}
</style>