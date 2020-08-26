import {
    mapMutations,
    /* mapGetters */
} from "vuex";
import Content from '@/component/content/content.vue';

export default {
    name: "my-summary",
    data() {
        return {
            pageContent: {}
        };
    },
    components: {
        "my-content": Content
    },
    methods: {
        ...mapMutations([])
    },
    computed: {
        //...mapGetters();
        test() {
            console.log('computed' + this.$route.params)
        }
    },
    created() {
        // eslint-disable-next-line no-undef
        const context = require(`../../doc/${this.$route.params.id}.js`).default;
        this.pageContent = context;
    }
};