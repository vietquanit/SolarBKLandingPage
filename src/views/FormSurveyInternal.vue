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
        <div class="text-left mt-4" v-html="dataAll['intro']">
        </div>
      </div>
      <div class="col-4 mt-6">
        <Dropdown
          v-model="selectDepartment"
          :options="listDepartments"
          optionLabel="name"
          placeholder="Lựa chọn phòng ban."
          class="w-full text-left border-2"
          :modelValue="selectDepartment"
          @change="onChangeDepartment()"
        >
          <template #value="slotProps">
            <div class="department" v-if="slotProps.value">
              <div>Bạn thuộc phòng ban: {{ slotProps.value.name }}</div>
            </div>
          </template>
          <template #option="slotProps">
            <div class="department-item">
              <div>Bạn thuộc phòng ban: {{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
      </div>
      <TableSurveyComponent
        :listMarks="listMarks"
        :listQuestions="listQuestions"
        :listDepartments="listDepartments"
        :isDisabled="isLoadingButton"
      v-show="listQuestions.length > 0"/>
      <div class="col-12" v-show="listQuestions.length > 0">
        <p class="text-left">
          Bạn có góp ý nào để cải thiện sản phẩm / dịch vụ được tốt hơn không?
        </p>
        <Textarea
          :autoResize="true"
          placeholder="Nhập góp ý của bạn vào đây..."
          rows="5"
          cols="30"
          class="w-full"
          v-model="textSuggest" :disabled="isLoadingButton"
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
  name: "SurveyInternal",
  components: {
    HeaderComponent: HeaderComponent,
    TableSurveyComponent: TableSurveyComponent,
  },
  data() {
    return {
      isLoadingPage: false,
      isLoadingButton: false,
      currentPathName: location.href,
    };
  },
  created() {
    // set null
    this.listQuestions = [];
    this.isLoadingPage = true;
    let self = this;
    self.checkValidLogin().then(function (response) {
        if (response.status == false) {
          self.$router.push({ path: "/login" });
        } else {
          self.initData();
        }
      })
      .catch((error) => {
        self.$router.push({ path: "/login" });
        self.$toast.add({
          severity: "error",
          summary: "Thông báo",
          detail: "Lỗi:  !" + error,
          life: 3000,
        });
      });
    // check if department isset data
    if(self.selectDepartment){
      self.onChangeDepartment()
    }
  },
  methods: {
    handleSubmit() {
      this.isLoadingButton = true;
      let self = this;
      this.lastObjectQuestionSuggest["Cautraloi"] = this.textSuggest;
      let data = JSON.parse(JSON.stringify(this.listQuestions));
      data.push(this.lastObjectQuestionSuggest);
      let body = {
        mode: "cxlandingResponse",
        link: this.currentPathName,
        data: data,
      };
      self.axios
        .post(self.urlAPI, JSON.stringify(body), {header: self.headerSetting})
        .then(function (response) {
          if (response.data.status == true) {
            self.$toast.add({
              severity: "success",
              summary: "Thông báo",
              detail: "Hoàn tất khảo sát!",
              life: 3000,
            });
            localStorage.clear();
            window.location.reload()
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
      let self = this;
      let body = {
        mode: "cxlandingOpenLink",
        link: this.currentPathName,
      };
      self.axios
        .post(self.urlAPI, JSON.stringify(body), {header: self.headerSetting})
        .then(function (response) {
          if (response.status == 200) {
            let data = response.data.data;
            self.dataAll = data;
            self.getListMarks(data.marks);
            self.getListDepartments(data.questions);
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
      let promise = this.axios.post(this.urlAPI, JSON.stringify(body), {header: this.headerSetting});
      return promise.then((response) => response.data);
    },
    onChangeDepartment() {
      this.listQuestions = [];
      this.updateListQuestions(this.selectDepartment);
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