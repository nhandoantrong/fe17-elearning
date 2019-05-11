import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Col,
    Modal, ModalHeader, ModalBody, ModalFooter
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
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        const { course } = this.props;
        const { src, title, desc, price, id } = course
        console.log('render')
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
                    </CardBody>
                </Card>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Col>
        );
    }
}

export default Course;