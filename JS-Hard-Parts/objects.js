function userCreator (name,score){
    const newUser =  Object.create(userFunctions)

    newUser.name = name
    newUser.score = score

    return newUser
}

const userFunctions = {
    increment: function(){this.score++},
    login:function(){console.log('User logged in',this.score,this.name)}
}

const user1 = userCreator('ali',3)

const user2 = userCreator('mo',5)

user1.increment()
user1.increment()
user2.increment()

user1.login()
user2.login()