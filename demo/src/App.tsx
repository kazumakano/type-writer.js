import "./App.css"
import useTypeWriter from "./type-writer"


export default function App(): JSX.Element {
  const tw = useTypeWriter("Hello, world!\nThis is demo site of type-writer.js.", "|", 400, 100, 400, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <pre>{tw}</pre>
      </header>
    </div>
  )
}
