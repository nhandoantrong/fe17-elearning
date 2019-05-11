import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CourseAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: ""
        }        
    }
    
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            // computed ed6
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                <h1>THÊM/SỬA KHÓA HỌC</h1>

                <Container className="text-left">
                    <Form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Enter title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="desc">Desc</Label>
                            <Input
                                type="textarea"
                                name="desc"
                                id="desc"
                                placeholder="Enter desc"
                                onChange={this.onChange}
                                value={this.state.desc}
                            />
                        </FormGroup>
                    </Form>
                </Container>
            </div>
                );
            }
        }
        
export default CourseAction;