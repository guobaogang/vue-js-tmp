const mutations = {
    setName(state, payload) {
        console.log(payload);
        state.name = payload;
    }
}

export default mutations;