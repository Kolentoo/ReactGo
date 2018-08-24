import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

// ReactDOM.render(
//     <App />, 
//     document.getElementById('root')
// );


// function name(user){
//     return user.firstname+' '+user.lastname
// }
// const user = {
//     firstname:'react',lastname:'native'
// }
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

// const scaleNames={
//     c:'Celsius',
//     f:'Fahrenheit'
// }

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

// class Calculator extends React.Component{
//     render(){
//         return(
//             <div>
//                 <TemperatureInput scale="c" />
//                 <TemperatureInput scale="f" />
//             </div>
//         )
//     }
// }

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//       return <p>水会烧开</p>;
//     }
//     return <p>水不会烧开</p>;
// }

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// }

// function toCelsius(fahrenheit){
//     return (fahrenheit-32)*5/9;
// }
// function toFahrenheit(celsius){
//     return (celsius*9/5)+32;
// }

// //第一个参数是输入的温度值 this.state.temperature
// //第二个参数是温度转换的方法
// function tryConvert(temperature,convert){
//     const input = parseFloat(temperature);
//     //如果是非数字，返回空
//     if(Number.isNaN(input)){
//         return ''
//     }
//     // convert()方法代表以上2个转换函数
//     const output = convert(input);
//     const rounded = Math.round(output*1000)/1000;
//     return rounded.toString();
// }


// class TemperatureInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange=this.handleChange.bind(this);
//         // this.state={temperature:''}
//     }
//     handleChange(e){
//         // this.setState({
//         //     temperature:e.target.value
//         // })
//         this.props.onTemperatureChange(e.target.value);
//     }
//     render(){
//         // const temperature = this.state.temperature;
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>enter temperature in {scaleNames[scale]}:</legend>
//                 <input type="text" value={temperature} onChange={this.handleChange}/>
//             </fieldset>
//         )
//     }
// }

// class Calculator extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleCelsiusChange=this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
//         this.state={temperature:'',scale:'c'};
//     }
//     handleCelsiusChange(temperature){
//         this.setState({
//             scale:'c',temperature
//         })
//     }
//     handleFahrenheitChange(temperature){
//         this.setState({
//             scale:'f',temperature
//         })
//     }
//     render(){
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale==='f'?tryConvert(temperature,toCelsius):temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit):temperature;
//         return (
//             <div>
//                 <TemperatureInput
//                 scale='c' temperature={celsius} 
//                 onTemperatureChange={this.handleCelsiusChange}
//                 />
//                 <TemperatureInput
//                 scale='f' temperature={fahrenheit} 
//                 onTemperatureChange={this.handleFahrenheitChange}
//                 />
//                 <BoilingVerdict celsius={parseFloat(celsius)} />
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Calculator />,document.getElementById('root')
// )


// function FancyBorder(props){
//     return(
//         <div className={'FancyBorder FancyBorder-'+props.color}>
//             {props.children}
//         </div>
//     )
// }

// function WelcomeDialog(){
//     return(
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">Welcome</h1>
//             <p className="Dialog-message">Thank you for visiting our spacecraft</p>
//         </FancyBorder>
//     )
// }

// ReactDOM.render(
//     <WelcomeDialog />,document.getElementById('root')
// )

// function SplitPane(props){
//     return(
//         <div className="SplitPane">
//             <div className="SplitPane-left">{props.left}</div>
//             <div className="SplitPane-right">{props.right}</div>
//         </div>
//     )
// }

// function Contacts(){
//     return(
//         <div className="Contacts">hahahaha</div>
//     )
// }

// function Chat(){
//     return(
//         <div className="Chat">hehehehe</div>
//     )
// }

// function App(){
//     return(
//         <SplitPane left={<Contacts />} right={<Chat />} />
//     )
// }

// ReactDOM.render(
//     <App />,document.getElementById('root')
// )

// function FancyBorder(props){
//     return(
//         <div className={'FancyBorder FancyBorder-'+props.color}>
//             {props.children}
//         </div>
//     )
// }

// function Dialog(props){
//     return(
//         <FancyBorder color="blue">  
//             <h1 className="Dialog-title">{props.title}</h1>
//             <p className="Dialog-message">{props.message}</p>
//         </FancyBorder>
//     )
// }

