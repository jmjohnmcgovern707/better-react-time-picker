import e from"react";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tbackground-color: #FFCE00;\r\n\tfont-family: \'Saira\', sans-serif;\r\n}\r\n\r\ninput[type="number"]::-webkit-outer-spin-button,\r\n    input[type="number"]::-webkit-inner-spin-button {\r\n      -webkit-appearance: none;\r\n      margin: 0;\r\n    }\r\n    \r\n    input[type="number"] {\r\n      -moz-appearance: textfield;\r\n    }\r\n    \r\n    h1#tp {\r\n      font-size: 42px;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      margin: 30px 0px;\r\n      font-weight: 900;\r\n    }\r\n    \r\n    h1#tp span {\r\n      font-weight: 300;\r\n    }\r\n    \r\n    .time-picker {\r\n      display: flex;\r\n      justify-content: space-around;\r\n      align-items: center;\r\n    \r\n      width: 100%;\r\n      max-width: 200px;\r\n      margin: 0 auto;\r\n      padding: 25px 15px;\r\n    \r\n      background-color: #F3F3F3;\r\n      border-radius: 8px;\r\n      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);\r\n    \r\n      color: #53565A;\r\n      font-size: 42px;\r\n      font-weight: 700;\r\n    \r\n      user-select: none;\r\n    }\r\n    \r\n    .time-picker .hour,\r\n    .time-picker .minute {\r\n      position: relative;\r\n      min-width: 60px;\r\n      text-align: center;\r\n      display: flex;\r\n      justify-content: stretch;\r\n      align-items: stretch;\r\n    }\r\n    \r\n    .time-picker .hour .hr,\r\n    .time-picker .minute .min {\r\n      background: none;\r\n      font-size: 42px;\r\n      appearance: none;\r\n      border: none;\r\n      outline: none;\r\n      display: block;\r\n      width: 100%;\r\n      text-align: center;\r\n      font-family: \'Saira\', sans-serif;\r\n    }\r\n    \r\n    .time-picker .hour .hr-up,\r\n    .time-picker .hour .hr-down,\r\n    .time-picker .minute .min-up,\r\n    .time-picker .minute .min-down {\r\n      position: absolute;\r\n      left: 50%;\r\n      transform: translateX(-50%);\r\n    \r\n      width: 40px;\r\n      height: 20px;\r\n    \r\n      border-left: 20px solid transparent;\r\n      border-right: 20px solid transparent;\r\n    \r\n      cursor: pointer;\r\n    }\r\n    \r\n    .time-picker .hour .hr-up,\r\n    .time-picker .minute .min-up {\r\n      top: -10px;\r\n      border-bottom: 20px solid #AAA;\r\n    }\r\n    \r\n    .time-picker .hour .hr-down,\r\n    .time-picker .minute .min-down {\r\n      bottom: -10px;\r\n      border-top: 20px solid #AAA;\r\n    }\r\n    \r\n    .time-picker .hour .hr-up:hover,\r\n    .time-picker .hour .hr-down:hover,\r\n    .time-picker .minute .min-up:hover,\r\n    .time-picker .minute .min-down:hover {\r\n      border-bottom-color: #53565A;\r\n      border-top-color: #53565A;\r\n    }');class t extends e.Component{constructor(e){super(e),this.state={hour:0,minute:0,time:"",time_picker_element:null,hr_element:null,min_element:null,hr_up:null,hr_down:null,min_up:null,min_down:null}}componentDidMount(){this.setState((()=>({time_picker_element:document.querySelector(".time-picker"),hr_element:document.querySelector(".time-picker .hour .hr"),min_element:document.querySelector(".time-picker .minute .min"),hr_up:document.querySelector(".time-picker .hour .hr-up"),hr_down:document.querySelector(".time-picker .hour .hr-down"),min_up:document.querySelector(".time-picker .minute .min-up"),min_down:document.querySelector(".time-picker .minute .min-down")})),(()=>{this.state.hr_up.addEventListener("click",this.hour_up),this.state.hr_down.addEventListener("click",this.hour_down),this.state.min_up.addEventListener("click",this.minute_up),this.state.min_down.addEventListener("click",this.minute_down),this.state.hr_element.addEventListener("change",this.hour_change),this.state.min_element.addEventListener("change",this.minute_change)}));let e=new Date,t=e.getHours(),n=e.getMinutes();this.setTime(t,n)}componentWillUnmount(){this.state.hr_up.removeEventListener("click",this.hour_up),this.state.hr_down.removeEventListener("click",this.hour_down),this.state.min_up.removeEventListener("click",this.minute_up),this.state.min_down.removeEventListener("click",this.minute_down),this.state.hr_element.removeEventListener("change",this.hour_change),this.state.min_element.removeEventListener("change",this.minute_change)}hour_change=e=>{e.target.value>23?e.target.value=23:e.target.value<0&&(e.target.value="00"),""==e.target.value&&(e.target.value=this.formatTime(this.state.hour)),this.setState((()=>({hour:e.target.value})))};minute_change=e=>{e.target.value>59?e.target.value=59:e.target.value<0&&(e.target.value="00"),""==e.target.value&&(e.target.value=this.formatTime(this.state.minute)),this.setState((()=>({minute:e.target.value})))};hour_up=()=>{this.setState((e=>({hour:e.hour+1})),(()=>{this.state.hour>23?this.setState((()=>({hour:0})),(()=>{this.setTime(this.state.hour,this.state.minute)})):this.setTime(this.state.hour,this.state.minute)}))};hour_down=()=>{this.setState((e=>({hour:e.hour-1})),(()=>{this.state.hour<0?this.setState((()=>({hour:23})),(()=>{this.setTime(this.state.hour,this.state.minute)})):this.setTime(this.state.hour,this.state.minute)}))};minute_up=()=>{this.setState((e=>({minute:e.minute+1})),(()=>{this.state.minute>59?this.setState((e=>({minute:0,hour:e.hour+1})),(()=>{this.setTime(this.state.hour,this.state.minute)})):this.setTime(this.state.hour,this.state.minute)}))};minute_down=()=>{this.setState((e=>({minute:e.minute-1})),(()=>{this.state.minute<0?this.setState((e=>({minute:59,hour:e.hour-1})),(()=>{this.setTime(this.state.hour,this.state.minute)})):this.setTime(this.state.hour,this.state.minute)}))};setTime=(e,t)=>{this.setState((n=>({hour:e,minute:t,time:this.formatTime(e)+":"+this.formatTime(t)})),(()=>{this.state.hr_element.value=this.formatTime(e),this.state.min_element.value=this.formatTime(t),this.state.time_picker_element.dataset.time=this.formatTime(e)+":"+this.formatTime(t),this.props.setTimeNow(this.state.time)}))};formatTime=e=>(e<10&&(e="0"+e),e);render(){return e.createElement("div",null,e.createElement("div",{class:"time-picker","data-time":"00:00"},e.createElement("div",{class:"hour"},e.createElement("div",{class:"hr-up"}),e.createElement("input",{type:"number",class:"hr",value:"00"}),e.createElement("div",{class:"hr-down"})),e.createElement("div",{class:"separator"},":"),e.createElement("div",{class:"minute"},e.createElement("div",{class:"min-up"}),e.createElement("input",{type:"number",class:"min",value:"00"}),e.createElement("div",{class:"min-down"}))),e.createElement("div",null))}}export{t as BetterReactTimePicker};
