<template>
    <div class="wrapper" :style="{display: 'flex'}">
        <div class="title"></div>
        <div class="content">
            <div class="content-item">
                <mt-button type="primary">主要按钮</mt-button>
                <div>
                    <mt-cell class="user-name">
                        <mt-field v-model="userInfo.name" label="名称" placeholder="请输入用户名" />
                    </mt-cell>
                    <mt-cell class="user-password">
                        <mt-field v-model="userInfo.password" type="password" label="密码" placeholder="请输入密码" />
                    </mt-cell>


                </div>
                <div class="bottom-wrapper">
                    <mt-button type="default" @click.native="onLogin">登录</mt-button>
                    <mt-button type="default">注册</mt-button>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                userInfo: {}
            }
        },
        methods:{
            onLogin(){
                console.log('login click')
                this.$router.push('home')


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
