class Stack {
    #arr
    constructor() {
        this.#arr = []
    }
    push = (item) => { this.#arr.push(item) }
    pop = () => { return this.#arr.pop() }
    print = () => { console.log(this.#arr) }
}
module.exports = {
    Stack
}