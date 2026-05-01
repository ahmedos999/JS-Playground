window.teacher = 'suzy'

workshop = {
   teacher : 'kyle',
   ask(question){
    console.log(this.teacher,question)
   }
}


setTimeout(workshop.ask,10,'first call')

setTimeout(workshop.ask.bind(workshop),10,'second call')  // hard bond