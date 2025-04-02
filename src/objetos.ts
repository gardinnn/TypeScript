// Type
type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    age: number
    email: string
    password?: string
    orders: Order[]
    register(): string
}

const user: User ={
    firstName: 'joão',
    age: 20,
    email:'gardin@.com',
    password: '12345',
    orders: [{productId: '1', price: 200}],
    register(){
        return "a"
    }
}

const printLog = (message: string) =>{}
printLog(user.password!)

// Unions
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 2,
    books: ['1'],
    email: 'author@gmail.com',
    firstName: 'Felipe',
    orders: [],
    register() {
        return "a"
    }
}

// interfaces
interface UserInterface{
    readonly firstNme: string;
    email: string;
    login() : string;
} 

const emailUser: UserInterface ={
email: 'felipe@.com',
firstNme: 'Felipe',
login() {
    return "a"
}
}

interface AuthorInterface{
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
   email: 'felipe@.com',
   firstNme: 'Felipe',
   books: [],
   login() {
    return "a"
}

}