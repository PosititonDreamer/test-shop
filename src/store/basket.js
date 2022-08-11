export default {
    state: {
        basket: []
    },
    actions: {
        searchBasket({commit}) {
            let basket = localStorage.getItem('basket')
            if (basket) commit('setBasket', JSON.parse(basket))
        },
        addProduct({commit}, product) {
            return new Promise((resolve) => {
                let timeout = setTimeout(() => {
                    let basket = localStorage.getItem('basket')
                    basket = basket ? [...JSON.parse(basket), product] : [product]
                    localStorage.setItem('basket', JSON.stringify(basket))
                    commit('setBasket', basket)
                    resolve(true)
                    clearTimeout(timeout)
                }, 2000)

            })
        },
        removeProduct({commit}, product) {
            return new Promise((resolve) => {
                let timeout = setTimeout(() => {
                    let basket = localStorage.getItem('basket')
                    basket = JSON.parse(basket).filter(item => item.id !== product.id)
                    localStorage.setItem('basket', JSON.stringify(basket))
                    commit('setBasket', basket)
                    resolve(true)
                    clearTimeout(timeout)
                }, 2000)

            })
        },
        addOrder({commit}, data) {
            return new Promise((resolve) => {
                let timeout = setTimeout(() => {
                    let orders = localStorage.getItem('orders')
                    let newOrder = {user: data, products: this.state.basket.basket}
                    orders = orders? [...JSON.parse(orders), newOrder] : [newOrder]
                    localStorage.setItem('orders', JSON.stringify(orders))
                    localStorage.removeItem('basket')
                    resolve(true)
                    clearTimeout(timeout)
                }, 2000)
            })
        },
        clearBasket({commit}) {
            commit('clearBasket')
        }
    },
    mutations: {
        setBasket(state, data) {
            state.basket = data
        },
        clearBasket(state) {
            this.state.catalog.products.forEach(item=> item.inBasket = false)
            state.basket = []
        }
    },
    getters: {
        getBasket(state) {
            return state.basket
        }
    },
}