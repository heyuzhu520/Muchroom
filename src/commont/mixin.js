import BackTop from '../components/content/backTop/BackTop'

export let backTopMixin = {
  data(){
    return{
      isShowTop:false,
    }
  },
  methods:{
    backtop(){
      //$refs访问ref属性的组件 
      this.$refs.scroll.bs.scrollTo(0,0,2000)  //scrollTo(x,y,时间) 移动到
    },
    getBackTopShow(position){
      this.isShowTop= position.y < -800
    }
  },
  components:{
    BackTop
  }
}
//直接用js包装上,