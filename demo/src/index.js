import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );


function name(user){
    return user.firstname+' '+user.lastname
}
const user = {
    firstname:'react',lastname:'native'
}
// const element = (<h1>hello,{name(user)}</h1>);

// function timegoing(){
//     const timeDate = (
//         <p className="time">{new Date().toLocaleTimeString()}</p>
//     )
//     ReactDOM.render(
//         timeDate,document.getElementById('root')
//     )
// }

// setInterval(timegoing,1000);


// class Welcome extends React.Component{
//     render(){
//         return <h1>hello,{this.props.name}</h1>
//     }
// }
// const element = <Welcome name="kolento" />;
// ReactDOM.render(
//     element,document.getElementById('root')
// )

// class Welcome extends React.Component{
//     render(){
//         return(
//             <h1>hello,{this.props.name}</h1>
//         )
//     }
// }

// function App(){
//     return(
//         <div>
//             <Welcome name="hahahah" />
//             <Welcome name="heheheh" />
//             <Welcome name="huhuhuhu" />
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,document.getElementById('root')
// )

// const comment = {
//     date: new Date().toLocaleTimeString(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//       name: 'Hello Kitty',
//       avatarUrl: 'http://placekitten.com/g/64/64'
//     }
//   };

// //头像组件
// function Avatar(props){
//     return (
//         <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
//     )
// }

// // 提取useinfo组件
// function Userinfo(props){
//     return(
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">{props.user.name}</div>
//         </div>
//     )
// }

// function Comment(props){
//     return(
//         <div className="Comment">
//             <Userinfo user={props.author} />
//             <div className="Comment-text">{props.text}</div>
//             <div className="Comment-date">{props.date}</div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Comment date={comment.date} text={comment.text} author={comment.author}/>,
//     document.getElementById('root')
// )

// function Clock(props){
//     return(
//         <div className="timebox">
//             <h1>hello world</h1>
//             <h2>{props.date.toLocaleString()}</h2>
//             <h3>{props.date.toLocaleTimeString()}</h3>
//         </div>
//     )
// }
// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     )
// }

// setInterval(tick,1000)

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    componentDidMount(){
        console.log('挂载开始')
        this.timerID = setInterval(()=>{
            this.tick();
        },1000)
    }
    componentWillUnmounte(){
        console.log('结束')
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return(
            <div>
                  <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

function App() {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// )


registerServiceWorker();
