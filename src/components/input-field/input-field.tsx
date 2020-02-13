import * as React from 'react';
import './input-field.scss';
import {connect} from "react-redux";

class InputField extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: this.props.user,
      placeholder: this.props.placeholder,
      type: this.props.type,
      name: this.props.name
    };
  }
  private handleChange(e: any): void {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });

  }

  public render() {
    return (
        <input type={this.state.type} placeholder={this.state.placeholder} name={this.state.name} className={'input'}
               onChange={(e: any) => this.handleChange(e)}/>
    )
  }
}
const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(InputField);
