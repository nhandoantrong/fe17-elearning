import React, { Component } from 'react';
import data from '../data';
import { Container, Row, Col, Table } from 'reactstrap';

class CourseDetail extends Component {
    render() {
        const id = this.props.match.params.id
        const course = this.props.course.find(course => course.id === id)
        console.log(course)
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
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CourseDetail;