import axios from "axios";

export default {
    state: {
        categories: [],
        subCategories: [],
        products: [],
    },
    actions: {
        async searchData({commit}) {
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
            console.log('categories', data)
        },
        setSubCategories(state, data) {
            state.subCategories = data
            console.log('SubCategories', data)

        },
        setProducts(state, data) {
            state.products = data
            console.log('Products', data)

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