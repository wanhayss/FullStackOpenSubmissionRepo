const Part = (props) => {
  return (
    <div>
      <d>{props.name} {props.exercises}</d>
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1>Half Stack application development</h1>
    </div>
  )
}
const Content = (props) => {
  return(
    <div>
      <Part name="Fundamentals" exercises={10} />
      <Part name="Using props" exercises={7} />
      <Part name="State of a component" exercises={14} />
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Number of excercises {props.excercises1 + props.excercises2 + props.excercises3}</p>
    </div>
  )
}
const App = () => {
return (
  <div>
    <Header></Header>
    <Content></Content>
    <Total excercises1={10}  excercises2={7}  excercises3={14}></Total>
  </div>)
}

export default App