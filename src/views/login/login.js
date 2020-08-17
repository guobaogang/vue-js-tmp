import { setToken } from "../../utils/token";

export default {
    name: "login",
    data() {
        return {
            pageName: "login",
        };
    },
    methods: {
        login() {
            setToken();
            this.$router.replace({ path: '/home' });
        }
    }
};