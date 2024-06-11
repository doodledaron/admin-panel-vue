<template>
	<p>Edit the Shape</p>
	<v-container>
	</v-container>
	<v-form @submit.prevent>
		<v-text-field :rules="nameRules" v-model="event.name" label="Name"></v-text-field>
		<v-select v-model="event.shape" :items="shapeOptions" label="Shapes"></v-select>
		<v-select v-model="event.color" :items="colorOptions" label="Colors"></v-select>
		<v-row class="d-flex justify-space-evenly">
			<v-btn color="red" @click="handleCancel">Cancel</v-btn>
			<v-btn type="submit" @click="handleConfirm" color="primary">Confirm</v-btn>
		</v-row>
		<v-container class="mt-5">
			<v-alert v-if="showError">Please check the rules</v-alert>
		</v-container>
	</v-form>

</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import shapeService from '../services';
import { validateForm } from '../utils';
import cloneDeep from 'lodash/cloneDeep';
const shapeOptions = ['triangle', 'circle', 'square']
const colorOptions = ['red', 'blue', 'green', 'yellow']

const event = ref({
	name: '',
	shape: '',
	color: '',
});

const originalEvent = ref({
	name: '',
	shape: '',
	color: '',
});

const showError = ref(false)


const props = defineProps({
	id: {
		type: String,
		required: true
	}
});

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


const emit = defineEmits(
	['close-edit-shape-dialog']
)

onMounted(() => {
	fetchShapeDataById(props.id)
})

const handleCancel = () => {
	emit('close-edit-shape-dialog');
}

const handleConfirm = async () => {
	if (validateForm(event)) {
		const changes = getChanges(originalEvent.value, event.value)
		try {
			const res = await shapeService.editShape(props.id, changes)
			console.log(res.data)
			emit('close-edit-shape-dialog')
		} catch (error) {
			console.log(error)
		}
	} else {
		showError.value = true
	}


}

const fetchShapeDataById = async (id) => {
	try {

		const res = await shapeService.fetchShahpeDataById(id);
		event.value = res.data;
		//use clone deep to deep copy 
		originalEvent.value = cloneDeep(res.data);
		console.log(event.value); 
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

const getChanges = (original, updated) => {
	const changes = {}
	for (const key in original) {
		if (original[key] !== updated[key]) {
			changes[key] = updated[key]
		}
	}
	console.log(changes)
	return changes
}

</script>