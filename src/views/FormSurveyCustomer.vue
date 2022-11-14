<template>
    <div class="survey-customer container mx-auto">
        <HeaderComponent />
        <div class="col-12">
            <p class="text-left">Kính chào Anh / Chị,</p>
            <p class="text-left">
                Cảm ơn Anh / Chị đã tham gia khảo sát cùng SolarBK. 
                Đây là khảo sát nhằm nâng cao chất lượng dịch vụ và KHÔNG yêu cầu Anh / Chị phải đăng nhập hoặc cung cấp bất kì thông tin cá nhân nào như email, số điện thoại, họ và tên...</p>
            <p class="text-left">Câu trả lời của Anh / Chị sẽ được bảo mật và chỉ được sử dụng cho mục đích nghiên cứu nội bộ và nâng cao chất lượng sản phẩm của SolarBK</p>
            <p class="text-left">Anh / Chị vui lòng đánh giá trong 1 lần duy nhất.</p>
            <p class="text-left">SolarBK xin cảm ơn Anh / Chị</p>
        </div>
        <div class="col-12">
            <p class="text-left">Bạn có góp ý nào để cải thiện sản phẩm / dịch vụ được tốt hơn không?</p>
            <Textarea :autoResize="true" placeholder="Nhập góp ý của bạn vào đây..." rows="5" cols="30" class="w-full"/>
        </div>
        <div class="col-12">
            <Button label="Đăng nhập" class="btn-primary btn-login text-white font-bold mt-4 pt-3 pb-3 pl-8 pr-8 border-round-lg" @click="handleSubmit()"/>
        </div>
    </div>
</template>

<script>
import HeaderComponent from './../components/Header.vue'
export default {
    name: 'SurveyCustomer',
    components: {'HeaderComponent': HeaderComponent},
    methods: {
        handleSubmit(){
            console.log('done')
        }
    },
}
</script>
