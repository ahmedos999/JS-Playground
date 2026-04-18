const user1 = {name:'Ali',id:1}

const user2 = {name:'Ali',id:1}

const convertObject = (hint) => {
    console.log(hint)

    if(hint === 'number')
        return 1
    if (hint === 'default')
        return'ALI'
}

//here you can assign a cortion function to object so it can use it when converting to a primative data type 
user1[Symbol.toPrimitive] = convertObject

user2[Symbol.toPrimitive] = convertObject

console.log(+user1 == +user2)

console.log(user1 + user2)