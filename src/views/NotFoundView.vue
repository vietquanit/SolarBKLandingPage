<template>
    <div class="container mx-auto">
        <Image :src="require('./../assets/404.png')" alt="404 image" imageClass="img"/>
        <h1 class="uppercase text-red-600">Link không hợp lệ</h1>
        <Button @click="$router.go(-1)">Quay lại</Button>
    </div>
</template>
<script>

export default {
    name: "NotFoundView",
    setup() {
        
    },
}
</script>
<style>
.img{
    width: 100%;
    max-width: 800px;
    max-height: 100vh;
}
</style>