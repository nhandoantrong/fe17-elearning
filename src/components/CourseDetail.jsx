import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import {connect} from 'react-redux';

class CourseDetail extends Component {
    render() {
        const id = this.props.match.params.id
        console.log(this.props.courses)
        const course = this.props.courses.find(course => course.id === id)
        return (
            <div>
                <h1>THÔNG TIN CHI TIẾT KHÓA HỌC</h1>

                <Container>
                    <Row>
                        <Col md={5}>
                            <img
                                src={course.src}
                                width="100%"
                            />

                        </Col>
                        <Col md={7}>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td>Tên khóa học: </td>
                                        <td>{course.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả: </td>
                                        <td>{course.desc}</td>
                                    </tr>
                                    <tr>
                                        <td>Đánh giá: </td>
                                        <td>{course.rates}</td>
                                    </tr>
                                    <tr>
                                        <td>Giá: </td>
                                        <td>{course.price}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.coursesReducer
    }
}

export default connect(mapStateToProps)(CourseDetail);