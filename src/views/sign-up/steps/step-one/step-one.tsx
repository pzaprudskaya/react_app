import * as React from 'react';
import './step-one.scss';
import CardHeader from "../../../../components/card-header/card-header";
import CardFooter from "../../../../components/card-footer/card-footer";
import InputField from "../../../../components/input-field/input-field";
import { connect } from 'react-redux';

export class StepOne extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: this.props.user,
        };
    }
  public render() {
    return (
            <div className={'userInfo'}>
                <CardHeader title={'Registration'} subtitle={'User information'}/>
                    <InputField type={'text'} placeholder={'Name'} name={'name'}/>
                    <InputField type={'text'} placeholder={'Surname'} name={'surname'}/>
                    <InputField type={'email'} placeholder={'E-mail'} name={'email'}/>
                    <InputField type={'password'} placeholder={'Password'} name={'password'}/>

                <CardFooter next={'/signup/step-two'}/>
            </div>
);
  }
}
const mapStateToProps = (state: any) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(StepOne);
