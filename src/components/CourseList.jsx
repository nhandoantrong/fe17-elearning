import React, { Component } from 'react';
import {Container, Row } from 'reactstrap'
import Course from './Course'
import ModalDetailCourse from './ModalDetailCourse';
import {connect} from 'react-redux'
import {deleteCourse} from '../actions/courses';

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
        const elmCourse = this.props.courses.map((course, index) => {
            return <Course 
                course={course}
                key={index}

                openModal ={this.openModal}
                // deleteCourse={() => this.props.deleteCourse(course.id)}
                deleteCourse={this.props.deleteCourse.bind(this, course.id)}
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

const mapStateToProps = (state) => {
    return {
        courses: state.coursesReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourse: (id) => {
            dispatch(deleteCourse(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
// higher order component ==> decorator