<template>
  <div class="login container mx-auto">
    <HeaderComponent />
    <div class="col-12">
      <div
        class="
          box-login
          flex
          col-12
          sm:col-10
          md:col-8
          lg:col-6
          xl:col-4
          flex-column
          mt-5
          md:mt-0
        "
      >
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
        <div class="input-login border-round-md">
          <div class="col-10 mx-auto">
            <h3 class="uppercase text-center color-primary text-3xl">
              Đăng nhập
            </h3>
            <div class="field grid mb-4">
              <!-- <label for="username" class="col-10 mb-2 md:col-2 md:mb-0 font-semibold">Username: </label> -->
              <div class="col-12 md:col-12">
                <InputText
                  id="username"
                  placeholder="Nhập Username...."
                  type="text"
                  class="w-full p-inputtext-lg border-round-md"
                  v-model="v$.username.$model" :class="{'p-invalid':v$.username.$invalid && submitted}"
                />
                <small v-if="(v$.username.$invalid && submitted) || v$.username.$pending.$response" class="p-error text-left block pt-2">{{v$.username.required.$message.replace('Value', 'Username')}}</small>
              </div>
            </div>
            <div class="field grid pb-4">
              <!-- <label for="password" class="col-10 mb-2 md:col-2 md:mb-0 font-semibold">Password: </label> -->
              <div class="col-12 md:col-12">
                <InputText
                  id="password"
                  placeholder="Nhập password...."
                  type="password"
                  class="w-full p-inputtext-lg border-round-md"
                  v-model="v$.password.$model" :class="{'p-invalid':v$.password.$invalid && submitted}"
                />
                <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error text-left block pt-2">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-10 sm:col-8 md:col-8 mx-auto">
          {{ tokenLogin }}
          <Button
            label="Đăng nhập"
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
            type="submit"
          />
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { mapActions } from "vuex";
import HeaderComponent from "./../components/Header.vue";
export default {
  inject: ["headerSetting", "urlListQuestion"],
  name: "LoginView",
  components: { HeaderComponent: HeaderComponent },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      submitted: false,
    };
  },
  validations() {
    return {
      username: {
        required,
      },
      password: {
        required,
      },
    };
  },
  created() {},
  methods: {
    getToken() {
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
    ...mapActions(["setValue"]),
    handleSubmit(isFormValid) {
       this.submitted = true;

        if (!isFormValid) {
            return;
        }

      this.getToken();
      this.$router.push({ path: "input-form" });
    },
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
    password: {
      get() {
        return this.$store.state.password;
      },
      set(value) {
        this.$store.commit("setValue", { action: "password", value: value });
      },
    },
    tokenLogin: {
      get() {
        return this.$store.state.tokenLogin;
      },
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  .box-login {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    .input-login {
      background-color: #e6e6e6;
    }
    input {
      background: transparent;
    }
  }
}
</style>