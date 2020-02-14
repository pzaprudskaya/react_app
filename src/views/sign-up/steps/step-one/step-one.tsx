import * as React from 'react';
import './step-one.scss';
import CardHeader from "../../../../components/card-header/card-header";
import CardFooter from "../../../../components/card-footer/card-footer";
import InputField from "../../../../components/input-field/input-field";
import { updateUser } from "../../../../reducers/actions/user-actions";
import { connect } from 'react-redux';
import { debounce } from 'lodash';

class StepOne extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: this.props.user,
        };
    }

    handleChange = debounce((field: string, value: string) => {
        const { user } = this.props;
        const localUser = { ...user };
        localUser[field] = value;
        this.props.onUpdateUser(localUser);
    }, 1000);

  public render() {
      console.log(this.props);
      return (
            <div className={'userInfo'}>
                <CardHeader title={'Registration'} subtitle={'User information'}/>
                    <InputField type={'text'} onChange={this.handleChange} placeholder={'Name'} name={'name'} value={this.props.user.name}/>
                    <InputField type={'text'} onChange={this.handleChange} placeholder={'Surname'} name={'surname'} value={this.props.user.surname}/>
                    <InputField type={'email'} onChange={this.handleChange} placeholder={'E-mail'} name={'email'} value={this.props.user.email}/>
                    <InputField type={'password'} onChange={this.handleChange} placeholder={'Password'} name={'password'} />
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
