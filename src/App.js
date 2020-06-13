
import React, { useState, useRef, Component } from 'react';
// import './component/calendars.css';
import Calendar from 'react-calendar';
import './component/calendars.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography  from '@material-ui/core/Typography';
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
const styles =theme =>({
  root : {
    marginTop: theme.spacing.uint * 3,
  }
})
const tmember =[{
  'id':0,
  'name' : '박원균',
  'teamname':'react'},
  {'id' : 1,
  'name' : 'test1',
  'teamname':'파밍'}
]
class App extends Component {
  state = {
    date: new Date(),
    num:0,
    name:'',
    teamname:'',
    join_member:[{
      name1:'',
      name2:'',
      name3:'',
      name4:''
    }],
    bookingtime:''
  };

  onChange = date => this.setState({ date })
  changeSelectedDate = date => {
    this.setState({ date });
  };
  
  render() {
    
    const cal_div = {
      width: "30%",
      display: "inline-block",
    };
    const sel_div = {
      width: "70%",
      display: "inline-block",

    };
    const { classes } = this.props;
    
    return (
      <div>
        <div style={cal_div}>
          <Paper elevation={2}>
            <Calendar
              onChange={this.changeSelectedDate}
              value={new Date()}
            />
          </Paper>

        </div>
        <div style={sel_div}>
          <Paper elevation={3}>
            <AppBar position="static">
              <Typography className={classes.title} variant="h4" align="center" >
              {this.state.date.getFullYear()}년
            {this.state.date.getMonth()+1}월
            {this.state.date.getDate()}일
              </Typography>
              
            
            </AppBar>
            
            예약 사항이 나오는곳입니다.<br></br>
              {/* 이름 : {st.name}
              이름 : {st.id} */}
            <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>팀명</TableCell>
                    <TableCell>이름</TableCell>
                    <TableCell>참여인원</TableCell>
                    <TableCell>활동 시간</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    tmember.map(p =>{return (<Members date={this.state.date.getDay()} id={p.id} name={p.name} teamname={p.teamname} /> );})
                  }
                  
                  
                {/* {this.state.customers ? this.state.customers.map(c => { return <Customer key={c.id} id={c.id} img={c.img} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> }) */}
                </TableBody>
            </Table>
          </Paper>

        </div>
        {/* <Table>
          <TableBody>
            <TableRow>
              <Calendar
                onChange={this.changeSelectedDate}
                value={new Date()}
              />
            </TableRow>
            <TableRow>
            {this.state.date.getFullYear()}
              <Paper elevation={3}>
                
              </Paper>
            </TableRow>

          </TableBody>
        </Table> */}



        <div>

        </div>
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