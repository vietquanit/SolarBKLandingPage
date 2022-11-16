<template>
  <div class="form-get-link container mx-auto">
    <HeaderComponent />
    <div class="grid">
      <div class="col-12">
        <!-- <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message> -->
        <Message severity="success" :life="5000" :sticky="false" v-show="this.showMessage">{{messageText}}</Message>

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
                  class="pi pi-copy mr-3 cursor-pointer"
                  @click="copyLinkCustomer()"
                />
                <InputText
                  id="url-customer"
                  placeholder="Link..."
                  type="text"
                  class="p-inputtext-lg w-full"
                  v-model="linkCustomer" :disabled="this.showMessage"
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
                  class="pi pi-copy mr-3 cursor-pointer"
                  @click="copyLinkInternal()"
                />
                <InputText
                  id="url-internal"
                  placeholder="Link..."
                  type="text"
                  class="p-inputtext-lg w-full"
                  v-model="linkInternal" :disabled="this.showMessage"
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
  name: "FormGetLink",
  components: { HeaderComponent: HeaderComponent },
  setup() {},
  data() {
    return {};
  },
  methods: {
    copyLinkInternal() {
      this.showMessage = true;
      this.messageText = 'Copy Link nội bộ thành công!';
      navigator.clipboard.writeText(this.linkInternal);
      setTimeout(() => {
          this.showMessage = false;
      }, 5000);
    },
    copyLinkCustomer() {
      this.showMessage = true;
      this.messageText = 'Copy Link khách hàng thành công!';
      navigator.clipboard.writeText(this.linkCustomer);
      setTimeout(() => {
          this.showMessage = false;
      }, 5000);
    },
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
    messageText: {
      get() {
        return this.$store.state.messageText;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "messageText",
          value: value,
        });
      },
    },
    showMessage: {
      get() {
        return this.$store.state.showMessage;
      },
      set(value) {
        this.$store.commit("setValue", {
          action: "showMessage",
          value: value,
        });
      },
    },
  },
};
</script>
<style>
</style>
