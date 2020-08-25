import { mapMutations, mapGetters } from "vuex";

export default {
    name: "my-summary",
    data() {
        return {
            pageName: "summary",
        };
    },
    methods: {
        ...mapMutations([])
    },
    computed: {
        //...mapGetters()
    }
};