// function WelcomeDialog(){
//     return(
//         <Dialog title="Welcome" message="Thank you for visiting" />
//     )
// }

// ReactDOM.render(
//     <WelcomeDialog />,document.getElementById('root')
// )

// function FancyBorder(props){
//     return(
//         <div className={'FancyBorder FancyBorder-'+props.color}>
//             {props.children}
//         </div>
//     )
// }

// function Dialog(props){
//     return(
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">{props.title}</h1>
//             <p className="Dialog-message">{props.message}</p>
//             {props.children}
//         </FancyBorder>
//     )
// }

// class SignUpDialog extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSignUp=this.handleSignUp.bind(this);
//         this.state={login:''}
//     }
//     render(){
//         return(
//             <Dialog title="mars exploration program" message="how should we refer to you">
//                 <input type="text" value={this.state.login} onChange={this.handleChange}/>
//                 <button onClick={this.handleSignUp}>
//                     sign me up
//                 </button>
//             </Dialog>
//         )
//     }
//     handleChange(e){
//         this.setState({
//             login:e.target.value
//         })
//     }
//     handleSignUp(){
//         alert(`WELCOME,s${this.state.login}!`)
//     }
// }

// ReactDOM.render(
//     <SignUpDialog />,document.getElementById('root')
// )

// const MyComponents = {
//     DatePicker:function Date(props){
//         return <div>Imagine a {props.color} datepicker here</div>    
//     }
// }

// function BlueDatePicker(){
//     return <MyComponents.DatePicker color="blue" />
// }

// function NumberDescriber(props){
//     let description;
//     if (props.number%2===0){
//         description = <strong>even</strong>;
//     }else{
//         description=<i>odd</i>
//     }
//     return <div>{props.number} is an {description} number</div>
// }


// function Item(props){
//     return <li>{props.message}</li>
// }

// function TodoList(){
//     const todos=[
//         'first','second','third'
//     ]
//     return(
//         <ul>
//             {todos.map(message=><Item key={message} message={message} />)}
//         </ul>
//     )
// }

// ReactDOM.render(
//     <TodoList />,document.getElementById('root')
// )

// function Repeat(props){
//     let items = [];
//     for(let i =0;i<props.numTimes;i++){
//         items.push(props.children(i));
//     }
//     return <div>{items}</div>
// }

// function ListOfTenThings(){
//     return(
//         <Repeat numTimes={10}>
//             {(index) => <div key={index}>This is item {index} in the list</div>}
//         </Repeat>
//     )
// }


// class Greeting extends React.Component{
//     render(){
//         return(
//             <h1>hello,{this.props.name}</h1>
//         )
//     }
// }

// Greeting.propTypes={
//     name:PropTypes.string
// }

// ReactDOM.render(
//     <Greeting />,document.getElementById('root')
// )

// class CustomTextInput extends React.Component{
//     constructor(props){
//         super(props);
//         //创建ref存储 textInput DOM元素
//         this.textInput = React.createRef();
//         this.focusTextInput = this.focusTextInput.bind(this);
//     }

//     focusTextInput(){
//         //直接使用原生的api让text获得焦点
//         //这里使用current来获取dom节点
//         this.textInput.current.focus();
//     }

//     render(){
//         //这里告诉React 我们把 input ref 关联到构造器里面创建的  textInput 上
//         return(
//             <div>
//                 <input type="text" ref={this.textInput} />
//                 <input type="text" type="button" value="focus ths text"
//                 onClick={this.focusTextInput} />
//             </div>
//         )
//     }
// }

// class AutoFocusTextInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.textInput = React.createRef();
//     }

//     componentDidMount(){
//         this.textInput.current.focusTextInput();
//     }

//     render(){
//         return(
//             <CustomTextInput ref={this.textInput} />
//         )
//     }
// }

// ReactDOM.render(
//     <AutoFocusTextInput />,document.getElementById('root')
// )

// function CustomTextInput(props){
//     //这里必须声明 textInput，这样ref的回调才能够引用它
//     let textInput = null;

//     function handleClick(){
//         textInput.focus();
//     }

//     return (
//         <div>
//             <input type="text" ref={(input)=>{textInput=input}}/>
//             <input type="button" value="hello" onClick={handleClick} />
//         </div>
//     )
// }

// class CustomTextInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.textInput = null;
//         this.setTextInputRef=element=>{
//             this.textInput=element;
//         }

