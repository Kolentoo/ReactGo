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

// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date:new Date()};
//     }
//     componentDidMount(){
//         console.log('挂载开始')
//         this.timerID = setInterval(()=>{
//             this.tick();
//         },1000)
//     }
//     componentWillUnmounte(){
//         console.log('结束')
//         clearInterval(this.timerID);
//     }
//     tick(){
//         this.setState({
//             date:new Date()
//         })
//     }
//     render(){
//         return(
//             <div>
//                   <h1>{this.state.date.toLocaleTimeString()}</h1>
//             </div>
//         )
//     }
// }

// function App() {
//     return (
//       <div>
//         <Clock />
//         <Clock />
//         <Clock />
//       </div>
//     );
//   }
  
// ReactDOM.render(
// <App />,
// document.getElementById('root')
// );

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// )

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
  
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }

// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting />
//     }else{
//         return <GuestGreeting />
//     }
// }

// function LoginButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     )
// }

// function LogoutButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }

// class LoginControl extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn:false};
//     }
//     handleLoginClick(){
//         this.setState({
//             isLoggedIn:true
//         })
//     }
//     handleLogoutClick(){
//         this.setState({
//             isLoggedIn:false
//         })
//     }
//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         let button = null;
//         if(isLoggedIn){
//             button = <LoginButton onClick={this.handleLogoutClick} />
//         }else{
//             button = <LogoutButton onClick={this.handleLoginClick} />
//         }

//         return(
//             <div class="box">
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// )


// function Mailbox(props){
//     const unreadMessage = props.unreadMessage;
//     return(
//         <div>
//             <h1>hello</h1>
//             {unreadMessage.length>0&&
//                 <h2>you have {unreadMessage.length} unread message</h2>
//             }
//         </div>
//     )
// }

// const message = ['react','reactdom','redux'];
// ReactDOM.render(
//     <Mailbox unreadMessage={message} />,
//     document.getElementById('root')
// )

// class Btn extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <button>change</button>
//         )
//     }
// }

// class Test extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {test:false};
//         this.changetext = this.changetext.bind(this);
//     }
//     changetext(){
//         console.log(111)
//         this.setState({test:true});
//     }
//     render(){
//         const test = this.state.test;
//         return(
//             <div className="test">
//                 {test?(<h2>test is true</h2>):(<h2>test is false</h2>)}
//                 <Btn onClick={this.changetext} />
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Test />,document.getElementById('root')
// )

// function WarningBanner(props){
//     if(props.warn){
//         return null
//     }
//     return (
//         <div className="warning">Warning!!!</div>
//     )
// }

// class Page extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {showWarning:true};
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//     handleToggleClick(){
//         this.setState(prevState=>({
//             showWarning:!prevState.showWarning
//         }))
//     }
//     render(){
//         return(
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning?'warning的值为true':'warning的值为false'}
//                 </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// )

// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((current,index,arr)=>{
//     return (
//         <li>{current*2}</li>
//     )
// })

// ReactDOM.render(
//     <ul>{listItems}</ul>,document.getElementById('root')
// )

// function NumberList(props){
//     const numbers = props.numbers;
//     const listItems = numbers.map((current,index,arr)=>{
//         return <li key={current}>{current*2}</li>
//     })
//     return (
//         <ul className="hellos">{listItems}</ul>
//     )
// }

// const numbers = [1,2,3,4,5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// )

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

function Blog(props){
    const sidebar=(
        <ul>
            {props.posts.map(post=>
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    )
    const content = props.posts.map((post)=>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
    return(
        <div>{sidebar}{content}</div>
    )
}

ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
)





















registerServiceWorker();
