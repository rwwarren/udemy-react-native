import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth" intial>
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Scene>
      <Scene key="name">
        <Scene
          key="employeeList" component={EmployeeList} title="Employees" intial
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
        />
      </Scene>
      <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
    </Router>
  );

};

export default RouterComponent;