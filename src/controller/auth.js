const TokenService = require('../service/token')
const userList = require('../../data/user_list')

module.exports = (req, res, next) => {
  const { username, password } = req.body
  console.log('==========', username, password)
  const userListData = userList()
  const userInfo = userListData.find((v) => v.username === username && v.password === password)
  if (!userInfo) {
    res.fail('请填写正确的用户名和密码')
    return
  }
  delete userInfo.password
  const token = TokenService.create({ username })
  res.success({
    token,
    userInfo,
  })
}
