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
    courses : []
  }

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   if(localStorage && localStorage.getItem('courses')){

  //     this.setState({
  //       courses : JSON.parse(localStorage.getItem('courses'))
  //     })
     
  //   }
  // }

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
    
    const {courses} =this.state
		console.log("TCL: App -> render -> course", courses)
    return (
      <div className="App">

        <BrowserRouter>
        
          <Header />

          <Switch>
            <Route 
              path="/" exact 
              render={() => <CourseList deleteCourse={this.deleteCourse} />} 
            />
            <Route 
              path="/course-detail/:id" exact 
              render={({match}) => <CourseDetail match={match} />} />

            <Route 
              path="/create-course" exact
              render={({history}) => <CourseAction history={history} />}
            />

            <Route 
              path="/edit-course/:id" exact
              render={({match, history}) => <CourseAction match={match} history={history} courses={courses} />}
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
