
const Token =function(name){

    this.name=name

}
const d =new Token(true)
const ff=JSON.stringify(d) // Output: {"name":"nae"}
console.log(JSON.parse(ff))
