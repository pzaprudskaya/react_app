import * as React from 'react';
import './select-field.scss';
import {InputLabel, MenuItem, Select} from "@material-ui/core";

class SelectField extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder,
      type: this.props.type,
      name: this.props.name,
      value: this.props.options[0].value
    };
  }
  private handleChange(e: any): void {
    debugger;

    this.setState({
      value: e.target.value
    });
  }

  public render() {
    return (
        <div className={'select'}>
          <InputLabel id="demo-simple-select-label">{this.props.title}</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.value}
              onChange={(e: any) => this.handleChange(e)}
          >
            {
              this.props.options.map((option: any) => {
                return (
                  <MenuItem value={option.value}>{option.title}</MenuItem>
                )
              })
            }
          </Select>
        </div>

    )
  }
}

export default SelectField;
