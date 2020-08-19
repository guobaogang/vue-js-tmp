import { setToken } from "@/utils/token";
import { mapMutations } from "vuex";
import ajax from '@/serve/api/ajax'

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
            console.log(ajax);
            ajax({
                url: '/api/login',
                method: 'POST'
            })
                .then(res => {
                    if (res.success) {
                        setToken(res.data.token);
                        this.$router.replace({ path: '/home' });
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        },
        nameChange(event) {
            this.setName(event.target.value);
        }
    }
};