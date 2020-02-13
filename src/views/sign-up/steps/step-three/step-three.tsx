import * as React from 'react';
import './step-three.scss';
import CardHeader from "../../../../components/card-header/card-header";
import CardFooter from "../../../../components/card-footer/card-footer";

export class StepThree extends React.Component<any, any> {

  public render() {
    return (
        <div>
            <div className={'stepThree'}>
                <CardHeader title={'Registration'} subtitle={'Finish!'}/>
                <CardFooter previous={'/signup/step-two'}/>
            </div>
        </div>);
  }
}
