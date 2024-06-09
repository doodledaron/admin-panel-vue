<template>
	<v-container class="text-center">
		<p>Are you sure you want to delete this shape?</p>
		<v-container></v-container>
		<v-row class="d-flex justify-space-evenly">
			<v-btn @click="handleCancel">Cancel</v-btn>
			<v-btn @click="handleDelete" color="red lighten-5">Delete</v-btn>
		</v-row>
	</v-container>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import shapeService from '../services';
const emit = defineEmits(
	['close-delete-dialog']
);

const props = defineProps({
	id: {
		type: String,
		required: true
	}
});

const handleCancel = () => {
	emit('close-delete-dialog');
}

const handleDelete = async () => {
	try {
		const res = await shapeService.deleteShape(props.id)
		console.log(`Shape deleted: ${res.data}`)
		emit('close-delete-dialog');
	} catch (error) {
		console.error('Error deleting data:', error);
	}
}


</script>
