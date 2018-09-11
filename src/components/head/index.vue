<template>
    <div class="Head center">
        <div class="title">title</div>
        <div>mylagule</div>
        <div class="row tab center">
            <div v-for="(a,index) in 4" :key="index" class="tabList" :class="{marginLeft:index!==0}">
                <div style="cursor: pointer;">
                    <div>img</div>
                    <div style="margin-top:5px">{{a}}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Head extends Vue {
    created() { }
}
</script>
<style   lang='stylus'>
.Head {
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
    }

    .tab {
        margin-top: 20px;

        .tabList {
        }
    }
}

.marginLeft {
    margin-left: 10%;
}
</style>
