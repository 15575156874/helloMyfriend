<template>
    <div class="home center">
        <list v-for="a in 10" :key="a"></list>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import list from "./compoent/list.vue"
@Component({
    components: { list }
})
export default class Home extends Vue {
    created() { }
}
</script>
<style  scoped lang='stylus'>
.home {
    flex-direction: column;
}
</style>
