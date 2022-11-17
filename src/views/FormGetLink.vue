<template>
  <div class="form-get-link container mx-auto">
    <HeaderComponent />
    <div class="grid">
      <div class="col-12">
        <Panel header="Tạo khảo sát" class="mt-4 box">
          <div class="box-input">
            <div class="field grid pt-4 mb-4">
              <label
                for="url-customer"
                class="col-10 mb-2 md:col-3 md:mb-0 font-semibold"
                >URL dành cho khách hàng:
              </label>
              <span class="p-input-icon-right col-12 md:col-9">
                <i
                  class="pi pi-copy mr-3 cursor-pointer copy-color" style="right: 3rem !important"
                  @click="copyLinkCustomer()"
                />
                <i
                  class="pi pi-window-maximize mr-3 cursor-pointer open-color"
                  @click="openLinkCustomer()"
                />
                <InputText
                  id="url-customer"
                  placeholder="Link..."
                  type="text"
                  class="p-inputtext-lg w-full"
                  v-model="linkCustomer"
                />
              </span>
            </div>
            <div class="field grid">
              <label
                for="url-internal"
                class="col-10 mb-2 md:col-3 md:mb-0 font-semibold"
                >URL dành cho nội bộ:
              </label>
              <span class="p-input-icon-right col-12 md:col-9">
                <i
                  class="pi pi-copy mr-3 cursor-pointer copy-color " style="right: 3rem !important"
                  @click="copyLinkInternal()"
                />
                <i
                  class="pi pi-window-maximize mr-3 cursor-pointer open-color"
                  @click="openLinkInternal()"
                />
                <InputText
                  id="url-internal"
                  placeholder="Link..."
                  type="text"
                  class="p-inputtext-lg w-full"
                  v-model="linkInternal"
                />
              </span>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderComponent from "./../components/Header.vue";
export default {
  inject: ["headerSetting", "urlAPI", "keyEncrypt"],
  name: "FormGetLink",
  components: { HeaderComponent: HeaderComponent },
  setup() {},
  data() {
    return {
      domainName:window.location.origin 
    };
  },
  created(){
    this.checkValidLogin().then(function (response) {
      if(response.status == false){
        this.$router.push({'path':'/login'})
      }
    })
    .catch((error) => {
      this.$router.push({'path':'/login'})
      this.$toast.add({
        severity: "error",
        summary: "Thông báo",
        detail: "Lỗi:  !" + error,
        life: 3000,
      });
    });
  },
  methods: {
    openLinkInternal(){
      window.open(this.domainName + "/"+this.linkInternal, '_blank');
    },
    openLinkCustomer(){
      window.open(this.domainName + "/"+this.linkCustomer, '_blank');
    },
    copyLinkInternal() {
      this.$toast.add({
        severity: "success",
        summary: "Thông báo",
        detail: "Copy Link nội bộ thành công!",
        life: 3000,
      });
      navigator.clipboard.writeText(this.domainName + "/survey-internal/" + this.linkInternal);
    },
    copyLinkCustomer() {
      this.$toast.add({
        severity: "success",
        summary: "Thông báo",
        detail: "Copy Link khách hàng thành công!",
        life: 3000,
      });
      navigator.clipboard.writeText(this.domainName + "/survey-customer/" + this.linkCustomer);
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
.form-get-link .p-panel-header .p-panel-title {
  color: #0c4e99 !important;
}
</style>
