import { mapGetters } from 'vuex';
export default {
    name: "page1",
    data() {
        return {
            pageName: "page1"
        };
    },
    computed: {
        ...mapGetters(
            { name: 'userName' }
        )
    }
};