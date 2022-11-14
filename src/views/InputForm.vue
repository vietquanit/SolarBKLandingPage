<template>
    <div class="input-form container mx-auto">
      <HeaderComponent />
      <div class="grid">
          <div class="col-12">
            <Panel header="Tạo khảo sát" class="mt-4 box">
                <div class="field grid pt-4 mb-4">
                    <label for="name-project" class="col-10 mb-2 md:col-2 md:mb-0 font-semibold">Tên dự án: </label>
                    <div class="col-12 md:col-10">
                        <InputText id="name-project" placeholder="Nhập tên dự án...." type="text" class="p-inputtext-lg w-full" />
                    </div>
                </div>
                <div class="field grid">
                    <label for="name-customer" class="col-10 mb-2 md:col-2 md:mb-0 font-semibold">Tên khách hàng: </label>
                    <div class="col-12 md:col-10">
                        <InputText id="name-customer" placeholder="Nhập tên khách hàng...."  type="text" class="p-inputtext-lg w-full" />
                    </div>
                </div>
                <div class="field grid">
                    <label for="email" class="col-10 mb-2 md:col-2 md:mb-0 font-semibold">Email khách hàng: </label>
                    <div class="col-12 md:col-10">
                        <InputText id="email" placeholder="Nhập email khách hàng...."  type="text" class="p-inputtext-lg w-full" />
                    </div>
                </div>
                <div class="field grid pb-4">
                    <label for="text" class="col-10 mb-2 md:col-2 md:mb-0 font-semibold">Tên công ty khách hàng: </label>
                    <div class="col-12 md:col-10">
                        <InputText id="text" placeholder="Nhập tên công ty khách hàng...."  type="text" class="p-inputtext-lg w-full"  />
                    </div>
                </div>
                <div class="col-12">
                    <Button label="Tạo khảo sát" class="btn-primary btn-login text-white font-bold pt-3 pb-3 pl-8 pr-8 border-round-lg" @click="handleSubmit()"/>
                </div>
            </Panel>
           
        </div>
      </div>
    </div>
</template>

<script>
import HeaderComponent from './../components/Header.vue'
export default {
    name: 'InputForm',
    components: {'HeaderComponent': HeaderComponent},
    methods: {
        handleSubmit(){
            this.$router.push({path: 'survey-internal'})
        }
    },
}
</script>

<style>
.input-form .box .p-panel-header .p-panel-title{
  color: #0c4e99 !important;

}
</style>