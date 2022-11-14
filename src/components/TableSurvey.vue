<template>
    <div class="col-12">
        <table id="custom-table">
            <tr>
                <th></th>
                <th v-for="mark, indexMark in listMarks" :key="'mark-' + indexMark">{{mark.key}}</th>
            </tr>
            <!-- <tr v-for="question,indexQuestion in listQuestions" :key="'question-'+indexQuestion">
                <td class="text-left">Câu {{indexQuestion + 1}} : {{question}}</td>
                <td v-for="answer,indexAnswer of listAnswers[indexQuestion]['listAnswer']" :key="indexAnswer">
                    <RadioButton :inputId="'answer-'+indexQuestion+'-'+indexAnswer" :name="'answer-'+indexQuestion" :value="answer.name" v-model="listAnswers[indexQuestion]['answered']"/>
                </td>
            </tr> -->
        </table>
    </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
export default {
    props: ['listMarks', 'listQuestions', 'listDepartments'],
    name: 'TableSurvey',
    setup() {
        
    },
    data() {
        return {
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