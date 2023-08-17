console.log("Hello-World");

// Data-Types - Primitive =====================================================
// 0. Few variables ***************
let sales = 123_456_789
let course = 'Typescript'
let isSelecetd = true

// 1. The any type ***************
let level;
level = 1;
level = 'a';

// 2. Array ***************
let numbers: number[] = [1, 2, 3]

// 3. Tuples ***************
let user: [number, string] = [1, 'Zaxx']

// 4. enum ***************
enum Size { Small=1, Medium=2, Large=3 }
let mySize: Size = Size.Medium;
console.log(mySize)

// 5. Function ***************
function calculateTax(income: number, taxYear=2022): number {
    let x = 0;
    if (taxYear <50_000)
        return income * 1.2
    return income = 1.3
}
calculateTax(10_000)

// 6. Objects ***************
let employee: {
    readonly id: number,
    name: string
    retire: (date: Date) => void
} = { id: 1,
    name: 'Zaxx1',
    retire: (date: Date) => {
        console.log(date)
    }}
employee.name = 'Zaxx2'

// 2. Data-Types - Advanced ===================================================
// 1. Type alias ***************
type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void
}
let employee1: Employee = {
    id: 1,
    name: 'Zaxx2',
    retire: (date: Date) => {
        console.log(date)
    }
}

// 2. Union types ***************
function kgToLbs(weight: number | string): number {
    // Narrowing types
    if (typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight)*2.2
}

// 3. Intersection types ***************
let weight: number & string;
type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// 4. Literal types ***************
/*
- to limit the value
*/
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';

// 5. Nullable types ***************
function greet(name: string | null | undefined){
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(undefined);

// 6. Optional chaining ***************
type Customer = {
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}
let customer = getCustomer(0);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator -  in case of array
// cutomer?.[0]

// Optional call operator
let log: any = null;
log?.('a');

// ##### END OF FILE ##########################################################
