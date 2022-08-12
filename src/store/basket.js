import axios from "axios";

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
                setTimeout(() => {
                    commit('addProduct', product)

                    resolve(true)
                }, 2000)

            })
        },
        removeProduct({commit}, product) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('removeProduct', product)

                    resolve(true)
                }, 2000)

            })
        },
        async addOrder() {
               return new Promise(resolve => {
                   axios
                       .get('http://test1.web-gu.ru/?action=send_form')
                       .then(result=> {
                           setTimeout(()=> {
                               if(result.data.result) {
                                   resolve(true)
                               }
                           }, 2000)
                       })
                       .catch(error=> {
                           console.log(error)
                       })
               })

        },
        clearBasket({commit}) {
            commit('clearBasket')
        }
    },
    mutations: {
        addProduct(state, product) {
            state.basket.push(product)
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        removeProduct(state, product) {
            state.basket = state.basket.filter(item => item.id !== product.id)
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        setBasket(state, data) {
            state.basket = data
        },
        clearBasket(state) {
            localStorage.removeItem('basket')
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