//         this.focusTextInput=()=>{
//             if(this.textInput) this.textInput.focus();
//         }
//     }

//     componentDidMount(){
//         // 渲染后文本框自动获得焦点
//         this.focusTextInput();
//     }

//     render(){
//         //使用ref的回调将text输入框的dom节点存储到react
//         return(
//             <div>
//                 <input type="text" ref={this.setTextInputRef} />
//                 <input type="button" value=""focus the test  onClick={this.focusTextInput} />
//             </div>
//         )
//     }
// }

// function CustomTextInput(props){
//     return(
//         <div>
//             <input type="text" ref={props.inputRef}/>
//         </div>
//     )
// }

// class Parent extends React.Component{
//     render(){
//         return(
//             <CustomTextInput inputRef={el=>this.inputElement=el} />
//         )
//     }
// }

// class NameForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(event){
//         alert('a name was submitted'+this.input.value);
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form action="" onSubmit={this.handleSubmit}>
//                 <label htmlFor="">
//                     Name:
//                     <input type="text" ref={(input)=>{this.input=input}} defaultValue="默认值"/>
//                 </label>
//                 <input type="submit" value="submit" />
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <NameForm />,document.getElementById('root')
// )

// class FileInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }
//     handleSubmit(event){
//         event.preventDefault();
//         alert(`select file -${this.fileInput.file[0].name}`);
//     }
//     render(){
//         return(
//             <form action="">
//                 <label htmlFor="">
//                     upload file:
//                     <input type="file" ref={input=>{this.fileInput=input}}/>
//                 </label>
//                 <button type="submit">submit</button>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <FileInput />,document.getElementById('root')
// )

// class CounterButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={count:1};
//     }

//     shouldComponentUpdate(nextProps,nextState){
//         if(this.props.color!==nextProps.color){
//             return true;
//         }
//         if(this.state.count!==nextState.count){
//             return true;
//         }
//         return false;
//     }
//     render(){
//         return(
//             <button color={this.props.color} 
//             onClick={()=>{this.setState(state=>({count:state.count+1}))}}
//             >
//             Count:{this.state.count}
//             </button>
//         )
//     }
// }

// ReactDOM.render(
//     <CounterButton/>,document.getElementById('root')
// )

// class CounterButton extends React.PrueComponent{
//     constructor(props){
//         super(props);
//         this.state={count:1}
//     }

//     render() {
//         return (
//           <button
//             color={this.props.color}
//             onClick={() => this.setState(state => ({count: state.count + 1}))}>
//             Count: {this.state.count}
//           </button>
//         );
//       }
// }

// ReactDOM.render(
//     <CounterButton/>,document.getElementById('root')
// )


// class Greeting extends React.Component{
//     render(){
//         return <h1>hello,{this.props.name}</h1>
//     }
// }

// var createReactClass = requier('create-react-class');
// var Greeting = createReactClass({
//     render:function(){
//         return <h1>hello,{this.props.name}</h1>
//     }
// })


// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={count:props.initialCount};
//     }
// }

// var Counter = createReactClass({
//     getInitialState:function(){
//         return {count:this.props.initialCount}
//     }
// })

// class SayHello extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={message:'hello'};
//         this.handleClick=this.handleClick.bind(this);
//     }

//     handleClick(){
//         alert(this.state.message);
//     }

//     render(){
//         return(
//             <button onClick={this.handleClick}>
//                 say hello
//             </button>
//         )
//     }
// }

// ReactDOM.render(
//     <SayHello />,document.getElementById('root')
// )
// var createReactClass = require('create-react-class');

// var SayHello = createReactClass({
//     getInitialState:function(){
//         return {message:'hello'}
//     },

//     handleClick:function(){
//         alert(this.state.message);
//     },

//     render:function(){
//         return(
//             <button onClick={this.handleClick}>
//                 say hello
//             </button>
//         )
//     }

// })



// class SayHello extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={message:'hello world'};
//     }

//     handleClick=()=>{
//         alert(this.state.message);
//     }

//     render(){
//         return(
//             <button onClick={this.handleClick}>
//                 say hello
//             </button>
//         )
//     }
// }

// ReactDOM.render(
//     <SayHello />,document.getElementById('root')
// )

