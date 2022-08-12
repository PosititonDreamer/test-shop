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
        editBasket({commit}, product) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('setProductInBasket', product)
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
            commit('devastationBasket')
        }
    },
    mutations: {
        setProductInBasket(state, product) {
            state.basket.find(item=> item.id === product.id) ? state.basket = state.basket.filter(item=> item.id !== product.id) : state.basket.push(product)
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        setBasket(state, data) {
            state.basket = data
        },
        devastationBasket(state) {
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