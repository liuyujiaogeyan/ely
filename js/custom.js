;
//创建组件
let payOnline = Vue.extend({
    template:'#payTemp'
})
let orderList = Vue.extend({
   template:'#orderTemp'
});
let homeCpn = Vue.extend({
    template:'#homeTemp',
    props:['cgoodlists']
});
let mouCpn = Vue.extend({
    template:'#mouTemp',
});
let loginCpn = Vue.extend({
    template:'#loginTemp',
});
let registerCpn = Vue.extend({
    template:'#registerTemp',
});
let typeCpn = Vue.extend({
    template:'#typeTemp',
});
let mainNavCpn = Vue.extend({
    template:'#mainNavTemp'
});
let topBannerCpn = Vue.extend({
    template:'#topBannerTemp',
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
            },5,false);
        }
    }
});

//注册组件
let payonline = Vue.component('payonline',payOnline)
let orderlist = Vue.component('orderlist',orderList);
let mainnavcpn = Vue.component('mainnavcpn',mainNavCpn);
let homecpn = Vue.component('homecpn',homeCpn);
let moucpn = Vue.component('moucpn',mouCpn);
let logincpn = Vue.component('logincpn',loginCpn);
let registercpn = Vue.component('registercpn',registerCpn);
let gotopcpn = Vue.component('gotopcpn',goTopCpn);
let typecpn = Vue.component('typecpn',typeCpn);
let topbannercpn = Vue.component('topbannercpn',topBannerCpn);

//配置路由
let routers = [
    {path:'/payonline',component:payOnline},
    {path:'/odlist',component:orderList },
    {path:'/home',component:homeCpn},
    {path:'/mou',component:mouCpn},
    {path:'/login',component:loginCpn},
    {path:'/register',component:registerCpn},
    {path:'/',component:homeCpn},
    {path:'*',redirect:'/home'},
];
//生成路由实例
let myrouter = new VueRouter({
    routes:routers
});

const vm = new Vue({
    el:"#app",
    data:{
        goodLists:[],
        badLists:[],
    },
    router:myrouter,
    mounted(){
         this.$http.get("../data/商品类型.json").then(
               function (res){
                //console.log(res);
                 this.goodLists = res.body.dataZone.typeLists;
            }
         );
        this.$http.get("../data/我的订单.json").then(
            function (res){
                //console.log(res);
                this.badLists = res.body.dataZone.lists;
            }
        );

     }
});