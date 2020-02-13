import * as React from 'react';
import './card-header.scss';
import { withRouter } from 'react-router';
import ClearIcon from '@material-ui/icons/Clear';

class CardHeader extends React.Component<any, any> {

  private close(e: any) {
    e.preventDefault();
    this.props.history.push('/');
  }

  public render() {
    return (
        <div className={'header'}>
            <div className={'cardHeader'}>
                <h1>{this.props.title}</h1>
                <ClearIcon className={'icon'} onClick={(e) => this.close(e)}/>
            </div>
            { this.props.subtitle ? (<p>{this.props.subtitle}</p>) : null}
        </div>
    );
  }
}

export default withRouter(CardHeader);
