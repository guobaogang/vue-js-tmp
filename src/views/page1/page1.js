export default {
    name: "page1",
    data() {
        return {
            pageName: "page1"
        };
    },
    computed: {
        name() {
            return this.$store.getters.userName
        }
    }
};