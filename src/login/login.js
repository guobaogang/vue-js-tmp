import { setToken } from "@/utils/token";
import { mapMutations } from "vuex";

export default {
    name: "login",
    data() {
        return {
            pageName: "login",
            name: this.$store.getters.userName
        };
    },
    methods: {
        ...mapMutations(['setName']),
        login() {
            setToken();
            this.$router.replace({ path: '/home' });
        },
        nameChange(event) {
            this.setName(event.target.value);
        }
    }
};