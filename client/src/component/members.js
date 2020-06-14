import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class members extends React.Component{
    // componentDidMount() {
    //     this.date_view();
    // }
    // date_view = () => {
    //     const url = '/api/members';
    //     const formData = new FormData();
    //     formData.append('TYPE','SELECT');
    //     formData.append('Dt',this.props.Year+"-"+this.props.Month+"-"+this.props.day);
        
    //     const config={
    //         headers:{
    //             'content-type' : 'multipart/form-data'
    //         }
    //     }

    //     return post(url,formData,config);
    // }
    render(){
        return(
                <TableRow>
                    {/* <TableCell>{this.props.date}</TableCell> */}
                    <TableCell>{this.props.date}</TableCell>
                    <TableCell>{this.props.teamname}</TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.joinmember}</TableCell>
                    <TableCell>{this.props.time}</TableCell>
                </TableRow>
        );
        
    }
}
export default members;