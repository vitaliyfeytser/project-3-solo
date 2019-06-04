import React, { Component } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const moment = require("moment");
moment().format();

class MonthNav extends Component {

    onClick(params) {
        this.props.handleMonthChange(params)
    }
    render() {
        console.log("--------MonthNav props: ", this.props)
        // console.log("MonthNav props handleMonthChange: ", this.props.handleMonthChange)
        console.log("!!!!! - this.props.month: ", this.props.month)

        return (
            <>
                <ButtonGroup aria-label="Basic example">
                    <Button
                        variant="secondary"
                        onClick={() => this.onClick("prev")}
                    >
                        <i className="fas fa-angle-left"></i>
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => this.onClick("now")}
                    >{moment(this.props.month).format('MMMM YYYY')}
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => this.onClick("next")}
                        value=">">
                        <i className="fas fa-angle-right"></i>
                    </Button>
                </ButtonGroup>
            </>
        )
    }
}

export default MonthNav