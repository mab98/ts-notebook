useState<write type here>
const [movie, setMovie] = useState<MovieInterface | null>(null)

text?:string

To explicitly define what a component should have type i.e. React.FC or React.ReactNode.

for api fetch:
const fetchData = (apiUrl:string): Promise<DataInterface> => fetch(apiUrl).then((res)=>res.json())

In TS, we need to create an interface for every object.
interface IProps {
    name: string;
    age: number;
}

In enum, we can put different options of same thing.
enum Cheese {
    cheddar1 = "cheddar1"
    cheddar2 = "cheddar2"
}

TypeScript compiles your React code to type-check the code. It doesn’t ?emit: compile to js? any JavaScript output (in most scenarios). The output is still similar to a non-TypeScript React project.

onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}