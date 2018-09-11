<template>
    <div>
        <div class="head"></div>
        <div class="body">
            <div class="body_main">
                <myHead></myHead>
                <router-view></router-view>
            </div>
            <div class="body_left"></div>
            <div class="body_right"></div>
        </div>
        <div class="foot">5</div>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Layou extends Vue {
}
</script>
<style  scoped lang='stylus'>
footHeight = 20px;

.head {
    background: black;
    border-radius: 10px;
    height: 10px;
}

.body {
    pddingwidth = 15% vw;
    overflow: hidden;
    padding: 0px pddingwidth;
    padding-bottom: footHeight;

    .body_main {
        width: 100%;
        float: left;
        height: 100%;
        min-height: -webkit-fill-available;
        text-align: center;
    }

    .body_left {
        width: pddingwidth;
        // float: left;
        // margin-left: -100%;
        // transform: translateX(-100%);
        position: fixed;
        left: 0px;
        height: 100%;
    }

    .body_right {
        float: left;
        width: pddingwidth;
        // margin-left: - pddingwidth;
        // transform: translateX(100%);
        position: fixed;
        right: 0px;
        height: 100%;
    }
}

.foot {
    height: footHeight;
    position: fixed;
    bottom: 0px;
    width: 100%;
}
</style>
