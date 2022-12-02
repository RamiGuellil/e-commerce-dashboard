<template>
    <NavBar/>
    <router-view></router-view>
</template>
<script>
import NavBar from './NavBar.vue'
export default {
    components: {
        NavBar
    },
    setup() {
        
    },
}
</script>