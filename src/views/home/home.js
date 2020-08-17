export default {
    name: "home",
    data() {
        return {
            pageName: "home"
        };
    },
    computed: {
        name() {
            return this.$store.getters.userName
        }
    }
};