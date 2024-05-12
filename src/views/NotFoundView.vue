<template>
    <div class="min-h-screen m-4">
        <div class="bg-indigo-300 mb-3 px-4 py-4 shadow-2xl rounded-lg items-center md:w-1/2 md:mx-auto">
            <div>
                <p class="flex text-7xl justify-center text-xenter md:text-9xl">404</p>
            </div>
            <div class="mt-4">
                <p class="flex text-4xl justify-center items-center md:text-6xl">Page Not Found</p>
                <p class="flex text-lg mt-4 justify-center px-4 md:text-2xl md:mx-auto">
                    The above error occurred while the Web server was processing your request.
                </p>
                <p class="flex mt-4  justify-center px-4 md:text-2xl ">
                    Please contact us if you think this is a server error. Thank you.
                </p>

                <button @click="backHome"
                    class="flex mt-5 mx-auto rounded-xl px-4 py-3 bg-indigo-700 text-gray-100 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150 md:h-12 md:text-3xl">
                    <HomeOutlined />
                    <span class="ms-4">
                        Back To Home
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MailOutlined, HomeOutlined, LogoutOutlined, MenuOutlined, InfoCircleOutlined, LoginOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const backHome = () => {
    router.push('/')
}
</script>

<style scoped></style>
