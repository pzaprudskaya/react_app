import * as React from 'react';
import './step-two.scss';
import CardHeader from "../../../../components/card-header/card-header";
import CardFooter from "../../../../components/card-footer/card-footer";
import InputField from "../../../../components/input-field/input-field";
import CheckboxField from "../../../../components/checkbox-field/checkbox-field";
import SelectField from "../../../../components/select-field/select-field";
const options = [
    {
        title: 'Rowing',
        value: 1
    },
    {
        title: 'American football',
        value: 2
    },
    {
        title: 'Badminton',
        value: 3
    },
    {
        title: 'Basketball',
        value: 4
    },
    {
        title: 'Baseball',
        value: 5
    },
    {
        title: 'Boxing',
        value: 6
    }
];
export class StepTwo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            checkTrainer: false,
            checkSportsman: false,
            options: options
        };
    }

  public render() {
      return (
          <div className={'sportInfo'}>
              <CardHeader title={'Registration'} subtitle={'Sport'}/>
              <InputField type={'text'} placeholder={'Country'} name={'country'}/>
              <SelectField options={this.state.options} title={'Kind of sport'}/>
              <div className={'radioGroup'}>
                  <CheckboxField checked={this.state.checkTrainer} name={'trainer'} title={'Trainer'}/>
                  <CheckboxField checked={this.state.checkSportsman} name={'sportsman'} title={'Sportsman'}/>
              </div>
              <CardFooter previous={'/signup'} next={'/signup/step-three'}/>
          </div>
      );
  }
}
