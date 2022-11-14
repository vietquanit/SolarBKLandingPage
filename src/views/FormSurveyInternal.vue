<template>
    <div class="survey-internal container mx-auto">
        <HeaderComponent />
        <div class="col-4 mt-6">
            <Dropdown v-model="selectDepartment" :options="listDepartments" optionLabel="name" placeholder="Lựa chọn phòng ban." class="w-full text-left border-2" >
            <template #value="slotProps">
                <div class="department" v-if="slotProps.value">
                    <div>Bạn thuộc phòng ban: {{slotProps.value.name}}</div>
                </div>
            </template>
            <template #option="slotProps">
                <div class="department-item">
                    <div>Bạn thuộc phòng ban: {{slotProps.option.name}}</div>
                </div>
            </template>
            </Dropdown>
        </div>
        <TableSurveyComponent :listMarks="listMarks" :listQuestions="listQuestions" :listDepartments="listDepartments"/>
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
import { mapActions } from 'vuex'
import HeaderComponent from './../components/Header.vue'
import TableSurveyComponent from './../components/TableSurvey.vue'
export default {
    inject: ['headerSetting','urlListQuestion'],
    name: 'SurveyInternal',
    components: {
        'HeaderComponent': HeaderComponent,
        'TableSurveyComponent': TableSurveyComponent
    },
    data() {
        return {
        }
    },
    created() {
        this.initData();
    },
    methods: {
        handleSubmit(){
            this.$router.push({path:'survey-customer'})
        },
        initData(){
            let vm = this
            let body={
                "mode": "cxlandingLogin",
                "token": this.tokenLogin
            }
            {{console.log(this.headerSetting)}}
            this.axios.post(vm.urlListQuestion,body, vm.headerSetting).then(function (response) {
                if(response.status == 200){
                    console.log('json: ' + JSON.stringify(response.data))
                    // vm.getListMarks(response.data.marks);
                    // vm.getListQuestions(response.data.questions);
                    // vm.getListDepartments(response.data.questions);
                }
            });
        },
        ...mapActions(['getListMarks', 'getListQuestions', 'getListDepartments']),
    },
    computed: {
        listMarks: {
            get() {
                return this.$store.state.listMarks;
            }
        },
        listQuestions: {
            get() {
                return this.$store.state.listQuestions;
            }
        },
        listDepartments: {
            get() {
                return this.$store.state.listDepartments;
            }
        },
        selectDepartment: {
            get() {
                return this.$store.state.selectDepartment;
            },
            set(value){
                this.$store.commit('selectDepartment', value)
            }
        },
        tokenLogin: {
            get() {
                return this.$store.state.tokenLogin;
            },
            set(value){
                this.$store.commit('getTokenLogin', value)
            }
        },
    }
}
</script>

<style>
.survey-internal .p-dropdown-trigger .pi-chevron-down{
    border: 1px solid #e6e6e6 !important; 
    padding: 3px !important;
    border-radius: 100% !important;
}
</style>