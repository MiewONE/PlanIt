import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
class members extends React.Component{
    render(){
        return(


                <TableRow>
                    {/* <TableCell>{this.props.date}</TableCell> */}
                    <TableCell>{this.props.teamname}</TableCell>
                    <TableCell>{this.props.name}</TableCell>
                </TableRow>

            
        );
        
    }
}
export default members;