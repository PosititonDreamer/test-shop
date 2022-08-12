export default {
    state: {
        reviews: []
    },
    actions: {
        async searchReviews({commit}) {
            let reviews = JSON.parse( localStorage.getItem('reviews')) ?? []
            commit('setReviews', reviews)
        },
        addReview({commit}, data) {
            return new Promise((resolve)=> {
                setTimeout(()=>{
                    commit('setReviews', data)
                    resolve(true)
                }, 2000)
            })
        }
    },
    mutations: {
        setReviews(state, review) {
            state.reviews.push(review)
            localStorage.setItem('reviews', JSON.stringify(state.reviews))
        }
    },
    getters: {
        getReviews(state) {
            return state.reviews
        }
    }
}