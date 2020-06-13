import React from 'react';


class calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    Click = () => {
        
    }
    componentDidMount = () => {
        let now = new Date();
        let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let week = this.makeWeekArr(date);
        this.setState({
            date, week
        })
    };

    makeWeekArr = date => {
        let day = date.getDay();
        let week = [];
        for (let i = 0; i < 7; i++) {
            let newDate = new Date(date.valueOf() + 86400000 * (i - day));
            week.push([i, newDate]);
        }
        return week;
    };
    onPressArrowLeft = () => {
        let newDate = new Date(this.props.date.valueOf() - 86400000 * 7);
        let newWeek = this.makeWeekArr(newDate);
        this.setState({
            date: newDate, week: newWeek
        })
    };

    onPressArrowRight = () => {
        let newDate = new Date(this.props.date.valueOf() + 86400000 * 7);
        let newWeek = this.makeWeekArr(newDate);
        this.setState({
            date: newDate, week: newWeek
        })
    };
}

export default calendar;