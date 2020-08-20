import { mapGetters } from 'vuex';
import Header from '@/component/header/header.vue';

export default {
    name: "home",
    data() {
        return {
            pageName: "home"
        };
    },
    components:{
        'my-header': Header
    },
    computed: {
        ...mapGetters(
            { name: 'userName' }
        )
    }
};