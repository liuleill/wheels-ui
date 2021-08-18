<template>
<div>
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo" />
</div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Tabs1Demo from "./Tabs1.demo.vue";
export default{
    component:{
        Demo
    },
    setup(){
        Tabs1Demo
    }
}
</script>