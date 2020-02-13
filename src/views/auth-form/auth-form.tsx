import * as React from 'react';
import './auth-form.scss';
import InputField from "../../components/input-field/input-field";
import CardHeader from "../../components/card-header/card-header";

class AuthForm extends React.Component<any, any> {
  constructor(props: any) {
      super(props);
      this.state = {
      placeholderForName: 'Name',
      placeholderForPassword: 'Password',
      typeForName: 'text',
      typeForPassword: 'password'
    };
  }
  public render() {
    return (
        <div className={'block'}>
            <div className={'form'}>
                <CardHeader title={'Login'}/>
                <InputField type={ this.state.typeForName } placeholder={ this.state.placeholderForName }/>
                <InputField type={ this.state.typeForPassword } placeholder={ this.state.placeholderForPassword }/>
            </div>

        </div>
    )
  }
}

export default AuthForm;
