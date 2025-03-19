<template>
    <div class="container">
        <HeaDer/>
        <Child @STU-Company="handleChildEvent" />
        <div class="Tips">
            <ConTainer/>
            <Find/>
            <component :is="comName"></component>
        </div>
    </div>
</template>
<script>
import HeaDer from './HeaDer.vue'
import NaviGation from './NaviGation.vue'
import ConTainer from './ConTainer.vue'
import Find from './FinDing.vue'
import EmpLoyee from './EmpLoyee.vue'
import EmpLoyeer from './EmpLoyeer.vue'
import Child from './NaviGation.vue'
import InputEmployeerVue from './InputEmployeer.vue'
import AdMin from './AdMin.vue'
export default{
    data(){
        return{
            comName:'EmpLoyee'
        }
    },
    components:{
        HeaDer,
        NaviGation,
        ConTainer,
        Find,
        EmpLoyee,
        Child,
        EmpLoyeer,
        InputEmployeerVue,
        AdMin
    },
    methods:{
        handleChildEvent(data){
            console.log(data.message)
            if(data.message=='Company-Declare')
            {
                this.comName='EmpLoyeer'
            }
            else if(data.message=='STU-Company')
            {
                this.comName='EmpLoyee'
            }
            else if(data.message =='STU-Employeer')
            {
                this.comName='InputEmployeerVue'
            }
            else if(data.message=='STU-Admin')
            {
                this.comName='AdMin'
            }
        }
    }
}
</script>
<style>
.container{
    background-color: #b5e9e2;
}
.Tips{
    margin: 0px auto auto 199px;
    padding: 0px;
    position: absolute;
    top:49px;
    left:0px;
    width:1704px;
}
</style>