// class Hello extends React.Component{
//     render(){
//         return <div>hello {this.props.toWhat}</div>
//     }
// }

// ReactDOM.render(
//     <Hello toWhat="world" />,document.getElementById('root')
// )

// class Hello extends React.Component{
//     render(){
//         return React.createElement(
//             'div',
//             null,
//             `hello, ${this.props.toWhat}`
//         )
//     }
// }

// ReactDOM.render(
//     React.createElement(
//         Hello,{toWhat:'world!!!'},null
//     ),
//     document.getElementById('root')
// )

// const e = React.createElement;
// ReactDOM.render(
//     e('div',null,'hello world'),
//     document.getElementById('root')
// )

// function ThemeButton(props){
//     return <input type="button" theme={props.theme} value="test" />
// }

// // 中间组件
// function Toolbar(props){
//     //Toolbar组件必须添加一个额外的  theme  属性
//     //然后传递它给 ThemeButton 组件
//     return (
//         <div>
//             <ThemeButton theme={props.theme} />
//         </div>
//     )
// }

// class App extends React.Component{
//     render(){
//         return <Toolbar theme="dark" />
//     }
// }

// ReactDOM.render(
//     <App />,document.getElementById('root')
// )

// //创建一个 theme Context，默认 theme 的值为light
// const ThemeContext = React.createContext('light');

// function ThemeButton(props){
//     // ThemeButton 组件从 context 接收 theme
//     return(
//         <ThemeContext.Consumer>
//             {theme=><Button {...props} theme={theme} />}
//         </ThemeContext.Consumer> 
//     )
// }


// //中间组件
// function Toolbar(props){
//     return(
//         <div>
//             <ThemedButton />
//         </div>
//     )
// }

// class App extends React.Component{
//     render(){
//         return(
//             <ThemeContext.Provider value="dark">
//                 <Toolbar />
//             </ThemeContext.Provider>
//         )
//     }
// }

// const {Provider,Consumer} = React.createContext(defau;tValue);

// class Table extends React.Component{
//     render(){
//         return(
//             <table>
//                 <tr>
//                     <Columns />
//                 </tr>
//             </table>
//         )
//     }
// }

// class Columns extends React.Component {
//     render() {
//       return (
//         <div>
//           <td>Hello</td>
//           <td>World</td>
//         </div>
//       );
//     }
//   }


// class Columns extends React.Component{
//     render(){
//         return(
//             <>
//                 <td>hello</td>
//                 <td>world</td>
//             </>
//         )
//     }
// }


// function Glossary(props){
//     return(
//         <dl>
//             {props.items.map(item => (
//                 // 没有`key`，将会触发一个key警告
//                 <React.Fragment key={item.id}>
//                 <dt>{item.term}</dt>
//                 <dd>{item.description}</dd>
//                 </React.Fragment>
//             ))}

//         </dl>
//     )
// }

// const appRoot = document.getElementById('app-root');
// const modalRoot = document.getElementById('modal-root');

// class Modal extends React.Component{
//     constructor(props){
//         super(props);
//         this.el=document.createElement('div');
//     }

//     componentDidMount(){
//         modalRoot.appendChild(this.el);
//     }

//     componentWillUnmount(){
//         modalRoot.removeChild(this.el);
//     }

//     render(){
//         return ReactDOM.createPortal(
//             this.props.children,this.el
//         )
//     }
// }

// class Parent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={clicks:0}
//         this.handleClick=this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState(prevState=>({
//             clicks:prevState.clicks+1
//         }))
//     }

//     render(){
//         return(
//             <div onClick={this.handleClick}>
//                 <p>number of clicks:{this.state.clicks}</p>
//                 <Modal>
//                     <Child />
//                 </Modal>
//             </div>
//         )
//     }
// }

// function Child(){
//     return(
//         <div className="modal">
//             <button>click</button>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Parent />,appRoot
// )


// class ErrorBoundary extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={hasError:false}
//     }

//     componentDidCatch(error,info){
//         this.setState({hasError:true});
//         logErrorToMyService(error,info);
//     }

//     render(){
//         if(this.state.hasError){
//             return <h1>somethings went wrong</h1>
//         }
//         return this.props.children;
//     }
// }

// //然后就可以像一个普通组件一样使用

// <ErrorBoundary>
//     <MyWidget />
// </ErrorBoundary>

