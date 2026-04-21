class userCreater {
    #score // private property
    constructor(name,score){
        this.name = name
        this.#score = score
    }

    increment(){
        this.#score ++
    }
    login(){
        console.log(this.name,'Scored ',this.#score)
    }
}

const user1 = new userCreater('ali',3)
const user2 = new userCreater('Mo',5)

user1.score++ //this is a new one
user2.increment()


user1.login()
user2.login()

