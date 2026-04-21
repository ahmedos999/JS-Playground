function userCreator (name,score){
    this.name = name
    this.score = score

}

userCreator.prototype.increment = function(){
    this.score++
}

userCreator.prototype.login = function(){
    console.log(this.name,'scores ',this.score)
}
const user1 = new userCreator('ali',3)

const user2 = new userCreator('mo',5)

user1.increment()
user2.increment()

user1.login()
user2.login()
