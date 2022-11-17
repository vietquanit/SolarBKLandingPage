<template>
    <div class="col-12">
        <table id="custom-table">
            <tr>
                <th></th>
                <th v-for="mark, indexMark in listMarks" :key="'mark-' + indexMark">{{mark.key}}</th>
            </tr>
            <tr v-for="question,indexQuestion in listQuestions" :key="'question-'+indexQuestion">
                <td class="text-left" v-if="question.hasOwnProperty('Cauhoicuaphongbankhacdanhgia')">
                    Câu {{question['STT']}} : {{question['Cauhoicuaphongbankhacdanhgia']}}
                </td>
                <td class="text-left" v-else-if="question.hasOwnProperty('Cauhoituhoi')">
                    Câu {{question['STT']}} : {{question['Cauhoituhoi']}}
                </td>
                <td v-for="mark,indexMark of listMarks" :key="'question-'+indexQuestion+'-mark-'+indexMark">
                    {{question['Cautraloi']}}
                    <RadioButton :name="'radio-question-'+indexQuestion+'-mark'+indexMark" :value="mark.value" v-model="question['Cautraloi']" @change="selectMark(question['STT'], mark.value)"/>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
// eslint-disable-next-line no-unused-vars
export default {
    props: ['listMarks', 'listQuestions', 'listDepartments'],
    name: 'TableSurvey',
    setup() {
        
    },
    created(){
    },
    data() {
        return {
        }
    },
    methods: {
        selectMark(sttQuestion, valueMark){
            this.updateSelectMark({'sttQuestion': sttQuestion, 'valueMark':valueMark});
        },
        ...mapActions(["updateSelectMark"]),
    },
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