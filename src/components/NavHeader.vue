<template>
    <header class="bg-indigo-200 sticky top-0  md:h-28 ">
        <div class="flex justify-between items-center px-4 py-3 md:w-2/3 md:mx-auto md:h-28">
            <div @click="toggleSideNav" class="hover:cursor-pointer md:hidden">
                <div v-if="!showSideNav">
                    <MenuOutlined />
                </div>
                <div v-if="showSideNav">
                    <i class="fa fa-times text-2xl text-indigo-900 w-full" aria-hidden="true"></i>
                </div>
            </div>

            <div>
                <p class="text-2xl md:text-4xl">E-facilities</p>
            </div>
            <div>
                <a-dropdown>
                    <div> <i class="fa fa-ellipsis-v text-2xl hover:cursor-pointer md:text-4xl " aria-hidden="true"></i>
                    </div>
                    <template #overlay>
                        <a-menu mode="inline">
                            <a-menu-item>
                                <span>View Profile</span>
                            </a-menu-item>
                            <a-menu-item key="1">
                                <LogoutOutlined />
                                <span class="nav-text ms-4">Sign Up</span>
                            </a-menu-item>
                            <a-menu-item key="2">
                                <LoginOutlined />
                                <span class="nav-text ms-4">Login</span>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>

            </div>
        </div>

        <div v-if="showSideNav" @click.self="closeSidenav">
            <a-menu theme="dark" mode="inline"
                class="border-t border-indigo-900 bg-indigo-100 fixed left-0 top-17 z-40 h-screen w-64 px-1 py-3 text-indigo-900 items-center md:hidden">
                <a-menu-item key="1" icon-size="24" class="hover:bg-indigo-900" @click="toggleSideNav">
                    <router-link :to="{ name: 'home' }">
                        <HomeOutlined />
                        <span class="nav-text ">Home</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="3" @click="toggleSideNav">
                    <InfoCircleOutlined />
                    <span class="nav-text">How it works</span>
                </a-menu-item>
                <a-menu-item key="4" @click="toggleSideNav">
                    <router-link :to="{ name: 'ContactView' }">
                        <MailOutlined />
                        <span class="nav-text">Contact Us</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="5" @click="toggleSideNav">
                    <LogoutOutlined />
                    <span class="nav-text">Sign Up</span>
                </a-menu-item>
                <a-menu-item key="6" @click="toggleSideNav">
                    <LoginOutlined />
                    <span class="nav-text">Login</span>
                </a-menu-item>
            </a-menu>
        </div>

    </header>
    <sub-header class="hidden md:flex justify-start  bg-indigo-500 sticky top-0">
        <a-menu class="flex bg-indigo-500 w-1/2 justify-start items-center mx-auto h-28">
            <a-menu-item key="1" class=" text-2xl h-full ">
                <router-link :to="{ name: 'home' }"
                    class="flex items-center justify-center hover:bg-indigo-200 hover:rounded-lg">
                    <HomeOutlined style="font-size: 20px;" />
                    <span class="nav-text ">Home</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="3" class="text-2xl">
                <router-link :to="{ name: 'home' }"
                    class="flex items-center justify-center hover:bg-indigo-200 hover:rounded-lg">
                    <InfoCircleOutlined style="font-size: 20px;" />
                    <span class="nav-text">How it works</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="4" class="text-2xl">
                <router-link :to="{ name: 'ContactView' }"
                    class="flex items-center justify-center hover:bg-indigo-200 hover:rounded-lg">
                    <MailOutlined style="font-size: 20px;" />
                    <span class="nav-text">Contact Us</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="5" class="text-2xl">
                <router-link :to="{ name: 'home' }"
                    class="flex items-center justify-center hover:bg-indigo-200 hover:rounded-lg">
                    <LogoutOutlined style="font-size: 20px;" />
                    <span class="nav-text">Sign Up</span>
                </router-link>
            </a-menu-item>
            <a-menu-item key="6" class="text-2xl">
                <router-link :to="{ name: 'home' }"
                    class="flex items-center justify-center hover:bg-indigo-200 hover:rounded-lg">
                    <LoginOutlined style="font-size: 20px;" />
                    <span class="nav-text">Login</span>
                </router-link>
            </a-menu-item>
        </a-menu>
    </sub-header>
</template>

<script setup lang="ts">
import { MailOutlined, HomeOutlined, LogoutOutlined, MenuOutlined, InfoCircleOutlined, LoginOutlined } from '@ant-design/icons-vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue'
const showSideNav = ref(false)
const toggleSideNav = () => {
    showSideNav.value = !showSideNav.value
}

const closeSidenav = () => {
    showSideNav.value = false
}

// Event listener to close side nav when clicking outside of it
document.addEventListener('mousedown', (event) => {
    const sideNav = document.querySelector('.ant-menu-inline');
    if (sideNav && !sideNav.contains(event.target)) {
        showSideNav.value = false;
    }
});
</script>