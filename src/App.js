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
  

  render(){
    let course = []
    if(localStorage && localStorage.getItem('courses')){
      course = JSON.parse(localStorage.getItem('courses'))
    }
    
    return (
      <div className="App">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route 
              path="/" exact 
              render={() => <CourseList course={course} />} 
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
              render={() => <CourseAction />}
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
