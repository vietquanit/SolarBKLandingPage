<template>
    <div class="login container mx-auto">
      <HeaderComponent />
      <div class="col-12">
        <div class="box-login flex col-3 flex-column">
          <div class="input-login border-round-md">
            <div class="col-10 mx-auto">
              <h3 class="uppercase text-center color-primary text-3xl">Đăng nhập</h3>
              <div class="field grid mb-4 ">
                <!-- <label for="username" class="col-10 mb-2 md:col-2 md:mb-0 font-semibold">Username: </label> -->
                <div class="col-12 md:col-12">
                    <InputText id="username" placeholder="Nhập Username...." type="text" class="w-full p-inputtext-lg border-round-md" />
                </div>
              </div>
              <div class="field grid pb-4">
                  <!-- <label for="password" class="col-10 mb-2 md:col-2 md:mb-0 font-semibold">Password: </label> -->
                  <div class="col-12 md:col-12">
                      <InputText id="password" placeholder="Nhập password...."  type="password" class="w-full p-inputtext-lg border-round-md" />
                  </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <Button label="Đăng nhập" class="btn-primary btn-login text-white font-bold mt-4 pt-3 pb-3 pl-8 pr-8 border-round-lg" @click="handleLogin()"/>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import HeaderComponent from './../components/Header.vue'
export default {
    name: 'LoginView',
    components: {'HeaderComponent': HeaderComponent},
    data() {
      return {
        account:'',
        password:''
      }
    },
    methods:{
      handleLogin(){
        console.log('click: ')
        this.$router.push({path: 'input-form'})
      }
    }
}
</script>

<style scoped lang="scss">
.login{
  img {
  }
  .box-login{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    .input-login{
      background-color: #e6e6e6;
    }
    input{
      background: transparent;
    }
  }
  .btn-login{
  }
}
</style>