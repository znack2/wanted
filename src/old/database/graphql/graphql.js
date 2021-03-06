let mutationList = []
let resolverList = []
let subscriptionList = []

let typeList = [
  `input SelectOrder {
  name: String
  order: String
}`,
  `type Error {
  message: String
  code: String
}`
]
let queryList = []

export function add(payload) {
  const {
    mutationList: propMutationList = [],
    resolverMap,
    subscriptionList: propSubscriptionList = [],
    typeList: propTypeList,
    queryList: propQueryList = [],
  } = payload
  mutationList.push(...propMutationList)
  resolverList.push(resolverMap)
  subscriptionList.push(...propSubscriptionList)
  typeList.push(...propTypeList)
  queryList.push(...propQueryList)
}

export { mutationList, resolverList, subscriptionList, typeList, queryList }