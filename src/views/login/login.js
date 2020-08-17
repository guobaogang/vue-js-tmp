import { setToken } from "../../utils/token";

export default {
    name: "login",
    data() {
        return {
            pageName: "login",
            name: this.$store.getters.userName
        };
    },
    methods: {
        login() {
            setToken();
            this.$router.replace({ path: '/home' });
        },
        nameChange(event) {
            this.$store.dispatch('setName', event.target.value);
        }
    }
};