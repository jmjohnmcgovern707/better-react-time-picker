// export const Requirements = () => {
//     return(<>Hello World</>)
// }

import React from 'react';
import './BetterReactTimePicker.css'

export class BetterReactTimePicker extends React.Component {
    

  constructor(props) {
    super(props)
    this.state = {
     hour:0,
     minute:0,
     time:"",
     time_picker_element : null,

    hr_element : null,
    min_element : null,
    
    hr_up : null,
    hr_down : null,
    
    min_up : null,
    min_down : null
    }
  }

  componentDidMount() {

    this.setState(()=>{
return {
    time_picker_element : document.querySelector('.time-picker'),

    hr_element : document.querySelector('.time-picker .hour .hr'),
    min_element : document.querySelector('.time-picker .minute .min'),
    
    hr_up : document.querySelector('.time-picker .hour .hr-up'),
    hr_down : document.querySelector('.time-picker .hour .hr-down'),
    
    min_up : document.querySelector('.time-picker .minute .min-up'),
    min_down : document.querySelector('.time-picker .minute .min-down'),
}
    },()=>{
        this.state.hr_up.addEventListener('click', this.hour_up);
        this.state.hr_down.addEventListener('click', this.hour_down);
        
        this.state.min_up.addEventListener('click', this.minute_up);
        this.state.min_down.addEventListener('click', this.minute_down);
        
        this.state.hr_element.addEventListener('change', this.hour_change);
        this.state.min_element.addEventListener('change', this.minute_change);
    })

    
    
    let d = new Date();
    
    let hour = d.getHours();
    let minute = d.getMinutes();
    
    this.setTime(hour,minute);
    
    // EVENT LISTENERS
   
    
  }

  componentWillUnmount() {
    this.state.hr_up.removeEventListener('click', this.hour_up);
    this.state.hr_down.removeEventListener('click', this.hour_down);
    
    this.state.min_up.removeEventListener('click', this.minute_up);
    this.state.min_down.removeEventListener('click', this.minute_down);
    
    this.state.hr_element.removeEventListener('change', this.hour_change);
    this.state.min_element.removeEventListener('change', this.minute_change);
  }

  hour_change= (e)=> {
    if (e.target.value > 23) {
        e.target.value = 23;
    } else if (e.target.value < 0) {
        e.target.value = '00';
    }

    if (e.target.value == "") {
        e.target.value = this.formatTime(this.state.hour);
    }

    //hour = e.target.value;
    this.setState(()=>{
        return {
            hour:e.target.value
        }
    })
}

minute_change= (e)=> {
    if (e.target.value > 59) {
        e.target.value = 59;
    } else if (e.target.value < 0) {
        e.target.value = '00';
    }

    if (e.target.value == "") {
        e.target.value = this.formatTime(this.state.minute);
    }

    //minute = e.target.value;
    this.setState(()=>{
        return {
            minute:e.target.value
        }
    })
}

hour_up= ()=> {
    //alert('hour_up, this.state.hour='+this.state.hour)
    this.setState((prevState)=>{
        return {
          hour:prevState.hour+1
        }
    },()=>{
    //alert('2 hour_up, this.state.hour='+this.state.hour)

        if (this.state.hour > 23) {
            //hour = 0;
            this.setState(()=>{
                return {
                    hour:0
                }
            },()=>{
                this.setTime(this.state.hour,this.state.minute);
            })
            
        } else {
            this.setTime(this.state.hour,this.state.minute);
        }
    })
    
    
    
}
hour_down= ()=> {
    // hour--;
    // if (hour < 0) {
    //     hour = 23;
    // }

    this.setState((prevState)=>{
        return {
          hour:prevState.hour-1
        }
    },()=>{
        if (this.state.hour < 0) {
            //hour = 0;
            this.setState(()=>{
                return {
                    hour:23
                }
            },()=>{
                this.setTime(this.state.hour,this.state.minute);
            })
        } else {
            this.setTime(this.state.hour,this.state.minute);
        }
    })
    

    
}

minute_up= ()=> {
    // minute++;
    // if (minute > 59) {
    //     minute = 0;
    //     hour++;
    // }
    // this.setTime(hour,minute);

    this.setState((prevState)=>{
        return {
          minute:prevState.minute+1
        }
    },()=>{
        if (this.state.minute > 59) {
            //hour = 0;
            this.setState((prevState)=>{
                return {
                    minute:0,
                    hour:prevState.hour+1
                }
            },()=>{
                this.setTime(this.state.hour,this.state.minute);
            })
        } else {
            this.setTime(this.state.hour,this.state.minute);
        }
    })


}
minute_down= ()=> {
    // minute--;
    // if (minute < 0) {
    //     minute = 59;
    //     hour--;
    // }
    // this.setTime(hour,minute);

    this.setState((prevState)=>{
        return {
          minute:prevState.minute-1
        }
    },()=>{
        if (this.state.minute < 0) {
            //hour = 0;
            this.setState((prevState)=>{
                return {
                    minute:59,
                    hour:prevState.hour-1
                }
            },()=>{
                this.setTime(this.state.hour,this.state.minute);
            })
        } else {
            this.setTime(this.state.hour,this.state.minute);
        }
    })
}

setTime= (hour,minute)=> {
    //alert('setTime, this.state.hour='+this.state.hour)
    //alert('setTime, this.state.hour='+this.state.minute)

    this.setState((prevState)=>{
        return {
            hour:hour,
            minute:minute,
            time:this.formatTime(hour) + ':' + this.formatTime(minute)
        }
    },()=>{
        this.state.hr_element.value = this.formatTime(hour);
        this.state.min_element.value = this.formatTime(minute);
        this.state.time_picker_element.dataset.time = this.formatTime(hour) + ':' + this.formatTime(minute);
        this.props.setTimeNow(this.state.time)
    })
    
}

formatTime= (time)=> {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}
  
render() {
    
        return (
                    <div>
                    
                    
                    <div class="time-picker" data-time="00:00">
                        <div class="hour">
                            <div class="hr-up"></div>
                            <input type="number" class="hr" value="00" />
                            <div class="hr-down"></div>
                        </div>

                        <div class="separator">:</div>

                        <div class="minute">
                            <div class="min-up"></div>
                            <input type="number" class="min" value="00" />
                            <div class="min-down"></div>
                        </div>
                        
                    </div>
                    <div>
                            
                            {/* <button>submit</button> */}
                            
                        </div>
                    </div>
                )
           }
}

