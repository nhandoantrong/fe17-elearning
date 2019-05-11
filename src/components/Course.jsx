import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,
    Col,
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }

    }
    
    toggle = () => { // es7: method arrow function
        this.props.openModal();
    }

    delete = ()=>{
        this.props.deleteCourse(this.props.course);
    }

    render() {
        const { course } = this.props;
        const { src, title, desc, price, id } = course
        return (
            <Col md={4}>
                <Card>
                    <CardImg top width="100%" src={src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardText>{desc}</CardText>
                        <CardText>Price: {price}</CardText>
                        <Button color="danger" onClick={this.toggle}>Chi tiết</Button>


                        <Link to={`/course-detail/${id}`} >Chi tiết</Link>

                        <Link to={`/edit-course/${id}`}>Sửa</Link>
                        <Button color="warning" onClick={this.delete}>xóa</Button>

                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Course;