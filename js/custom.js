;
//创建组件
let mainNavCpn = Vue.extend({
    template:'#mainNavTemp'
});
let goTopCpn = Vue.extend({
    template:'#goTopTemp',
    data:function (){
        return {
            topDistance : 0
        };
    },
    mounted(){
        window.addEventListener('scroll',this.getTopDistance);
    },
    methods:{
        getTopDistance:function (){
            this.topDistance = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        },
        goTop:function (){
            let timeCounter = setInterval(function (){
                if(document.documentElement.scrollTop>0||document.body.scrollTop>0||window.pageYOffset>0) {
                    document.documentElement.scrollTop -= 10;
                    document.body.scrollTop -= 10;
                    window.pageYOffset -= 10;
                }else {
                    clearInterval(timeCounter);
                }
                console.log("~~~~~~~~~~~~~~");
            },5);
        }
    }
});

//注册组件
let mainnavcpn = Vue.component('mainnavcpn',mainNavCpn);
let gotopcpn = Vue.component('gotopcpn',goTopCpn);
const vm = new Vue({
    el:"#app",
    data:{

    }
});