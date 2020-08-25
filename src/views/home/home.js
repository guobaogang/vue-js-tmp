import { mapGetters } from 'vuex';
import Header from '@/component/header/header.vue';
import Menu from '@/component/menu/menu.vue';
export default {
    name: "home",
    data() {
        return {
            pageName: "home"
        };
    },
    components: {
        'my-header': Header,
        'my-menu': Menu
    },
    methods: {

    },
    computed: {
        ...mapGetters(
            { name: 'userName' }
        )
    }
};