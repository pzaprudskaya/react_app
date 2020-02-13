import * as React from 'react';
import './signup.scss';
import { Route, Switch } from 'react-router-dom';
import {StepOne} from "./steps/step-one/step-one";
import {StepTwo} from "./steps/step-two/step-two";
import {StepThree} from "./steps/step-three/step-three";

export class Signup extends React.Component<any, any> {
  public render() {
    return (
        <div className={'block'}>
            <Switch>
              <Route exact path='/signup/' component={StepOne} />
              <Route path='/signup/step-two' component={StepTwo}/>
              <Route path='/signup/step-three' component={StepThree}/>
            </Switch>
        </div>
);
  }
}
