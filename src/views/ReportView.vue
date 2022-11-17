<template>
  <div class="container report-view">
    <HeaderComponent />
    <h1>Report</h1>
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
}
</script>
