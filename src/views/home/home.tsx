import * as React from 'react';
import './home.scss';

export class Home extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);
        this.state = {
            redirectTo: '',
        };
    }
    public render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}
