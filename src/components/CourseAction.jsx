import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CourseAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course : {
                title: "",
                desc: "",
                price: "Liên hệ",
                rates: 3,
                src: "https://topdev.vn/blog/wp-content/uploads/2017/07/vuejs.png",
                id: "",
            },

            isEdit : false,
            index: -1,
        }        
    }
    
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            // computed ed6
            course: {...this.state.course,[e.target.name] : e.target.value},
        })
    }

    handleOnSubmit = (e) =>{
        e.preventDefault();
        if (this.state.isEdit)
            this.editCourse();
        else 
            this.addCourse();
    }

    addCourse = () =>{
        const newCourse = {...this.state.course,id : new Date().getTime().toString()}
        
        const courseList = JSON.parse(localStorage.getItem('courses'));
        courseList.push(newCourse);
        localStorage.setItem('courses', JSON.stringify(courseList));
    }

    editCourse = () =>{
        const courseArr = this.props.course;
        const index = this.state.index;
        courseArr[index]= this.state.course;
        localStorage.setItem('courses', JSON.stringify(courseArr));
    }

    componentDidMount(){
        if (this.props.match){
            const id = this.props.match.params.id;
            const index = this.props.course.findIndex(course => course.id == id);
            const course = this.props.course[index];

            this.setState({isEdit: true, course:{...course} , index})
        }
        else{
            this.setState({
                isEdit: false
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.isEdit? "SỬA" : "THÊM"} KHÓA HỌC</h1>

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
            </div>
                );
            }
        }
        
export default CourseAction;