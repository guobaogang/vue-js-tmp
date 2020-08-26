import {
    mapMutations,
    /* mapGetters */
} from "vuex";
import Content from '@/component/content/content.vue';
import pageContent from './pageContent';

export default {
    name: "my-summary",
    data() {
        return {
            pageContent
        };
    },
    components: {
        "my-content": Content
    },
    methods: {
        ...mapMutations([])
    },
    computed: {
        //...mapGetters()
    }
};