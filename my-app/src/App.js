import './App.css';
import TableOfContent from './components/TableOfContent';
import Subject from './components/Subject';
import Content from './components/Content';
import {useState} from 'react';

function App() {
  const [mode,setMode] = useState("welcome")
  const[welcome,setWelcome] = useState({title:'welcome',desc:'Hello React'})
  const [title,setTitle] = useState("Web")
  const [subTitle,setSubTitle] = useState("State Test!")
  const [contents,setContents] = useState([
    {id:0,title:'HTML',desc:'HTML is for information...' },
    {id:1,title:'CSS',desc:'CSS is for design...' },
    {id:2,title:'JavaScript',desc:'JS is for interactive...' },
    {id:3,title:'NodeJs',desc:'NodeJS is for Server...' }
  ])
  const [selectedItem,setSelectedItem] = useState(0)

  var _title, _desc = null;
  if(mode === 'welcome'){
    _title = welcome.title
    _desc = welcome.desc
  } else if(mode === 'read'){
    _title = contents[selectedItem].title
    _desc = contents[selectedItem].desc
  }

  const onClick = function(){
    setMode("welcome")
  }

  console.log("app render")
  return (
    <div className="APP">
      <Subject title = {title} subTitle = {subTitle} setMode = {setMode}></Subject>
      <TableOfContent setSelectedItem = {setSelectedItem}
        onChangePage = {onChangePage}
        data = {contents}></TableOfContent>
      <Content title = {_title} desc = {_desc}>
      </Content>
     
    </div>
  );
}
export default App;
