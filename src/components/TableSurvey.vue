<template>
    <div class="col-12 overflow-auto">
        <table id="custom-table">
            <thead>
                <tr>
                    <th></th>
                    <th v-for="mark, indexMark in listMarks" :key="'mark-' + indexMark">{{mark.key}}</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="question,indexQuestion in listQuestions" :key="'question-'+indexQuestion">
                    <tr>
                        <!-- Code for survey internal -->
                        <td class="text-left" v-if="question.hasOwnProperty('Cauhoicuaphongbankhacdanhgia')">
                            Câu {{question['STT']}} : {{question['Cauhoicuaphongbankhacdanhgia']}}
                        </td>
                        <td class="text-left" v-else-if="question.hasOwnProperty('Cauhoituhoi')">
                            Câu {{question['STT']}} : {{question['Cauhoituhoi']}}
                        </td>
                        <!-- Code for survey customer -->
                        <td class="text-left" v-else-if="question.hasOwnProperty('Cauhoi')">
                            Câu {{question['STT']}} : {{question['Cauhoi']}}
                        </td>
                        <!-- <td class="text-left" v-if="question.hasOwnProperty('Cauhoinho') && question['Cauhoinho'].length > 0">
                            Câu {{question['STT']}} : {{question['Cauhoicuaphongbankhacdanhgia']}}
                        </td> -->
                        <template v-for="mark,indexMark of listMarks" :key="'question-'+indexQuestion+'-mark-'+indexMark">
                            <td v-if="question['Cauhoinho'].length === 0">
                                <RadioButton :name="'radio-question-'+indexQuestion+'-mark'+indexMark" :value="mark.value" v-model="question['Cautraloi']" @click.stop.prevent="selectMark(question['STT'], mark.value)"/>
                            </td>
                            <td v-else></td>
                        </template>
                    </tr>
                    <template v-if="question['Cauhoinho'].length > 0">
                        <tr v-for="quest, indexQuest in question['Cauhoinho']" :key="'question-'+indexQuestion+'sub-'+indexQuest">
                            <td class="text-left pl-4" v-if="quest.hasOwnProperty('Cauhoicuaphongbankhacdanhgia')">
                                Câu {{quest['STT']}} : {{quest['Cauhoicuaphongbankhacdanhgia']}}
                            </td>
                            <td class="text-left pl-4" v-else-if="quest.hasOwnProperty('Cauhoituhoi')">
                                Câu {{quest['STT']}} : {{quest['Cauhoituhoi']}}
                            </td>
                            <td class="text-left pl-4" v-else-if="quest.hasOwnProperty('Cauhoi')">
                                Câu {{quest['STT']}} : {{quest['Cauhoi']}}
                            </td>
                            <td v-for="mark,indexMark of listMarks" :key="'question-'+indexQuestion+'-mark-'+indexMark+'-sub-'+indexQuest">
                                <RadioButton :name="'radio-question-'+indexQuestion+'-mark'+indexMark+'-sub-'+indexQuest" :value="mark.value" v-model="quest['Cautraloi']" @click.stop.prevent="selectMark(question['STT'], mark.value)"/>
                            </td>
                        </tr>
                    </template>
                </template>
                
            </tbody>
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
<style>
#custom-table{
    font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  min-width: 620px;
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
.p-radiobutton .p-radiobutton-box{
    border: 2px solid #ff0000 !important;
}
.p-radiobutton .p-radiobutton-box.p-highlight{
    background: transparent;
}
.p-radiobutton-box.p-highlight .p-radiobutton-icon{
    background: #ff0000;
}
</style>