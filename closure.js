function outer(){
    let counter = 0

    function inner(){
        counter++
        console.log(counter)
    }

    return inner
}

const newfunc = outer()

const newfunc2 = outer()