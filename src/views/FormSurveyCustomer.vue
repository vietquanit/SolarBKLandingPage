<template>
  <div class="survey-internal container mx-auto">
    <div class="inline-block mx-auto mt-5" v-if="isLoadingPage">
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_nvskuoaw.json"
        class="customProgress"
        background="transparent"
        style="width: 300px; height: 300px"
        speed="1"
        autoplay
      ></lottie-player>
    </div>
    <div v-else>
      <HeaderComponent />
      <div class="col-12">
        <div class="text-left mt-4">
          {{ dataAll["intro"] }}
        </div>
      </div>
      <TableSurveyComponent
        :listMarks="listMarks"
        :listQuestions="listQuestions"
        :listDepartments="listDepartments"
      />
      <div class="col-12">
        <p class="text-left">
          Bạn có góp ý nào để cải thiện sản phẩm / dịch vụ được tốt hơn không?
        </p>
        <Textarea
          :autoResize="true"
          placeholder="Nhập góp ý của bạn vào đây..."
          rows="5"
          cols="30"
          class="w-full"
          v-model="textSuggest"
        />
      </div>
      <div class="col-12">
        <Button
          label="Hoàn tất khảo sát"
          class="
            btn-primary btn-login
            text-white
            font-bold
            mt-4
            pt-3
            pb-3
            pl-8
            pr-8
            border-round-lg
          "
          :loading="isLoadingButton"
          @click="handleSubmit()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import HeaderComponent from "./../components/Header.vue";
import TableSurveyComponent from "./../components/TableSurvey.vue";
export default {
  inject: ["headerSetting", "urlAPI"],
  name: "SurveyCustomer",
  components: {
    HeaderComponent: HeaderComponent,
    TableSurveyComponent: TableSurveyComponent,
  },
  data() {
    return {
      isLoadingPage: false,
      isLoadingButton: false,
      currentPathName: location.pathname,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    handleSubmit() {
      this.isLoadingButton = true;
      let pathUrl = this.currentPathName.slice(1);
      this.lastObjectQuestionSuggest["Cautraloi"] = this.textSuggest;
      let data = this.listQuestions;
      data.push(this.lastObjectQuestionSuggest);
      let body = {
        mode: "cxlandingResponse",
        link: pathUrl,
        data: data,
      };
      console.log('JSON: ' + JSON.stringify(body))
      let self = this
      this.axios
        .post(self.urlAPI, body, self.headerSetting)
        .then(function (response) {
          if (response.data.status == true) {
            localStorage.clear();
            self.$toast.add({
              severity: "success",
              summary: "Thông báo",
              detail: "Hoàn tất khảo sát!",
              life: 3000,
            });
            window.location.reload();
            // self.$router.push({ path: "/report" });
          }
        })
        .catch((error) => {
          self.$toast.add({
            severity: "error",
            summary: "Thông báo",
            detail: "Lỗi:  !" + error,
            life: 3000,
          });
        })
        .finally(() => {
          self.isLoadingButton = false;
        });
      // this.$router.push({ path: "survey-customer" });
    },
    initData() {
        this.isLoadingPage = true;
      let pathUrl = this.currentPathName.slice(1);
      let self = this;
      let body = {
        mode: "cxlandingOpenLink",
        link: pathUrl,
      };
      self.axios
        .post(self.urlAPI, body, self.headerSetting)
        .then(function (response) {
          if (response.status == 200) {
            let data = response.data.data;
            self.dataAll = data;
            self.getListMarks(data.marks);
            self.lastObjectQuestionSuggest = data.questions[data.questions.length -1];
            data.questions.pop(); // remove last item array
            self.getListQuestions(data.questions);
          }
        })
        .catch((error) => {
          self.$toast.add({
            severity: "error",
            summary: "Thông báo",
            detail: "Lỗi:  !" + error,
            life: 3000,
          });
        })
        .finally(() => {
          self.isLoadingPage = false;
        });
    },
    checkValidLogin() {
      let body = {
        mode: "cxlandingLogin",
        token: this.tokenLogin,
      };
      let promise = this.axios.post(this.urlAPI, body, this.headerSetting);
      return promise.then((response) => response.data);
    },
    ...mapActions([
      "getListMarks",
      "getListQuestions",
      "getListDepartments",
      "updateListQuestions",
    ]),
  },
  computed: {
    listMarks: {
      get() {
        return this.$store.state.listMarks;
      },
    },
    listQuestions: {
      get() {
        return this.$store.state.listQuestions;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "listQuestions",
          value: value,
        });
      },
    },
    listDepartments: {
      get() {
        return this.$store.state.listDepartments;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "listDepartments",
          value: value,
        });
      },
    },
    selectDepartment: {
      get() {
        return this.$store.state.selectDepartment;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "selectDepartment",
          value: value,
        });
      },
    },
    tokenLogin: {
      get() {
        return this.$store.state.tokenLogin;
      },
      set(value) {
        this.$store.commit("getTokenLogin", value);
      },
    },
    linkInternal: {
      get() {
        return this.$store.state.linkInternal;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "linkInternal",
          value: value,
        });
      },
    },
    linkCustomer: {
      get() {
        return this.$store.state.linkCustomer;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "linkCustomer",
          value: value,
        });
      },
    },
    dataAll: {
      get() {
        return this.$store.state.dataAll;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "dataAll",
          value: value,
        });
      },
    },
    textSuggest: {
      get() {
        return this.$store.state.textSuggest;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "textSuggest",
          value: value,
        });
      },
    },
    lastObjectQuestionSuggest: {
      get() {
        return this.$store.state.lastObjectQuestionSuggest;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "lastObjectQuestionSuggest",
          value: value,
        });
      },
    },
  },
};
</script>

<style>
.survey-internal .p-dropdown-trigger .pi-chevron-down {
  border: 1px solid #e6e6e6 !important;
  padding: 3px !important;
  border-radius: 100% !important;
}
</style>