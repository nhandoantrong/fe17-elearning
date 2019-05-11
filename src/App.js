import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import component
import Header from './components/Header';
import CourseList from './components/CourseList'
import CourseDetail from './components/CourseDetail';
import CourseAction from './components/CourseAction';
import PageNotFound from './components/PageNotFound';

import FakeData from './components/FakeData';

class App extends Component {
  state ={
    course : []
  }

  componentDidMount() {
    if(localStorage && localStorage.getItem('courses')){

      this.setState({
        course : JSON.parse(localStorage.getItem('courses'))
      })
     
    }
  }

  deleteCourse = (courseDelete) =>{
    const coursArr = [...this.state.course];
    const index= coursArr.findIndex(item => item.id=== courseDelete.id);
    coursArr.splice(index,1);
    localStorage.setItem('courses', JSON.stringify(coursArr));
    this.setState({
      course:[...coursArr],
    })
  }
  
  render(){
    
    const {course} =this.state
    return (
      <div className="App">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route 
              path="/" exact 
              render={() => <CourseList course={course} deleteCourse={this.deleteCourse} />} 
            />
            <Route 
              path="/course-detail/:id" exact 
              render={({match}) => <CourseDetail match={match} course={course} />} />

            <Route 
              path="/create-course" exact
              render={() => <CourseAction />}
            />

            <Route 
              path="/edit-course/:id" exact
              render={({match}) => <CourseAction match={match} course={course} />}
            />
            
            <Route 
              path="/fake-link" exact 
              component={FakeData} 
            />
            <Route 
              path="/" 
              component={PageNotFound} 
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
