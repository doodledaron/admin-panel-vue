<template>
    <div class="list-item">
        <div class="id"> {{ id }}</div>
        <div class="timestamp"> {{ timestamp }}</div>
        <div class="name"> {{ name }}</div>
        <div class="shape"> {{ shape }}</div>
        <img :src="`https://shapy-images.sgp1.digitaloceanspaces.com/shapes/${image}`" alt="Shape image" class="shape-image">
        <v-btn size="small" @click="handleEditButton(props.id)">Edit</v-btn>
        <v-btn size="small" @click="handleDeleteButton(props.id)" color="red lighten-5" >Delete</v-btn>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    timestamp: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    shape: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

const emit = defineEmits(
    ['edit-button-clicked', 'delete-button-clicked']
);

const handleDeleteButton = (shapeId) => {
    emit('delete-button-clicked', shapeId);

}

const handleEditButton = (shapeId) => {
    emit('edit-button-clicked', shapeId);

}

</script>

<style scoped>
.list-item {
    display: flex;
    border-radius: 15px;
    margin: 10px;
    background-color: rgb(207, 207, 207);
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #ddd;
}

.timestamp,
.name,
.shape {
    font-weight: bold;
}

.shape-image {
    width: 50px;
    height: 50px;
    margin-right: 20px;
}
</style>