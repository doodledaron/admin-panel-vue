<template>
    <v-sheet>
        <v-form>
            <h2>Add a shape</h2>
            <BaseInput v-model="event.name" :rules="nameRules" label="Name" placeholder="Username" type="text" />
            <v-select :rules="shapeRules" v-model="event.shape" :items="shapeOptions" label="Shapes"></v-select>
            <v-select :rules="colorRules" v-model="event.color" :items="colorOptions" label="Colors"></v-select>
            <v-container></v-container>
            <v-row class="d-flex justify-space-evenly">
                <v-btn color="red" @click="handleCancel">Cancel</v-btn>
                <v-btn type="submit" @click="handleConfirm" color="primary">Confirm</v-btn>
            </v-row>
            <v-container class="mt-2">
                <v-alert v-if="showError">Please fill in all fields and check the rules</v-alert>
            </v-container>
        </v-form>
    </v-sheet>
</template>

<script setup>
import BaseInput from './BaseInput.vue';
import { validateForm } from '../utils'
import { ref } from 'vue';
import shapeService from '../services'
const shapeOptions = ['triangle', 'circle', 'square']
const colorOptions = ['red', 'blue', 'green', 'yellow']

const event = ref({
    name: '',
    shape: '',
    color: '',
});

const showError = ref(false)

const emit = defineEmits(['close-form-dialog'])


// Define field rules
const nameRules = [
    value => {
        if (!value) {
            return 'Name cannot be empty';
        } else if (value.length > 10) {
            return 'Name cannot exceed 10 characters.';
        } else if (/\d/.test(value)) {
            return 'Name cannot contain numbers.';
        } else {
            return true;
        }
    },
];

const colorRules = [
    value => {
        if (value) return true

        return 'You must select a color.'
    },
];

const shapeRules = [
    value => {
        if (value) return true

        return 'You must select a shape.'
    },
];


const handleConfirm = async () => {
    //create shape only if all fields are filled
    if (validateForm(event)) {
        console.log(
            `Name: ${event.name}, Shape: ${event.shape}, Color: ${event.color}, event value : ${event.value}`
        )
        try {
            const res = await shapeService.createShape(event.value)
            console.log(` Shape created successfulyy ${res.data}`)
            emit('close-form-dialog');
        } catch (error) {
            console.error('Error posting data:', error);
        }
    } else {
        showError.value = true
        console.error('Please fill in all fields and check the rules');
    }
}
const handleCancel = () => {
    emit('close-form-dialog');
}

</script>
