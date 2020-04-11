import { mapState, mapGetters } from 'vuex'

export default {
  computed:{
    ...mapState({
       User: state => state.user.currentUser
    }),
    ...mapGetters({
      isLoggedIn : 'user/isLoggedIn',
    })
},
  data(){
    return {
      
    }
  }
};
