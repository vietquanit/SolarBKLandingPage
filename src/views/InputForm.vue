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
                  :disabled="isLoading"
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
                  :disabled="isLoading"
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
                  v-model="v$.emailCustomer.$model"
                  :class="{
                    'p-invalid': v$.emailCustomer.$invalid && submitted,
                  }"
                  :disabled="isLoading"
                />
                <small
                  v-if="
                    (v$.emailCustomer.$invalid && submitted) ||
                    v$.emailCustomer.$pending.$response
                  "
                  class="p-error text-left block pt-2"
                  >{{
                    v$.emailCustomer.required.$message.replace(
                      "Value",
                      "emailCustomer"
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
                  :disabled="isLoading"
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
                :loading="isLoading"
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
  inject: ["headerSetting", "urlAPI", "keyEncrypt"],
  name: "InputForm",
  components: { HeaderComponent: HeaderComponent },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      submitted: false,
      isLoading: false,
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
      emailCustomer: {
        required,
      },
    };
  },
  methods: {
    async handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }
      this.createLinkSurvey();
    },
    getFormSurvey() {
      let body = {
        "mode": "cxlandingClick",
        "username": this.username, // Ví dụ
        "data": {
          "projectName": this.nameProject, // Tên dự án,
          "customerName": this.nameCustomer, // Tên KH
          "customerEmail": this.emailCustomer, // Email KH
          "companyName": this.nameCompanyCustomer, // Tên Công ty KH
          "internalLink": this.linkInternal, // Link Internal
          "customerLink": this.linkCustomer, // Link dành cho KH
        },
      };
      let vm = this;
      vm.axios
        .post(vm.urlAPI, body, vm.headerSetting)
        .then(function (response) {
          if (response.status == 200) {
            vm.$toast.add({
              severity: "success",
              summary: "Thông báo",
              detail: "Tạo form khảo sát thành công !",
              life: 3000,
            });
            vm.$router.push({ path: "form-get-link" });
          }
        })
        .catch((error) => {
          vm.$toast.add({
            severity: "error",
            summary: "Thông báo",
            detail: "Lỗi:  !" + error,
            life: 3000,
          });
        })
        .finally(() => {
          vm.isLoading = false;
        });
    },
    async createLinkSurvey() {
      this.isLoading = true;
      let currentDateUnix = new Date().getTime();
      // let url="nameproject="+this.nameProject+"&namecustomer="+this.nameCustomer+"&emailcustomer="+this.emailCustomer+"&namecompanycustomer="+this.nameCompanyCustomer+"&date="+currentDateUnix;
      // let encryptInternal = this.$CryptoJS.AES.encrypt(''+currentDateUnix, this.keyEncrypt).toString().replace(/\+/g,'p1L2u3S').replace(/\//g,'s1L2a3S4h').replace(/=/g,'e1Q2u3A4l');
      // let encryptCustomer = this.$CryptoJS.AES.encrypt(''+currentDateUnix, this.keyEncrypt).toString().replace(/\+/g,'p1L2u3S').replace(/\//g,'s1L2a3S4h').replace(/=/g,'e1Q2u3A4l');
      // this.linkInternal = "survey-internal/"+encryptInternal;
      // this.linkCustomer = "survey-customer/"+encryptCustomer;
      this.linkInternal = "survey-internal/"+currentDateUnix;
      this.linkCustomer = "survey-customer/"+currentDateUnix;
      let self =this;
      self.checkValidLogin().then(function (response) {
          if(response.status == true){
            self.getFormSurvey();
          }
        })
        .catch((error) => {
          self.$toast.add({
            severity: "error",
            summary: "Thông báo",
            detail: "Lỗi:  !" + error,
            life: 3000,
          });
        });
      // if(self.checkValidLogin()){
      //   
      // }
      // https://www.npmjs.com/package/vue-cryptojs
    },
    checkValidLogin(){
      let body = {
        mode: "cxlandingLogin",
        token: this.tokenLogin
      };
      let promise = this.axios.post(this.urlAPI, body, this.headerSetting)
      return promise.then((response) => response.data)
    }
  },
  computed: {
    username: {
      get() {
        return this.$store.state.username;
      },
      set(value) {
        this.$store.commit("setValue", { action: "username", value: value });
      },
    },
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
    emailCustomer: {
      get() {
        return this.$store.state.emailCustomer;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "emailCustomer",
          value: value,
        });
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
    tokenLogin: {
      get() {
        return this.$store.state.tokenLogin;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "tokenLogin",
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