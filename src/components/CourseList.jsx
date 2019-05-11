import React, { Component } from 'react';
import {Container, Row } from 'reactstrap'
import Course from './Course'

class CourseList extends Component {
    render() {
        const elmCourse = this.props.course.map((course, index) => {
            return <Course 
                course={course}
                key={index}
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
                
            </div>
        );
    }
}

export default CourseList;