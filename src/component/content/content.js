import ContentItem from '../contentItem/contentItem.vue';

export default {
    name: "page-content",
    data() {
        return {
            level: 1
        };
    },
    props: {
        content: Object
    },
    components: {
        "content-item": ContentItem
    },
    methods: {},
    computed: {}
};