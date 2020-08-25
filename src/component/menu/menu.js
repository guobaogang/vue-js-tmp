//import { mapMutations, mapGetters } from "vuex";
import menu_lists from './menu_lists';

export default {
    name: "my-menu",
    data() {
        return {
            menu_lists
        };
    },
    methods: {
        /* ...mapMutations([]),
        computed: {
            ...mapGetters()
        }, */
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    computed: {
        menu_lists_width_sub: function () {
            return this.menu_lists.filter(menu => menu.children && menu.children.length)
        },
        menu_lists_no_sub: function () {
            return this.menu_lists.filter(menu => !menu.children || !menu.children.length)
        },
    }
};