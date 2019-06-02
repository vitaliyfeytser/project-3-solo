import React, { Component } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


class MonthNav extends Component {

    render() {
        console.log("MonthNav props: ", this.props)
        // console.log("MonthNav props handleMonthChange: ", this.props.handleMonthChange)

        return (
            <>
                <ButtonGroup aria-label="Basic example">
                    <Button
                        variant="secondary"
                        onClick={this.props.handleMonthChange}
                    >
                        <i className="fas fa-angle-left"></i>
                    </Button>
                    <Button variant="secondary">Moth and Year</Button>
                    <Button variant="secondary" value=">"><i className="fas fa-angle-right"></i></Button>
                </ButtonGroup>
            </>
        )
    }
}

export default MonthNav