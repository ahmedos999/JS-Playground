var teacher = 'kyle'

function otherTeacher(){
    console.log(teacher) // undefinded cause in the compliation pass it got init but not yet assigned
    var teacher = 'suzy'
}

otherTeacher()