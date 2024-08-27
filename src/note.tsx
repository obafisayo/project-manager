import React, { useState } from 'react'

let des: any;
let personName: unknown; // It can also represent any
let id: string | number; // union
let isStudent: boolean;
let hobbies: string;
let role: [number, string]; // tuple

// interface object
interface Employee {
  id: string | number,
  name: string,
  role: string,
  userId: number
}
// extending interface
interface Founder extends Employee {
  email: string,
  tel: number
}
// type object
type Person = {
  name: string;
  title?: string;
  id?: number | string; // ? means it's an optional value.
};
let lotsOfPeople: Person[]
const user1: Person = {
  name: "oba",
  id: 1,
  title: "Mr"
}
const user2: Person = {
  name: "fisayo",
  id: 2,
}
// complex types
type racialGroups = "Black" | "Asian" | "Hispanic" | "White" | "Latino"
// Extending types
type CompletePerson = Person & {
  country: string,
  ethnicity: string,
  race: racialGroups
}

const user3: CompletePerson = {
  name: "shirtless_coder",
  country: "Nigeria",
  ethnicity: "Yoruba",
  race: "Black",
  id: "CPU20240824_0001",
  title: "Mr"
}

// extending interface with types
interface CoFounder extends CompletePerson {
  founderId: number
}

// extending types with interfaces
type HigherUp = Founder & {
  decision: string
}

let printAge: (age: number) => void
let printId: (id: number) => never

function printName(name: string) {
  console.log(name)
}

printName("Obafisayo")

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    }
}

const user: User = new UserAccount("Murphy", 1);


// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>; // an array of objects with input field name of type string

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
   
  // This line is a shortcut to tell TypeScript there is a
  // constant called `backpack`, and to not worry about where it came from.
  declare const backpack: Backpack<number>;
   
  // object is a number, because we declared it above as the variable part of Backpack.
  const object = backpack.get();
   
  // Since the backpack variable is a string, you can't pass a number to the add function.
  backpack.add(23);

// Typescript in react
interface Props {

}
interface Todo {
  todos: string,
  id: number
}
const App = () => {
  const [todo, setTodo] = useState<string | number>("")
  const [todoArr, setTodoArr] = useState<string[]>([])
  const [todos, setTodos] = useState<Todo[]>([]);
}
export default App;