;
//创建组件
let homeCpn = Vue.extend({
    template:'#homeTemp'
});
let mainNavCpn = Vue.extend({
    template:'#mainNavTemp'
});
let topBannerCpn = Vue.extend({
    template:'#topBannerTemp',
    props:['cGoodLists']
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
let mainnavcpn = Vue.component('mainnavcpn',mainNavCpn);
let homecpn = Vue.component('homecpn',homeCpn);
let gotopcpn = Vue.component('gotopcpn',goTopCpn);
let topbannercpn = Vue.component('topbannercpn',topBannerCpn);
const vm = new Vue({
    el:"#app",
    data:{
        goodLists:[]
    },
    // mounted(){
    //     this.$http.get("data/商品类型.json").then(
    //         function (res){
    //             //console.log(res);
    //             this.goodLists = res.body.dataZone.typeLists;
    //         }
    //     );
    // }
});