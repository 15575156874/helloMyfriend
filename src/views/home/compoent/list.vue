<template>
    <div class="HomeList">
        <div class="title">titile</div>
        <div class="time">
            <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3877020000,3234931958&fm=58" alt="">
            <span>发表于20180819</span>
        </div>
        <div class="descript">
            <div class="title">小标题</div>
            <div class="simple">简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信简信</div>
        </div>
        <div class="img"> <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3877020000,3234931958&fm=58" alt=""></div>
        <div class="more">
            <span>查看更多</span>
            <div class="border_bottom"></div>
        </div>

    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class HomeList extends Vue {
    created() { }
}
</script>
<style  scoped lang='stylus'>
.HomeList {
    text-align: center;
    margin-top: 30px;
    min-height: 300px;
    background: #f3f3f3;
    max-width: 600px;
    width: 100%;
    box-shadow: 5px 8px 14px 0px #f3f3f3;

    .title {
        font-size: 40px;
        color: #c3b9b9;
    }

    .time {
        x = 20px;

        img {
            width: x;
            height: x;
            margin-right: 10px;
        }
    }

    .descript {
        c = black;
        padding: 0px 30px;

        .title {
            font-size: 30px;
            color: c;
            text-align: left;
        }

        .simple {
            font-size: 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }
    }

    .img {
        margin-top: 20px;

        img {
            width: 50%;
        }
    }

    .more {
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;

        span {
            cursor: pointer;
        }

        .border_bottom {
            width: 20%;
            margin: auto;
            border-bottom: 1px solid #bfb0b0;
            position: absolute;
            left: 50%;
            bottom: -5px;
            transform: translateX(-50%);
        }
    }
}
</style>
