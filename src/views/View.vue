<template>
    <NavigationBar :loading="loading"/>
    <v-container v-if="showData">

        <SearchAndAddButtonRow @add-button-clicked="showDialog" />
        <v-container></v-container>
        <ListItem v-for="item in items" :key="String(item.id)" :id="String(item.id)" :timestamp="item.timestamp"
            :name="item.name" :shape="item.shape" :image="item.image" @edit-button-clicked="handleEditButton"
            @delete-button-clicked="handleDeleteButton" />
        <Dialog :isVisible="isAddShapeDialogVisible">
            <template #content>
                <AddShapeForm @close-form-dialog="hideDialog" />
            </template>
        </Dialog>

        <Dialog :isVisible="isDeleteShapeDialogVisible">
            <template #content>
                <DeleteDialogContent :id="id" @close-delete-dialog="hideDialog" />
            </template>
        </Dialog>

        <Dialog :isVisible="isEditShapeDialogVisible">
            <template #content>
                <v-container class="text-center">
                    <EditShapeForm :id="id" @close-edit-shape-dialog="hideDialog" />
                </v-container>
            </template>
        </Dialog>
    </v-container>
    <v-container v-if="!showData">
        <v-alert text="Error in server: Shape data cannot be fetched" title="Server error" type="error">
        </v-alert>
    </v-container>
</template>

<script setup>
import shapeService from '../services'
import { formatTimeStamp, extractFileName } from '../utils'
import { ref, onMounted } from 'vue';
import ListItem from '../components/ListItem.vue';
import SearchAndAddButtonRow from '../components/SearchAndAddButtonRow.vue';
import NavigationBar from '../components/NavigationBar.vue';
import Dialog from '../components/Dialog.vue';
import AddShapeForm from '../components/AddShapeForm.vue';
import DeleteDialogContent from '../components/DeleteDialogContent.vue'
import EditShapeForm from '../components/EditShapeForm.vue'

const items = ref([]);
const isAddShapeDialogVisible = ref(false);
const isEditShapeDialogVisible = ref(false);
const isDeleteShapeDialogVisible = ref(false);
const id = ref('');
const showData = ref(true)
const loading = ref(true)

onMounted(() => {
    fetchShapeData();
});




const fetchShapeData = () => {
    loading.value = true;
    shapeService.fetchShapeData().then(
        res => {


            items.value = res.data.map(shape => ({
                id: shape.id,
                timestamp: formatTimeStamp(shape.timestamp),
                name: shape.name,
                shape: shape.shape,
                image: extractFileName(shape.image)
            })); // Assuming response.data is an array of objects
        console.log(items.value)
        }
        


    ).catch(err => {
        showData.value = false;
        console.log(err);
    }).finally(
        () => {
            loading.value = false;
        }
    
    );
}


const showDialog = () => {
    isAddShapeDialogVisible.value = true;
    console.log(isAddShapeDialogVisible.value);
}

const hideDialog = () => {
    isAddShapeDialogVisible.value = false;
    isDeleteShapeDialogVisible.value = false;
    isEditShapeDialogVisible.value = false;
    console.log(isDeleteShapeDialogVisible.value);
    fetchShapeData();
}

const handleEditButton = (shapeId) => {
    isEditShapeDialogVisible.value = true;
    id.value = shapeId
    console.log(isEditShapeDialogVisible.value);
}

const handleDeleteButton = (shapeId) => {
    //shape id passed to here from ListItem
    isDeleteShapeDialogVisible.value = true;
    id.value = shapeId

    console.log(id.value)
    console.log(isDeleteShapeDialogVisible.value);
}
</script>

<script>
export default {
    name: 'View',
    components: {
        ListItem,
        SearchAndAddButtonRow,
        Dialog,
        DeleteDialogContent,
        EditShapeForm
    }
}
</script>