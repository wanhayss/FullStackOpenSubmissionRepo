const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
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
  const course = {
    name : 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10}, 
    {
      name: 'Using props to pass data',
      exercises: 7
    }, 
    {
      name: 'State of a component',
      exercises: 14,
    }
  ]
}
  
  
  return (
  // <div>
  //   <Header course='Half Stack application development'></Header>
  //   <Content></Content>
  //   <Total excercises1={10}  excercises2={7}  excercises3={14}></Total>
  // </div>
  <div>
    <h1>{course.name}</h1>
    <p>{course.parts[0].name} {course.parts[0].exercises}</p>
    <p>{course.parts[1].name} {course.parts[1].exercises}</p>
    <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    <p> Total {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}</p>
  </div>
  )
}

export default App