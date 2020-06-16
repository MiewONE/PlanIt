import React,{Component} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class checkplan extends Component {
    
    render(){
        const tm = [1,2,3,4,5,6,7,8,9,10];
        const tb_time = tm.map(
            (p) => (
                <TableRow>
                    <TableCell>{p}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
            )
        );
        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>시간</TableCell>
                        <TableCell>월</TableCell>
                        <TableCell>화</TableCell>
                        <TableCell>수</TableCell>
                        <TableCell>목</TableCell>
                        <TableCell>금</TableCell>
                        <TableCell>토</TableCell>
                        <TableCell>일</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tb_time}
                    {/* <TableRow>
                    <TableCell>시간</TableCell>
                        <TableCell>월</TableCell>
                        <TableCell>화</TableCell>
                        <TableCell>수</TableCell>
                        <TableCell>목</TableCell>
                        <TableCell>금</TableCell>
                        <TableCell>토</TableCell>
                        <TableCell>일</TableCell>
                    </TableRow> */}
                </TableBody>
            </Table>
        );
    }
    
}

export default checkplan;