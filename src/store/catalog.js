import axios from "axios";

export default {
    state: {
        categories: [],
        subCategories: [],
        products: [],
    },
    actions: {
        async searchData({commit}) {
            let basket = localStorage.getItem('basket') ? JSON.parse( localStorage.getItem('basket')) : []
            await axios
                .get('http://test1.web-gu.ru/')
                .then((response) => {
                    let categories = response.data.filter(item => item.parent_id === -1)
                    let subCategories = []
                    let products = []

                    categories.forEach(item => {
                        subCategories = [...subCategories, ...response.data.filter(subItem => subItem.parent_id === item.id)]
                    })
                    subCategories.forEach(item => {
                        products = [...products, ...response.data.filter(subItem => subItem.parent_id === item.id)]
                    })
                    products.map(item=> {
                        let find = basket.find(basketItem => basketItem.id === item.id)
                        if(find) item.inBasket = true
                        else item.inBasket = false
                        return item
                    })
                    commit('setCategories', categories)
                    commit('setSubCategories', subCategories)
                    commit('setProducts', products)

                })
                .catch(error => {
                    console.log(error)
                })
        }

    },
    mutations: {
        setCategories(state, data) {
            state.categories = data
        },
        setSubCategories(state, data) {
            state.subCategories = data
        },
        setProducts(state, data) {
            state.products = data
        },
    },
    getters: {
        getCategories(state) {
            return state.categories
        },
        getSubCategories(state) {
            return state.subCategories
        },
        getProducts(state) {
            return state.products
        }
    },
}