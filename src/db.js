const test = require('../data/test')
const homePage = require('../data/home_page')
const mePage = require('../data/me_page')
const shopPage = require('../data/shop_page')
const goodsList = require('../data/goods_list')

function responseData(data) {
    return {
        code: 0,
        msg: '请求成功',
        data,
    }
}

module.exports = () => {
    return {
        testjson0: test(),
        home_page: responseData(homePage()),
        me_page: responseData(mePage()),
        shop_page: responseData(shopPage()),
        goods_list: responseData(goodsList()),
    }
}