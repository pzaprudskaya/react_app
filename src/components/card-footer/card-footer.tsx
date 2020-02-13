import * as React from 'react';
import './card-footer.scss';
import { withRouter } from 'react-router';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class CardFooter extends React.Component<any, any> {
    private nextStep(e: any, route: string): void {
        e.preventDefault();
        this.props.history.push(route);
    }
    private previousStep(e: any, route: string ): void {
        e.preventDefault();
        this.props.history.push(route);
    }


  public render() {
    return (
        <div className={'cardFooter'}>
            {this.props.previous ? (
                <div className={'previous'} onClick={(e) => this.previousStep(e, this.props.previous)}>
                    <NavigateBeforeIcon/>
                    <span>Back</span>
                </div>
            ) : null}
            {this.props.next ? (
                <div className={'next'} onClick={(e) => this.nextStep(e, this.props.next)}>
                    <span>Next</span>
                    <NavigateNextIcon/>
                </div>
            ): null}
        </div>

    );
  }
}

export default withRouter(CardFooter);
