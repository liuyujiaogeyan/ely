;
//创建组件
let tuiJian = Vue.extend({
    template:'#tuiTemp'
})
let payOnline = Vue.extend({
    template:'#payTemp',
    data:function(){
        return {
            haha:false
        };
    },
})
let orderList = Vue.extend({
   template:'#orderTemp',
    data:function(){
       return {
           isShow:false
       };
    },

});
let shopmessageList = Vue.extend({
    template:'#shopmessageTemp'
});
let homeCpn = Vue.extend({
    template:'#homeTemp',
    props:['cgoodlists']
});
let mouCpn = Vue.extend({
    template:'#mouTemp',
});
let carCpn = Vue.extend({
    template:'#carTemp',
});
let fiorderCpn = Vue.extend({
    template:'#fiorderTemp',
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
let tuijian = Vue.component('tuijian',tuiJian);
let payonline = Vue.component('payonline',payOnline);
let orderlist = Vue.component('orderlist',orderList);
let shopmessagelist = Vue.component('shopmessagelist',shopmessageList);
let mainnavcpn = Vue.component('mainnavcpn',mainNavCpn);
let homecpn = Vue.component('homecpn',homeCpn);
let moucpn = Vue.component('moucpn',mouCpn);
let carcpn = Vue.component('carcpn',carCpn);
let fiordercpn = Vue.component('fiordercpn',fiorderCpn);
let logincpn = Vue.component('logincpn',loginCpn);
let registercpn = Vue.component('registercpn',registerCpn);
let gotopcpn = Vue.component('gotopcpn',goTopCpn);
let typecpn = Vue.component('typecpn',typeCpn);
let topbannercpn = Vue.component('topbannercpn',topBannerCpn);

//配置路由
let routers = [
    {path:'/tuijian',component:tuiJian},
    {path:'/payonline',component:payOnline},
    {path:'/odlist',component:orderList },
    {path:'/smlist',component:shopmessageList },
    {path:'/home',component:homeCpn},
    {path:'/mou',component:mouCpn},
    {path:'/fiorder',component:fiorderCpn},
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
        shopLists:[],
        shopmessageLists:[],
        sshopmessageLists:[],
        tuijianList:[],
        fiorderlist:[]
    },
    router:myrouter,
    mounted(){
        this.$http.get("../data/首页商家信息.json").then(
            function (res){
                this.tuijianList = res.body.dataZone.lists;
            }
        )
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
        this.$http.get("../data/商家列表.json").then(
            function (res){
                //console.log(res);;
                this.shopLists = res.body.dataZone.lists;
            }
        );
        this.$http.get("../data/商家信息.json").then(
            function (res){
                //console.log(res);
                this.shopmessageLists = res.body.dataZone.lists;
                this.sshopmessageLists=res.body.dataZone.slists;
            }
        );
        this.$http.get("../data/确认订单.json").then(
            function (res){
                //console.log(res);
                this.fiorderlist = res.body.dataZone.lists;
            }
        );
     }
});