// componentDidCatch(error,info){
//     logComponentStackToMyService(info,componentStack);
// }


// class HelloMessage extends React.Component{
//     render(){
//         return <div>
//             hello
//             <x-search>{this.props.name}</x-search>
//         </div>
//     }
// }

// const EnhancedComponent = higherOrderComponent(WrappedComponent);

// class CommentList extends React.Component{
//     constructor(){
//         super();
//         this.handleChange = this.handleChange.bind(this);
//         this.state={
//             // DataSource就是全局的数据源
//             comments:DataSource.getComments()
//         }
//     }

//     componentDidMount(){
//         // 添加事件处理器函数订阅数据
//         DataSource.addChangeListener(this.handleChange);
//     }

//     componentWillUnmount(){
//         // 清除事件处理函数
//         DataSource.removeChangeListener(this.handleChange);
//     }

//     handleChange(){
//         // 任何数据发生改变就更新组件
//         this.setState({
//             comment:DataSource.getComments()
//         })
//     }

//     render(){
//         return (
//             <div>
//                 {this.state.comments.map((comment)=(
//                     <Comment comment={comment} key={comment.id} />
//                 ))}
//             </div>
//         )
//     }
// }


// class BlogPost extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state={
//             blogPost:DataSource.getBlogPost(porps.id)
//         }
//     }

//     componentDidMount(){
//         DataSource.addChangeListener(this.handleChange);
//     }

//     componentWillUnmount(){
//         DataSource.removeChangeListener(this.handleChange);
//     }

//     handleChange(){
//         this.setState({
//             blogPost:DataSource.getBlogPost(this.props.id)
//         });
//     }

//     render(){
//         return <TextBlock text={this.state.blogPost} />
//     }
// }


// //函数接收一个组件参数
// function withSubscription(WrappedComponent,selectData){
//     //返回另一个新组件
//     return class extends React.Component{
//         constructor(props){
//             super(props);
//             this.handleChange=this.handleChange.bind(this);
//             this.state={
//                 data:selectData(DataSource,props)
//             }
//         }
//     }

//     componentDidMount(){
//         // 注意订阅数据
//         DataSource.addChangeListener(this.handleChange);
//     }

//     componentWillUnmount(){
//         DataSource.removeChangeListener(this.handleChange);
//     }

//     handleChange(){
//         this.setState({
//             data:selectData(DataSource,this.props)
//         })
//     }

//     render(){
//         // ……使用最新的数据渲染组件
//         // 注意此处将已有的props属性传递给原组件
//         return <WrappedComponent data={this.state.data} {...this.props} />;
//     }
// }

// function logProps(WrappedComponent){
//     class LogProps extends React.Component{
//         componentDidUpdate(prevProps){
//             console.log('old props:',prevProps);
//             console.log('new props:',this.props);
//         }

//         render(){
//             return <WrappedComponent {...this.props} />
//         }
//     }

//     return LogProps;
// }

// class FancyButton extends React.Component{
//     focus(){
//         //...
//     }
//     //...
// }

// export default logProps(FancyButton);

// class MouseTracker extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.handleMouseMove = this.handleMouseMove.bind(this);
//     this.state = { x: 0, y: 0 };
//   }

//   handleMouseMove=(event)=> {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   }

//   render() {
//     return (
//       <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//         <h1>Move the mouse around!</h1>
//         <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//       </div>
//     );
//   }
// }



// ReactDOM.render(
//     <MouseTracker/>,document.getElementById('root')
// )


// class Mouse extends React.Component{
//   constructor(props){
//     super(props);
//     // this.handleMouseMove= this.handleMouseMove.bind(this);
//     this.state={x:0,y:0};
//   }

//   handleMouse=(event)=>{
//     this.setState({
//       x:event.clientX,
//       y:event.clientY
//     });
//   }

//   render(){
//     return(
//       <div className="Mouse" onMouseMove={this.handleMouse}>
//         <div>THE CURRENT POSITION IS {this.state.x},{this.state.y}</div>
//       </div>
//     );
//   }
// }

// class MouseTracker extends React.Component{
//   render(){
//     return(
//       <div className="check">
//         <div>Mouse the mouse around</div>
//         <Mouse />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <MouseTracker />,document.getElementById('root')
// )












































































registerServiceWorker();
