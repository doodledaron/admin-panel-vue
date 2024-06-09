<template>
    <v-row class=" mt-1 justify-end">
        <v-btn @click="showDialogForm" size="large">Add shape</v-btn>
    </v-row>
</template>

<script setup>
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: 'Add shape'
    }
});


const emit = defineEmits(['add-button-clicked']);


const showDialogForm = () => {
    emit('add-button-clicked');
}
</script>