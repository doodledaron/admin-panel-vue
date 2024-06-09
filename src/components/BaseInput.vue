<template>
    <label>{{ label }}</label>
    <v-text-field v-bind="$attrs" :label="label" :placeholder="label" :value="modelValue" :rules="rules"></v-text-field>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(
    {
        label : {
            type : String,
            default : ''
        },
        modelValue: {
            type: String,
            default: ''
        },
        rules : {
            type : Array,
            default : () => []
        }
    }
);

</script>