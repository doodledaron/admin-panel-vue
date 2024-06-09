<template>

    <div v-if="isVisible" class="dialog-overlay">
        <div class="dialog">
            <div class="dialog-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    isVisible: Boolean,
    title: String
});




</script>

<style>
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    
    height: 100%;
    background: rgba(0, 0, 0, 0.247);
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-content {
    background: white;
    width: 400px; 
    min-height: 150px;
    max-height: 500px;
    max-width: 600px;
    padding: 20px;
    border-radius: 5px;
   
}
</style>