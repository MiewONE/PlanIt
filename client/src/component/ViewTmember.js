import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Members from './members';
import CircularProgress from '@material-ui/core/CircularProgress';

class ViewTmember extends Component{
    render(){
        const { classes } = this.props;
        return(
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

                {this.props.tmember ? this.props.tmember.map(p => {
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
                      {/* <CircularProgress className={classes.progress} variant="determinate" value={this.props.completed} />  */}
                    </TableCell>
                  </TableRow>
                }
              </TableBody>
            </Table>
        );
    }
}

export default ViewTmember;