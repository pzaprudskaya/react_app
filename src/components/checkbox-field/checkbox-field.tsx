import * as React from 'react';
import './checkbox-field.scss';
import {Checkbox} from "@material-ui/core";

class CheckboxField extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder,
      type: this.props.type,
      name: this.props.name,
      checked: this.props.checked
    };
  }
  private handleChange(e: any): void {
    debugger;
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
      checked: e.target.checked
    });
  }

  public render() {
    return (
        <div>
          <Checkbox
              checked={this.state.checked}
              name={this.props.name}
              onChange={(e: any) => this.handleChange(e)}
              color="primary"
              inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <span>{this.props.title}</span>
        </div>

    )
  }
}

export default CheckboxField;
