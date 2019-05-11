import React, { Component } from 'react';
import {Container, Row } from 'reactstrap'
import Course from './Course'
import ModalDetailCourse from './ModalDetailCourse';

class CourseList extends Component {

    state = {
        modal : false,
    }

    openModal = () =>{
        this.setState({
            modal : !this.state.modal,
        })
    }

    render() {
        const elmCourse = this.props.course.map((course, index) => {
            return <Course 
                course={course}
                key={index}

                openModal ={this.openModal}
                deleteCourse={this.props.deleteCourse}
            />
        })
        return (
            <div>
                DANH SÁCH KHÓA HỌC

                <Container>
                    <Row>
                        {elmCourse}
                    </Row>
                </Container>
                <ModalDetailCourse modal ={this.state.modal} />
            </div>
        );
    }
}

export default CourseList;