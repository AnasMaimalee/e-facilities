<template>
    <header class=" bg-indigo-200 sticky top-0">
        <div class="flex justify-between items-center px-4 py-3">
            <div @click="toggleSideNav">
                <div v-if="!showSideNav">
                    <i class="fa fa-bars text-2xl text-indigo-900 w-full" aria-hidden="true"></i>
                </div>
                <div v-if="showSideNav">
                    <i class="fa fa-times text-2xl text-indigo-900 w-full" aria-hidden="true"></i>
                </div>

            </div>

            <div>
                <p class="text-2xl">E-facilities</p>
            </div>
            <div>
                <i class="fa fa-user-circle text-2xl" aria-hidden="true"></i>
            </div>
        </div>
        <div v-if="showSideNav" class="border-t border-indigo-900 bg-indigo-100 fixed left-0 top-15 h-screen w-64">
            <router-link class="block" :to="``">Home</router-link>
            <router-link class="block" :to="``">About</router-link>
            <router-link class="block" :to="``">Contact</router-link>
        </div>

    </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue'
const showSideNav = ref(false)
const toggleSideNav = () => {
    showSideNav.value = !showSideNav.value
}
</script>

<style scoped>
/* Add custom styles here */
</style>