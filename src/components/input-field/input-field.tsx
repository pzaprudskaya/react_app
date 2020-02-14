import * as React from 'react';
import './input-field.scss';

class InputField extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder,
      type: this.props.type,
      name: this.props.name,
      value: this.props.value,
    };
  }
  private handleChange = (e: any): void => {
    const value = e.target.value;
    this.setState({
      value: value,
    });
    this.props.onChange(this.props.name, value);
  };

  public render() {
    return (
        <input type={this.state.type} placeholder={this.state.placeholder} name={this.state.name} className={'input'} value={this.state.value}
               onChange={this.handleChange}/>
    )
  }
}
export default InputField;
