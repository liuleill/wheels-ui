<template>
    <article class="markdown-body" v-html="content">
    </article>
</template>

<script lang="ts">
import {ref} from 'vue';
import { setTimeout } from 'timers/promises';
export default{
    props:{
        content:{
            type:String,
            required:true
        }
    }
}
</script>
