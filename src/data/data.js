const data =[
    {
        file:null,
        productId:1,
        productType:"ketab",
        productName:"ketab",
        productPrice:7,
        quantity:5,
        purchaseDate: new Date()
    },
    {
      file:null,
      productId:2,
      productType:"book",
      productName:"book",
      productPrice:12,
      quantity:7,
      purchaseDate: new Date()
  },
]

const admins = [{
    username:"aaa",
    email:"a@a.com",
    password:"123asdASD"
}]

 const users = [{
    userId:1,
    firstName: 'aaa',
    lastName: 'a',
    email: 'a@a.com',
    mobileNo: '123',
    password: '123asdASD',
    cart : []
 },{
    userId:2,
    firstName: 'oo',
    lastName: 'agg',
    email: 'ad@ff.com',
    mobileNo: '12345',
    password: '1234dfhGGJ',
    cart : []
 },{
    userId:3,
    firstName: 'iii',
    lastName: 'i',
    email: 'i@r.com',
    mobileNo: '67879',
    password: 'gujgGHKGKJ8890',
    cart : []
 }]

export {data,admins,users};