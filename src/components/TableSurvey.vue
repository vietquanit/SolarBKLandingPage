<template>
  <div class="col-12 overflow-auto">
    <table id="custom-table">
      <thead>
        <tr>
          <th></th>
          <th v-for="(mark, indexMark) in listMarks" :key="'mark-' + indexMark">
            {{ mark.key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="(question, indexQuestion) in listQuestions"
          :key="'question-' + indexQuestion"
        >
          <tr>
            <!-- Code for survey internal -->
            <td
              class="text-left"
              v-if="question.hasOwnProperty('Cauhoicuaphongbankhacdanhgia')"
            >
              Câu {{ question["STT"] }} :
              {{ question["Cauhoicuaphongbankhacdanhgia"] }}
            </td>
            <td
              class="text-left"
              v-else-if="question.hasOwnProperty('Cauhoituhoi')"
            >
              Câu {{ question["STT"] }} : {{ question["Cauhoituhoi"] }}
            </td>
            <!-- Code for survey customer -->
            <td class="text-left" v-else-if="question.hasOwnProperty('Cauhoi')">
              Câu {{ question["STT"] }} : {{ question["Cauhoi"] }}
            </td>
            <!-- <td class="text-left" v-if="question.hasOwnProperty('Cauhoinho') && question['Cauhoinho'].length > 0">
                            Câu {{question['STT']}} : {{question['Cauhoicuaphongbankhacdanhgia']}}
                        </td> -->
            <template
              v-for="(mark, indexMark) of listMarks"
              :key="'question-' + indexQuestion + '-mark-' + indexMark"
            >
              <td v-if="question['Cauhoinho'].length === 0">
                <label class="box-radio-button">
                  <input
                    type="radio"
                    class="btn-radio"
                    :name="
                      'radio-question-' + indexQuestion + '-mark' + indexMark
                    "
                    :value="mark.value"
                    v-model="question['Cautraloi']"
                    @click="selectMark(question['STT'], mark.value)"
                    :disabled="isDisabled"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td v-else></td>
            </template>
          </tr>
          <template v-if="question['Cauhoinho'].length > 0">
            <tr
              v-for="(quest, indexQuest) in question['Cauhoinho']"
              :key="'question-' + indexQuestion + 'sub-' + indexQuest"
            >
              <td
                class="text-left pl-4"
                v-if="quest.hasOwnProperty('Cauhoicuaphongbankhacdanhgia')"
              >
                Câu {{ quest["STT"] }} :
                {{ quest["Cauhoicuaphongbankhacdanhgia"] }}
              </td>
              <td
                class="text-left pl-4"
                v-else-if="quest.hasOwnProperty('Cauhoituhoi')"
              >
                Câu {{ quest["STT"] }} : {{ quest["Cauhoituhoi"] }}
              </td>
              <td
                class="text-left pl-4"
                v-else-if="quest.hasOwnProperty('Cauhoi')"
              >
                Câu {{ quest["STT"] }} : {{ quest["Cauhoi"] }}
              </td>
              <td
                v-for="(mark, indexMark) of listMarks"
                :key="
                  'question-' +
                  indexQuestion +
                  '-mark-' +
                  indexMark +
                  '-sub-' +
                  indexQuest
                "
              >
              <label class="box-radio-button">
                  <input
                  type="radio"
                  class="btn-radio"
                  :name="
                    'radio-question-' +
                    indexQuestion +
                    '-mark' +
                    indexMark +
                    '-sub-' +
                    indexQuest
                  "
                  :value="mark.value"
                  v-model="quest['Cautraloi']"
                  @click="selectMark(question['STT'], mark.value)"
                  :disabled="isDisabled"
                />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapActions } from "vuex";
// eslint-disable-next-line no-unused-vars
export default {
  props: ["listMarks", "listQuestions", "listDepartments", "isDisabled"],
  name: "TableSurvey",
  setup() {},
  created() {},
  data() {
    return {};
  },
  methods: {
    selectMark(sttQuestion, valueMark) {
      this.updateSelectMark({ sttQuestion: sttQuestion, valueMark: valueMark });
    },
    ...mapActions(["updateSelectMark"]),
  },
};
</script>
<style>
#custom-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  min-width: 620px;
}
#custom-table td,
#custom-table th {
  border: 1px solid #ddd;
  padding: 8px;
}
#custom-table tr:nth-child(even) {
  background-color: #f2f2f2;
}
#custom-table tr:hover {
  background-color: #ddd;
}
#custom-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  /* background-color: #04AA6D; */
  color: black;
}
/* The box-radio-button */
.box-radio-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 30px;
    height: 30px;
}

/* Hide the browser's default radio button */
.box-radio-button input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}

/* Create a custom radio button */
.box-radio-button .checkmark {
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  border: 2px solid var(--pink-600);;
}

/* On mouse-over, add a grey background color */
.box-radio-button:hover input ~ .checkmark {
  background-color: transparent;
  border: 2px solid var(--pink-600);;
}

/* When the radio button is checked, add a blue background */
.box-radio-button input:checked ~ .checkmark {
  background-color: transparent;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.box-radio-button input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.box-radio-button .checkmark:after {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--pink-600);;
}
</style>