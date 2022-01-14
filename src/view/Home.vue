<template>
    <div class="wrapper" :style="{display: 'flex'}">
        <div class="title"></div>
        <div class="content">
            <div class="content-item">
                <mint-button type="primary">主要按钮</mint-button>
                <van-cell-group inset>
                    <van-cell class="user-name">
                        <van-field v-model="userInfo.name" label="名称" placeholder="请输入用户名" />
                    </van-cell>
                    <van-cell class="user-password">
                        <van-field v-model="userInfo.password" type="password" label="密码" placeholder="请输入密码" />
                    </van-cell>
                    <div class="bottom-wrapper">
                        <van-button type="default" @click.native="onLogin">登录</van-button>
                        <van-button type="default">注册</van-button>
                    </div>


                </van-cell-group>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                userInfo: {}
            }
        },
        methods:{
            onLogin(){

            }

        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        align-content: center;

        .bottom-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }
</style>
