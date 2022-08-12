import axios from "axios";

export default {
    state: {
        categories: [],
        subCategories: [],
        products: [],
    },
    actions: {
        async searchData({commit}) {
            let basket = JSON.parse( localStorage.getItem('basket')) ?? []
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
                    products.forEach(item=> {
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
        },
        async searchProduct({commit}, productId) {
            return new Promise((resolve) => {
                axios
                    .get('http://test1.web-gu.ru/?action=show_product&id=' + productId)
                    .then (response=> {
                        setTimeout(()=> {
                            resolve(response.data)
                        }, 3000)
                    })
            })

        },
        productStatus({commit}, product) {
            commit('setProductStatus', product)
        },

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
        setProductStatus(state, id) {
            state.products.map(item=> {
                if(item.id === id) item.inBasket = !item.inBasket
                return item
            })
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