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

// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];

// function Blog(props){
//     const sidebar=(
//         <ul>
//             {props.posts.map(post=>
//                 <li key={post.id}>{post.title}</li>
//             )}
//         </ul>
//     )
//     const content = props.posts.map((post)=>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     )
//     return(
//         <div>{sidebar}{content}</div>
//     )
// }

// ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
// )

// class NameForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={value:''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//         this.setState({
//             value:event.target.value.toUpperCase()
//         })
//         console.log(event.target.value)
//     }
//     handleSubmit(event){
//         alert('name：'+this.state.value);
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form action="">
//                 <label htmlFor="">
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                 </label>
//                 <input type="button" value="Submit" onClick={this.handleSubmit}/>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <NameForm />,document.getElementById('root')
// )

// class EssayForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             value:'please write an essay'
//         }
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     handleChange(event){
//         this.setState({value:event.target.value})
//     }
//     handleSubmit(event){
//         alert('essay:'+this.state.value);
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="">
//                     Name:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit"/>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <EssayForm />,document.getElementById('root')
// )

// class FlavorForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={value:'coconut'};
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//         this.setState({value:event.target.value})
//     }
//     handleSubmit(event){
//         alert('choice:'+this.state.value);
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form action="" onSubmit={this.handleSubmit}>
//                 <label htmlFor="">
//                     pick your item
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">grapefruit</option>
//                         <option value="lime">lime</option>
//                         <option value="coconut">coconut</option>
//                         <option value="mango">mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit"/>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <FlavorForm />,document.getElementById('root')
// )

// class Reservation extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             isGoing:true,
//             numberOfGuests:200
//         }
//         this.handleInputChange=this.handleInputChange.bind(this);
//     }
//     handleInputChange(event){
//         const target = event.target;
//         const value = target.type==='checkbox'?target.checked:target.value;
//         const name = target.name;
//         this.setState({
//             [name]:value //es6语法
//         })
//     }
//     render(){
//         return(
//             <form action="">
//                 <label htmlFor="">
//                     is isGoing
//                     <input type="text" name="isGoing" type="checkbox" 
//                     checked={this.state.isGoing} onChange={this.handleInputChnage}/>
//                 </label>
//                 <br/>
//                 <label htmlFor="">
//                     number of guests:
//                     <input type="text" name="numberOfGuests" type="number" 
//                     value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
//                 </label>
            
//             </form>
//         )
//     }
    
// }

// ReactDOM.render(
//     <Reservation />,document.getElementById('root')
// )

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
}

// class Calculator extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange=this.handleChange.bind(this);
//         this.state={temperature:''};
//     }
//     handleChange(e){
//         this.setState({temperature:e.target.value})
//     }
//     render(){
//         const temperature = this.state.temperature;
//         return(
//             <fieldset>
//                 <legend>输入一个摄氏温度</legend>
//                 <input type="text" value={temperature}
//                 onChange={this.handleChange}/>
//                 <BoilingVerdict celsius={parseFloat(temperature)} />
//             </fieldset>
//         )
//     }
// }

const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
}

// class TemperatureInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange=this.handleChange.bind(this);
//         this.state={temperature:''}
//     }
//     handleChange(e){
//         this.setState({temperature:e.target.value});
//     }
//     render(){
//         const temperature = this.state.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>enter temperature in {scaleNames[scale]}:</legend>
//                 <input type="text" value={temperature} onChange={this.handleChange}/>
//             </fieldset>
//         )
//     }
// }

class Calculator extends React.Component{
    render(){
        return(
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        )
    }
}

function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}

//第一个参数是输入的温度值 this.state.temperature
//第二个参数是温度转换的方法
function tryConvert(temperature,convert){
    const input = parseFloat(temperature);
    //如果是非数字，返回空
    if(Number.isNaN(input)){
        return ''
    }
    // convert()方法代表以上2个转换函数
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}


class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={temperature:''}
    }
    handleChange(e){
        this.setState({
            temperature:e.target.value
        })
    }
    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>enter temperature in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}


ReactDOM.render(
    <Calculator />,document.getElementById('root')
)


















registerServiceWorker();
