import * as React from 'react';
import './step-one.scss';
import CardHeader from "../../../../components/card-header/card-header";
import CardFooter from "../../../../components/card-footer/card-footer";
import InputField from "../../../../components/input-field/input-field";
import { updateUser } from "../../../../reducers/actions/user-actions";
import { connect } from 'react-redux';

class StepOne extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: this.props.user,
        };
    }

    handleChange = (field: string, value: string) => {
        console.log(this.props);
        const { user } = this.props;
        const localUser = { ...user };
        localUser[field] = value;
        this.props.onUpdateUser(localUser);
    }

  public render() {
      return (
            <div className={'userInfo'}>
                <CardHeader title={'Registration'} subtitle={'User information'}/>
                    <InputField type={'text'} onChange={this.handleChange} placeholder={'Name'} name={'name'} value={this.props.user.name}/>
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

const mapDispatchToProps = (dispatch: any) => ({
    onUpdateUser: (state: any) => dispatch(updateUser(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
