<template>
    <div class="survey-internal container mx-auto">
        <HeaderComponent />
        <div class="col-4 mt-6">
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full text-left border-2" />
        </div>
        <TableSurveyComponent />
        <div class="col-12">
            <p class="text-left">Bạn có góp ý nào để cải thiện sản phẩm / dịch vụ được tốt hơn không?</p>
            <Textarea :autoResize="true" placeholder="Nhập góp ý của bạn vào đây..." rows="5" cols="30" class="w-full"/>
        </div>
        <div class="col-12">
            <Button label="Đăng nhập" class="btn-primary btn-login text-white font-bold mt-4 pt-3 pb-3 pl-8 pr-8 border-round-lg" @click="handleSubmit()"/>
        </div>
    </div>
</template>

<script>
import HeaderComponent from './../components/Header.vue'
import TableSurveyComponent from './../components/TableSurvey.vue'
export default {
    name: 'SurveyInternal',
    components: {
        'HeaderComponent': HeaderComponent,
        'TableSurveyComponent': TableSurveyComponent
    },
    data() {
        return {
            selectedCity: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ]
        }
    },
    methods: {
        handleSubmit(){
            this.$router.push({path:'survey-customer'})
        }
    },
}
</script>

<style>
.survey-internal .p-dropdown-trigger .pi-chevron-down{
    border: 1px solid #e6e6e6 !important; 
    padding: 3px !important;
    border-radius: 100% !important;
}
</style>