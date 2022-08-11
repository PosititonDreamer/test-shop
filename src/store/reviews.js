export default {
    state: {
        reviews: []
    },
    actions: {
        async searchReviews({commit}) {
            let reviews = localStorage.getItem('reviews') ? JSON.parse( localStorage.getItem('reviews')) : []
            commit('setReviews', reviews)
        },
        addReview({commit}, data) {
            return new Promise((resolve)=> {
                let reviews = localStorage.getItem('reviews')
                reviews = reviews ? [...JSON.parse(reviews), data] : [data]
                localStorage.setItem('reviews', JSON.stringify(reviews))
                commit('setReviews', reviews)

                let timeout = setTimeout(()=>{
                    resolve(true)
                    clearTimeout(timeout)
                }, 2000)
            })
        }
    },
    mutations: {
        setReviews(state, data) {
            state.reviews = data
        }
    },
    getters: {
        getReviews(state) {
            return state.reviews
        }
    }
}