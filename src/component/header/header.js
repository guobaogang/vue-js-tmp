import { removeToken } from '@/utils/token'

export default {
    name: "my-header",
    data() {
        return {

        };
    },
    methods: {
        logout() {
            removeToken();
            this.$router.replace({ path: '/login' });
        }
    }
};