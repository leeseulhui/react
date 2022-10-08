import './App.css';

function Subject(props) {
  return(
    <header>
      <h1>{props.title}</h1>
      {props.subTitle}
    </header>
  );
}

function TableOfContent(){
  return(
    <nav>
      <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
      </ul>
    </nav>
  )
}
function App() {
  return (
    <div className="APP">
      <Subject title = "WEB" sbuTitle = "World wide web!"></Subject>
      <TableOfContent></TableOfContent>
      
    </div>
  );
}
export default App;
