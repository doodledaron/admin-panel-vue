<template>
    <v-toolbar color="black">
        <v-progress-linear :active="loading" :indeterminate="loading" :height="10" color="grey" absolute
            bottom></v-progress-linear>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Shapy Admin</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn @click="handleLogOut">
            Logout
        </v-btn>
    </v-toolbar>
</template>

<script setup>
import { defineProps } from 'vue';
import axios from 'axios';
import services from '../services';
import { useRouter } from 'vue-router';
const router = useRouter()

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
})

const handleLogOut = () => {
    try {
        services.logOutAdmin();
        router.push('/log-in-sign-up')
        axios.defaults.headers.common['Authorization'] = ''
    } catch (error) {
        console.log(error)
    }

}
</script>

<style scoped>
.navbar {
    background-color: #333;
    overflow: hidden;
    display: flex;
    align-items: center;

}

.navbar-title {
    color: white;
    padding: 14px 20px;
    font-size: 24px;
    font-weight: bold;
}

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar li {
    color: white;
    padding: 14px 20px;
}

.navbar a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
}

.navbar a:hover {
    background-color: #ddd;
    color: black;
}
</style>