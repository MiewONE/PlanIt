import React,{Component} from 'react';
import {post} from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles,withStyles } from '@material-ui/core/styles';

class ReservedAdd extends Component{
    constructor(props){
        super(props);
        this.state={
            g_DATE:'',
            NAME:'',
            joinMem:'',
            teamName:'',
            g_time:''
        };
    }
    componentDidMount() {
        var _month = this.props.month+1
        _month = _month<10?"0"+_month:_month;
        this.state.g_DATE = this.props.year+"-"+_month+"-"+this.props.date;
      }
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addReserved()
            .then((response)=>{
                //console.log(response.data);
                this.props.stateRefresh();
            });
        this.setState=({
            g_DATE:'',
            NAME:'',
            joinMem:'',
            teamName:'',
            g_time:''
        });
        
        
        // window.location.reload();
    }
    handleValueChange = (e) => {
        let nextState={};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    addReserved = () => {
        const url = '/api/members';
        const formData = new FormData();
        // formData.append('TYPE','INSERT');
        formData.append('g_DATE',this.state.g_DATE);
        formData.append('NAME',this.state.NAME);
        formData.append('joinMem',this.state.joinMem);
        formData.append('teamName',this.state.teamName);
        formData.append('g_time',this.state.g_time);

        const config={
            headers:{
                'content-type' : 'multipart/form-data'
            }
        }

        return post(url,formData,config);
    }
    
      
    render(){
        const sty = {
            margin:"3px",
            'width':"20%",
            'font-size':"10px"
        }
        const btn_sty={
            float:"right",
            width:"10%"
        }
        return(
            
            <form onSubmit={this.handleFormSubmit}>
                <h1>예약하기</h1>
                <hr/>
                <button type="submit" style={btn_sty}>예약</button>
                {/* 날짜: <input type="text" name="g_DATE" value={this.state.g_DATE} onChange={this.handleValueChange}/><br/> */}
                <TextField id="outlined-basic" label="년-월-일" variant="outlined" name="g_DATE" value={this.state.g_DATE} onChange={this.handleValueChange} style={sty}/>
                <TextField id="outlined-basic" label="팀이름" variant="outlined" name="teamName" value={this.state.teamName} onChange={this.handleValueChange} style={sty}/>
                <TextField id="outlined-basic" label="이름" variant="outlined" name="NAME" value={this.state.NAME} onChange={this.handleValueChange} style={sty}/>
                <TextField id="outlined-basic" label="참여인원" variant="outlined" name="joinMem" value={this.state.joinMem} onChange={this.handleValueChange} style={sty}/>
                <TextField id="outlined-basic" label="활동할 시간 ex)13~19" variant="outlined" name="g_time" value={this.state.g_time} onChange={this.handleValueChange} style={sty}/>
                {/* 이름 :<input type="text" name="NAME" value={this.state.NAME} onChange={this.handleValueChange}/> <br/>
                같이하는 멤버:<input type="text" name="joinMem" value={this.state.joinMem} onChange={this.handleValueChange}/><br/>
                팀 이름:<input type="text" name="teamName" value={this.state.teamName} onChange={this.handleValueChange}/><br/>
                시간 :<input type="text" name="g_time" value={this.state.g_time} onChange={this.handleValueChange}/><br/> */}
                
            </form>
        );
    }
}

export default ReservedAdd;
