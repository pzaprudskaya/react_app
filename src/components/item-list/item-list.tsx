import * as React from 'react';
import './item-list.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class ItemList extends React.Component<any, any> {

  public render() {
    return (
        <div className={'blockItem'}>
            <div className={'cardHeader'}>
                <h1>{this.props.name} {this.props.surname}</h1>
            </div>
            <div className={'block-information'}>
                <p className={'location'}><LocationOnIcon className={'locationOnIcon'}/>{this.props.country}</p>
                <p>{this.props.email}</p>
                <p>Role: {this.props.role}</p>
                <p>Sport: {this.props.sport}</p>
            </div>



        </div>

    );
  }
}

export default ItemList;
