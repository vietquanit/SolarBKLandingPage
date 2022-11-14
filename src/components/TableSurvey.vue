<template>
    <div class="col-12">
        <table id="custom-table">
            <tr>
                <th></th>
                <th>Hoàn toàn hài lòng</th>
                <th>Hài lòng</th>
                <th>Bình thường</th>
                <th>Không hài lòng</th>
                <th>Hoàn toàn không hài lòng</th>
            </tr>
            <tr v-for="question,indexQuestion in listQuestions" :key="'question-'+indexQuestion">
                <td class="text-left">Câu {{indexQuestion + 1}} : {{question}}</td>
                <td v-for="answer,indexAnswer of listAnswers[indexQuestion]['listAnswer']" :key="indexAnswer">
                    <RadioButton :inputId="'answer-'+indexQuestion+'-'+indexAnswer" :name="'answer-'+indexQuestion" :value="answer.name" v-model="listAnswers[indexQuestion]['answered']"/>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
// eslint-disable-next-line no-unused-vars
export default {
    inject: ['headerSetting','urlListQuestion'],
    name: 'TableSurvey',
    setup() {
        
    },
    data() {
        return {
            listQuestions: [
                'xxxx là gì ? ',
                'aaâ là gì ?',
                'bà là gì ?'
            ],
            listAnswers: [
                {
                    idQuestion: '0',
                    listAnswer: [{
                            name:'Hoàn toàn hài lòng',
                            key:'1'
                        },
                        {
                            name:'Hài lòng',
                            key:'2'
                        },
                        {
                            name:'Bình thường',
                            key:'3'
                        },
                        {
                            name:'Không hài lòng',
                            key:'4'
                        },
                        {
                            name:'Hoàn toàn không hài lòng',
                            key:'5'
                        }
                    ],
                    answered: null
                },
                {
                    idQuestion: '1',
                    listAnswer: [{
                            name:'Hoàn toàn hài lòng',
                            key:'1'
                        },
                        {
                            name:'Hài lòng',
                            key:'2'
                        },
                        {
                            name:'Bình thường',
                            key:'3'
                        },
                        {
                            name:'Không hài lòng',
                            key:'4'
                        },
                        {
                            name:'Hoàn toàn không hài lòng',
                            key:'5'
                        }
                    ],
                    answered: null
                },
                {
                    idQuestion: '2',
                    listAnswer: [{
                            name:'Hoàn toàn hài lòng',
                            key:'1'
                        },
                        {
                            name:'Hài lòng',
                            key:'2'
                        },
                        {
                            name:'Bình thường',
                            key:'3'
                        },
                        {
                            name:'Không hài lòng',
                            key:'4'
                        },
                        {
                            name:'Hoàn toàn không hài lòng',
                            key:'5'
                        }
                    ],
                    answered: null
                }
            ],
            categories: [
                {name: 'Accounting', key: 'A'}, 
                {name: 'Marketing', key: 'M'}, 
                {name: 'Production', key: 'P'}, 
                {name: 'Research', key: 'R'}
            ],
            selectedCategory: null
        }
    },
    created() {
        this.initData();
        console.log('data ' + this.listMarks)
    },
    methods: {
        initData(){
            let vm = this
            let body={
                "mode": "cxlandingInternal",
                "departmentName":"SA",
                "username":'xyz'
            }
            {{console.log(this.headerSetting)}}
            this.axios.post(vm.urlListQuestion,body, vm.headerSetting).then(function (response) {
                console.log('call'+JSON.stringify(response));
                if(response.status == 200){
                    // vm.$store.commit('getListMarks', response.data.marks)
                    vm.getListMarks(response.data.marks);
                    vm.getListQuestions(response.data.questions);
                }
            });
        },
        ...mapActions(['getListMarks', 'getListQuestions']),

        // focusField(name){
        //     this.editField = name;
        // },
        // blurField(){
        //     this.editField = '';
        // },
        // showField(name){
        //     return (this.user[name] == '' || this.editField == name)
        // }
    },
    computed: {
        listMarks: {
            get() {
                return this.$store.state.listMarks;
            },
            set(value) {
                this.$store.dispatch("listMarks", value);
            },
        },
    }
}
</script>
<style scoped>
#custom-table{
    font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
#custom-table td, #custom-table th{
    border: 1px solid #ddd;
    padding: 8px;
}
#custom-table tr:nth-child(even){background-color: #f2f2f2;}
#custom-table tr:hover {background-color: #ddd;}
#custom-table th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    /* background-color: #04AA6D; */
    color: black;
}
</style>