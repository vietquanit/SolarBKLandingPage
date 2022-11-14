<template>
  <div class="input-form container mx-auto">
    <HeaderComponent />
    <div class="grid">
      <div class="col-12">
        <Panel header="Tạo khảo sát" class="mt-4 box">
          <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div class="field grid pt-4 mb-4">
              <label
                for="name-project"
                class="col-10 mb-2 md:col-2 md:mb-0 font-semibold"
                >Tên dự án:
              </label>
              <div class="col-12 md:col-10">
                <InputText
                  id="name-project"
                  placeholder="Nhập tên dự án...."
                  type="text"
                  class="p-inputtext-lg w-full"
                  v-model="v$.nameProject.$model"
                  :class="{ 'p-invalid': v$.nameProject.$invalid && submitted }"
                />
                <small
                  v-if="
                    (v$.nameProject.$invalid && submitted) ||
                    v$.nameProject.$pending.$response
                  "
                  class="p-error text-left block pt-2"
                  >{{
                    v$.nameProject.required.$message.replace(
                      "Value",
                      "nameProject"
                    )
                  }}</small
                >
              </div>
            </div>
            <div class="field grid">
              <label
                for="name-customer"
                class="col-10 mb-2 md:col-2 md:mb-0 font-semibold"
                >Tên khách hàng:
              </label>
              <div class="col-12 md:col-10">
                <InputText
                  id="name-customer"
                  placeholder="Nhập tên khách hàng...."
                  type="text"
                  class="p-inputtext-lg w-full"
                  v-model="v$.nameCustomer.$model"
                  :class="{
                    'p-invalid': v$.nameCustomer.$invalid && submitted,
                  }"
                />
                <small
                  v-if="
                    (v$.nameCustomer.$invalid && submitted) ||
                    v$.nameCustomer.$pending.$response
                  "
                  class="p-error text-left block pt-2"
                  >{{
                    v$.nameCustomer.required.$message.replace(
                      "Value",
                      "nameCustomer"
                    )
                  }}</small
                >
              </div>
            </div>
            <div class="field grid">
              <label
                for="email"
                class="col-10 mb-2 md:col-2 md:mb-0 font-semibold"
                >Email khách hàng:
              </label>
              <div class="col-12 md:col-10">
                <InputText
                  id="email"
                  placeholder="Nhập email khách hàng...."
                  type="text"
                  class="p-inputtext-lg w-full"
                  v-model="v$.emailCompanyCustomer.$model"
                  :class="{
                    'p-invalid': v$.emailCompanyCustomer.$invalid && submitted,
                  }"
                />
                <small
                  v-if="
                    (v$.emailCompanyCustomer.$invalid && submitted) ||
                    v$.emailCompanyCustomer.$pending.$response
                  "
                  class="p-error text-left block pt-2"
                  >{{
                    v$.emailCompanyCustomer.required.$message.replace(
                      "Value",
                      "emailCompanyCustomer"
                    )
                  }}</small
                >
              </div>
            </div>
            <div class="field grid pb-4">
              <label
                for="text"
                class="col-10 mb-2 md:col-2 md:mb-0 font-semibold"
                >Tên công ty khách hàng:
              </label>
              <div class="col-12 md:col-10">
                <InputText
                  id="text"
                  placeholder="Nhập tên công ty khách hàng...."
                  type="text"
                  class="p-inputtext-lg w-full"
                  v-model="v$.nameCompanyCustomer.$model"
                  :class="{
                    'p-invalid': v$.nameCompanyCustomer.$invalid && submitted,
                  }"
                />
                <small
                  v-if="
                    (v$.nameCompanyCustomer.$invalid && submitted) ||
                    v$.nameCompanyCustomer.$pending.$response
                  "
                  class="p-error text-left block pt-2"
                  >{{
                    v$.nameCompanyCustomer.required.$message.replace(
                      "Value",
                      "nameCompanyCustomer"
                    )
                  }}</small
                >
              </div>
            </div>
            <div class="col-12">
              <Button
                type="submit"
                label="Tạo khảo sát"
                class="
                  btn-primary btn-login
                  text-white
                  font-bold
                  pt-3
                  pb-3
                  pl-8
                  pr-8
                  border-round-lg
                "
                @click="handleSubmit()"
              />
            </div>
          </form>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import HeaderComponent from "./../components/Header.vue";
export default {
  name: "InputForm",
  components: { HeaderComponent: HeaderComponent },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      submitted: false,
    };
  },
  validations() {
    return {
      nameProject: {
        required,
      },
      nameCustomer: {
        required,
      },
      nameCompanyCustomer: {
        required,
      },
      emailCompanyCustomer: {
        required,
      },
    };
  },
  methods: {
    getFormSurvey(){
        let vm = this;
        let body = {
            mode: "cxlandingGetToken",
            username: "admin", // Ví dụ
            password: "123456@#$", // Ví dụ
        };
        this.axios
        .post(vm.urlListQuestion, body, vm.headerSetting)
        .then(function (response) {
          if (response.status == 200) {
            console.log("json: " + JSON.stringify(response.data));
            vm.setValue({ action: "tokenLogin", value: response.data.token });
            // vm.getListQuestions(response.data.questions);
            // vm.getListDepartments(response.data.questions);
          }
        });
    },
    async handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }
      await this.getFormSurvey();
      this.$router.push({ path: "survey-internal" });
    },
  },
  computed: {
    nameProject: {
      get() {
        return this.$store.state.nameProject;
      },
      set(value) {
        this.$store.commit("setValue", { action: "nameProject", value: value });
      },
    },
    nameCustomer: {
      get() {
        return this.$store.state.nameCustomer;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "nameCustomer",
          value: value,
        });
      },
    },
    nameCompanyCustomer: {
      get() {
        return this.$store.state.nameCompanyCustomer;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "nameCompanyCustomer",
          value: value,
        });
      },
    },
    emailCompanyCustomer: {
      get() {
        return this.$store.state.emailCompanyCustomer;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "emailCompanyCustomer",
          value: value,
        });
      },
    },
  },
};
</script>

<style>
.input-form .box .p-panel-header .p-panel-title {
  color: #0c4e99 !important;
}
</style>