const returnValue = <T>(value: T): T => value

const message = returnValue <string>('hello word')

const count = returnValue(5)

function getFirstValueFromArray <Type>(array: Type[]){
 return array[0]
}

const firstValueFromStringArray = getFirstValueFromArray <string>(["1", "2"])
const firstValueFromNumberArray = getFirstValueFromArray <number>([10, 20])

// Promisses
const returnPromise = async (): Promise <string> => {
    return "5"
}

// classes
class GenericNumber <T>{
    zeroValue: T
    sum: (x: T, y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T){
        this.zeroValue = zeroValue
        this.sum = sum
    }

    const myGenericNumber = new GenericNumber <number>(0, (x: number, y : number) => {
        return x + y
    })

}

