import React, { useState, useRef, Component } from 'react';
// import './component/calendars.css';
import Calendar from 'react-calendar';
import './component/calendars.css';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { colors } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Members from './component/members';
import ReservedAdd from './component/ReservedAdd';
import {get,post} from 'axios';

const styles = theme => ({
  progress: {
    margin: theme.spacing.uint * 2
  }
})
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      tmember: "",
      completed: 0
    };
  }
  stateRefresh= ()=>{
    
    this.setState({
      tmember: "",
      completed: 0
    });
    
    //console.log("post 이후"+this.state.date.getFullYear(),this.state.date.getMonth()+1,this.state.date.getDate());
    this.callApi()
      .then(res => this.setState({ tmember: res }))
      .catch(err => console.log(err))
  }


  progress = () => {
    const { completed } = this.state.completed;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }
  componentDidMount() {//렌더링하기전에 
    this.timer = setInterval(this.progress, 20);
    
    this.stateRefresh();
    // this.stateRefresh();
  }
  
  componentDidUpdate(prevProps, prevState){//날짜 변수가 바뀌었을때

    if((prevState.date.getDate()!=this.state.date.getDate())||
    (prevState.date.getFullYear()!=this.state.date.getFullYear())||
    (prevState.date.getMonth()!=this.state.date.getMonth()))
    {
      //console.log("preState"+prevState.date.getDate());
      //console.log("thisState"+this.state.date.getDate());
      this.stateRefresh();
    }
  }

  callApi = async () => {
    const response = await fetch('/api/members');
    const body = await response.json();
    const gg = body;
    var ts = [];
    //console.log("출력");
    gg.map(p=>{
      if(p._DATE == this.state.date.getFullYear()+"-0"+(this.state.date.getMonth()+1)+"-"+this.state.date.getDate())
      {
        
        // //console.log(p.id);
        // //console.log(p._DATE);
        // //console.log(p.NAME);
        // //console.log(p.teamName);
        
        ts.push({'id':p.id,_DATE:p._DATE,NAME:p.NAME,teamName:p.teamName,_time:p._time,joinMem:p.joinMem});
      }else{
        return "";
      }
    });
    //console.log(ts);
    return ts;
  }
  onChange = date => this.setState({ date })
  changeSelectedDate = date => {
    this.setState({ date });
  };
  
  render() {
    const cal_div = {
      width: "50%",
      float:"left"
    };
    const sel_div = {
      width: "50%",
      float:"left",
      overflow:"auto"
    };
    const img_back = {
      background:"#4B89DC",
    };

    const span_left={
      float:"right",
      right:"20px"
    } ;   
    const { classes } = this.props;

    return (
      <div>
        <div style={cal_div}>
        <div style={img_back}>
            <img src="http://choolab.com/files/attach/images/196/nslablogo_main.png" alt="nslab"/>
            
          </div>
          <Paper elevation={0}>
            <Calendar
              onChange={this.changeSelectedDate}
              value={new Date()}
            />
            <ReservedAdd 
              year = {this.state.date.getFullYear()}
              month = {this.state.date.getMonth()}
              date = {this.state.date.getDate()}
              stateRefresh={this.stateRefresh}
            />
          </Paper>
          
          
        </div>
        <div style={sel_div}>
          <Paper elevation={3}>
            <AppBar position="static">
              <Typography className={classes.title} variant="h4" align="center" height="60%" >
                {this.state.date.getFullYear()}년
                {" "+(this.state.date.getMonth() + 1)}월
                {" "+this.state.date.getDate()}일
              </Typography>
            </AppBar>
              예약 사항이 나오는곳입니다.<br />
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>신청날짜</TableCell>
                  <TableCell>팀명</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>참여인원</TableCell>
                  <TableCell>활동 시간</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {this.state.tmember ? this.state.tmember.map(p => {
                  return (
                    <Members
                      // Year={this.state.date.getFullYear()}
                      // Month={this.state.date.getMonth()+1}
                      // day={this.state.date.getDay()}
                      id={p.id}
                      date={p._DATE}
                      name={p.NAME}
                      teamname={p.teamName}
                      time={p._time}
                      joinmember={p.joinMem} />);
                })
                  :
                  <TableRow>
                    <TableCell colSpan="6" align="center">
                      <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} /> 
                    </TableCell>
                  </TableRow>
                }
              </TableBody>
            </Table>
            
          </Paper>

        </div>
        <Paper elevation={3}>
          <span style={span_left}>Made by MiewOne</span>
        </Paper>
      </div>

    );
  }

}


export default withStyles(styles)(App);

//constructor() - 생성자
//componentWillMount() - 화면에 나가기 직전에 호출되는 API #이제 필요없데
//componentDidMount() - 화면에 나타나게 됐을때 호출
//componentWillReceiveProps() -컴포넌트가 새로운 props를 받게됐을때 호출
//static getDerivedStateFromProps() - props로 받아온 값을 state로 동기화 하는 작업이 필요할경우 사용
//shouldComponentUpdate() - 컴포넌트를 최적화하는 작업에서 매우 유용하게 사용
//componentwillUpdate() - shouldComponentUpdate에서 ture를 반환했을때만 호출 애니메이션 초기화,이벤트 리스너를 없애는 작업
//getSnapshotBeforeUpdate() - 1.render() 2.getSan....Update() 3. 실제 DOM에 변화 발생 4. componentDidUpdate Dom변화가 일어나기 직전의
//                            dom 상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate에서 3번째 파라미터로 받아올 수 있게 됩니다.
//componentDidUpdate() - render()를 호출하고 난 다음에 발생하게 됨. this.props와 this.state가 바뀜. 파라미터를 통해 이전의 값 prevProps와 prevState를 조회
//                       할수 있음
//componentWillUnmount() - 등록했었던 이벤트를 제거, setTimeout을 걸은것이 있다면 clearTime

//componentDidCatch() 에러가 발생하면 함수가 실행되게하고, state.error를 true로 설정하게 하고,render 함수쪽에서 이에 따라 에러를 띄워줌