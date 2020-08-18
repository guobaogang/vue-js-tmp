import { mapGetters } from 'vuex';

export default {
    name: "home",
    data() {
        return {
            pageName: "home"
        };
    },
    computed: {
        ...mapGetters(
            { name: 'userName' }
        )
    }
};