export default {
    state: {
        basket: []
    }, actions: {
        searchBasket({commit}) {
            let basket = localStorage.getItem('basket')
            if (basket) commit('setBasket', JSON.parse(basket))
        }, addProduct({commit}, product) {
            return new Promise((resolve, reject) => {
                let timeout = setTimeout(() => {
                    let basket = localStorage.getItem('basket')
                    basket = basket ? [...JSON.parse(basket), product] : [product]
                    localStorage.setItem('basket', JSON.stringify(basket))
                    commit('setBasket', basket)
                    resolve(true)
                    clearTimeout(timeout)
                }, 2000)

            })
        }, removeProduct({commit}, product) {
            return new Promise((resolve, reject) => {
                let timeout = setTimeout(() => {
                    let basket = localStorage.getItem('basket')
                    basket = JSON.parse(basket).filter(item => item.id !== product.id)
                    localStorage.setItem('basket', JSON.stringify(basket))
                    commit('setBasket', basket)
                    resolve(true)
                    clearTimeout(timeout)
                }, 2000)

            })
        }
    }, mutations: {
        setBasket(state, data) {
            state.basket = data
        }
    }, getters: {
        getBasket(state) {
            return state.basket
        }
    },
}