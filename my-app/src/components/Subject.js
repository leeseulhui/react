function Subject(props) {
  console.log("Subject render")
    return(
      <header>
        <h1><a href="/pure.html" onClick={function(e){
          e.preventDefault();
          props.setMode("read")
        }}>{props.title}</a></h1>      
        {props.subTitle} 
        <button onClick={props.onClick}> OK</button>
      </header>
    );
  }

  export default Subject;