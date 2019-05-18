import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';
import {createCourse} from '../actions/courses';

class CourseAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {
                title: "",
                desc: "",
                price: "",
                rates: "",
                src: "",
                id: "",
            },

            isEdit: false,
            index: -1,
        }
    }

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            // computed ed6
            course: { ...this.state.course, [e.target.name]: e.target.value },
        })
    }

    notify = () => toast("Wow so easy !");

    handleOnSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !!!'
        }).then((result) => {
            if (result.value) {
                if (this.state.isEdit){
                    this.editCourse();
                    this.notify()
                    
                    this.props.history.push('/')
                    }
                else {
                    // Swal.fire('Hello world!')
                    // this.addCourse();
                    this.props.createCourse(this.state.course)
                    
                    this.props.history.push('/')
                }
            }
        })

        // window.location.reload();
    }

    addCourse = () => {
        const newCourse = { ...this.state.course, id: new Date().getTime().toString() }

        const courseList = JSON.parse(localStorage.getItem('courses'));
        courseList.push(newCourse);
        localStorage.setItem('courses', JSON.stringify(courseList));

    }

    editCourse = () => {
        const courseArr = this.props.courses;
        const index = this.state.index;
        courseArr[index] = this.state.course;
        localStorage.setItem('courses', JSON.stringify(courseArr));
    }

    componentDidMount() {
        if (this.props.match) {
            const id = this.props.match.params.id;
            const index = this.props.courses.findIndex(course => course.id == id);
            const course = this.props.courses[index];

            this.setState({ isEdit: true, course: { ...course }, index })
        }
        else {
            this.setState({
                isEdit: false
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.isEdit ? "SỬA" : "THÊM"} KHÓA HỌC</h1>

                <Container className="text-left">
                    <Form onSubmit={this.handleOnSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Enter title"
                                onChange={this.onChange}
                                value={this.state.course.title}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Enter price"
                                onChange={this.onChange}
                                value={this.state.course.price}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="price">Thumbnail</Label>
                            <Input
                                type="text"
                                name="src"
                                id="src"
                                placeholder="Enter thumbnail"
                                onChange={this.onChange}
                                value={this.state.course.src}
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
                                value={this.state.course.desc}
                            />
                        </FormGroup>

                        <Button>Submit</Button>
                    </Form>
                </Container>

                <ToastContainer />
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
        createCourse: (course) => {
            dispatch(createCourse(course))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseAction);