import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { post } from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';

class ReservedAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            g_DATE: '',
            NAME: '',
            joinMem: '',
            teamName: '',
            g_time: ''
        };
    }
    
    componentDidMount() {
        var _month = this.props.month + 1
        _month = _month < 10 ? "0" + _month : _month;
        this.state.g_DATE = this.props.year + "-" + _month + "-" + this.props.date;
    }
    handleFormSubmit = (e) => {
        e.preventDefault()

        this.addReserved()
            .then((response) => {
                //console.log(response.data);
                this.props.stateRefresh();
            }).catch(error => console.log('문자열이 비었거나 이유모를 에러입니다.'));
        this.setState = ({
            g_DATE: '',
            NAME: '',
            joinMem: '',
            teamName: '',
            g_time: ''
        });


        window.location.reload();
    }
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    
    addReserved = () => {
        var time_split = this.state.g_time.split('~')
        if (this.state.g_DATE == "" || this.state.NAME == "" || this.state.joinMem == "" || this.state.teamName == "" || this.state.g_time == "") {
            alert("칸이 비어져있습니다. 채워주세요")
            console.log(this.state.g_DATE + "" + this.state.NAME + "" + this.state.joinMem + "" + this.state.teamName + "" + this.state.g_time);

            window.location.reload();
        
        }else if(((time_split[0]*1)>24||(time_split[0]*1)<0)||((time_split[1]*1)>24||(time_split[1]*1)<0)
        ||((time_split[0]*1)+(time_split[0]*1)>47)){
            alert("시간 형식을 맞춰주세요 시간은 24까지 가능합니다.")
            window.location.reload();
        }
        const url = '/api/members';
        const formData = new FormData();
        // formData.append('TYPE','INSERT');
        formData.append('g_DATE', this.state.g_DATE);
        formData.append('NAME', this.state.NAME);
        formData.append('joinMem', this.state.joinMem);
        formData.append('teamName', this.state.teamName);
        formData.append('g_time', this.state.g_time);

        
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return post(url, formData, config);
    }


    render() {
        const sty = {
            margin: "3px",
            'width': "25%",
        }
        const btn_sty = {
            float: "right",
            width: "10%"
        }
        // const [tName,setTeam] =React.useState('');
        // const [cnt,setCnt] =React.useState('');
        const ValueChange = (event) => {
            // setTeam(event.target.value);
            this.state.teamName = event.target.value;
        };
        const useStyles = makeStyles((theme) => ({
            FormControl: {
              margin: theme.spacing(1),
              minWidth: 120,
            },
            selectEmpty: {
              marginTop: theme.spacing(2),
            },
          }));
        const cntChange = (event) => {
            // setCnt(event.target.value);
            this.state.joinMem = event.target.value;
        };
        const selectbox_style = {
            // float: 'left'
            margin :'0px auto'
            
    }
        const w_h = {
            width: '20%',
        }
        const classes = useStyles;
        return (

            <form onSubmit={this.handleFormSubmit}>
                <h1>예약하기</h1>
                <hr />
                <button type="submit" style={btn_sty}>예약</button>

                    <TextField id="outlined-basic" label="년-월-일" variant="outlined" name="g_DATE" value={this.state.g_DATE} onChange={this.handleValueChange} style={sty} />
                    <TextField id="outlined-basic" label="이름" variant="outlined" name="NAME" value={this.state.NAME} onChange={this.handleValueChange} style={sty} />
                    <TextField id="outlined-basic" label="활동할 시간 ex)13~19" variant="outlined" name="g_time" value={this.state.g_time} onChange={this.handleValueChange} style={sty} />

                <br/>
                <FormControl style={{width:'40%',margin:'3px'}}className={classes.formControl}>
                    <InputLabel id="demo-simple-select-helper-label">팀 선택하기</InputLabel>
                    <Select 
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={this.state.teamName}
                        onChange={ValueChange}

                    >
                        <MenuItem value="팀 이름">
                        </MenuItem>
                        <MenuItem style={{background:'#B3856D'}} value='파밍'>파밍</MenuItem>
                        <MenuItem style={{background:'#63D98C'}} value='Process'>Process</MenuItem>
                        <MenuItem style={{background:'skyblue'}}value='ㅇㅈㅇ'>ㅇㅈㅇ</MenuItem>
                        <MenuItem value='SIM'>SIM</MenuItem>
                        <MenuItem style={{background:'#3F51B5'}} value='HPL'>HPL</MenuItem>

                    </Select>
                    </FormControl>
                
                <FormControl style={{width:'40%',margin:'3px'}}className={classes.formControl}>
                    <InputLabel  id="demo-simple-select-helper-label">팀 인원 선택</InputLabel>
                    <Select

                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={this.state.joinMem}
                        onChange={cntChange}
                    >
                        <MenuItem value="참여 인원">
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>

                    </Select>
                    </FormControl>
                

                {/* <TextField id="outlined-basic" label="참여인원" variant="outlined" name="joinMem" value={this.state.joinMem} onChange={this.handleValueChange} style={sty}/> */}

                {/* 이름 :<input type="text" name="NAME" value={this.state.NAME} onChange={this.handleValueChange}/> <br/>
                같이하는 멤버:<input type="text" name="joinMem" value={this.state.joinMem} onChange={this.handleValueChange}/><br/>
                팀 이름:<input type="text" name="teamName" value={this.state.teamName} onChange={this.handleValueChange}/><br/>
                시간 :<input type="text" name="g_time" value={this.state.g_time} onChange={this.handleValueChange}/><br/> */}

            </form>
        );
    }
}

export default ReservedAdd;
// export default withStyles(styles)(ReservedAdd);