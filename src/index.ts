// Tipos básicos
let age: number = 5
const firstname: string = 'Gabriel'
const isValid: boolean = true
let idk: any = 5

idk = '12'
idk = true

const ids: number[] = [1, 2 , 3, 4, 5] 
const booleans : boolean[] = [true, false , true , false]
const names: string[] = ['Gabriel', 'Mateus', 'João']

// Tupla
const person: [number, string] = [4, 'ola']

// Lista de tuplas
const people: [number, string][] = [
    [1, 'jane'],
    [2, 'doe'],
    [3, 'lorem']

]

// intersections
const productId: string|number|boolean = '2'

// Enum
enum Direction{
    up= 1
    down = 2
    Left = 'Esquerda'
}

const direction = Direction.Left

// type assertions
const productName: any= 'bone'
// let itemId = productName as string
let itemId =<string>productName

 
console.log(direction)