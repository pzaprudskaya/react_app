import * as React from 'react';
import './App.scss';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import AuthForm from "./views/auth-form/auth-form";
import {Signup} from "./views/sign-up/signup";
import {Home} from "./views/home/home";
import {connect} from "react-redux";
import {updateUser} from "./reducers/actions/user-actions";
import List from "./views/List/list";

export class App extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);
        this.state = {
            render: false,
            redirectTo: '',
            routes: []
        };
    }
    private redirectTo(e: any, redirectTo: string) {
        e.preventDefault();
        this.setState({redirectTo});
    }
    public componentDidMount() {
        this.refresh();
    }

    public async refresh() {

        // Setup routes
        const routes: any[] = [];
        routes.push(<Route key={`a${Math.random()}`} exact path='/' component={Home} />);
        routes.push(<Route key={`a${Math.random()}`} exact path='/login' component={AuthForm} />);
        routes.push(<Route key={`a${Math.random()}`} path='/signup' component={Signup} />);
        routes.push(<Route key={`a${Math.random()}`} path='/list' component={List} />);

        this.setState({
            render: true,
            routes,
        });
    }
    public render() {
        return (
                <div>

                    <div className={'headerTitle'}>
                        <button className={'btn'} onClick={e => this.redirectTo(e, '/login')} type='button' >Log in</button>
                        <button className={'btn'} onClick={e => this.redirectTo(e, '/signup')} type='button' >Sign Up</button>
                        <button className={'btn'} onClick={e => this.redirectTo(e, '/list')} type='button' >List</button>
                    </div>
                    <div className={'app'}>

                        {!this.state.render ? null :
                            <Router>
                                {this.state.redirectTo === '' ? null : <Redirect to={this.state.redirectTo} /> }
                                <Switch>
                                    {this.state.routes.map((it: any) => it)}
                                </Switch>
                            </Router>
                        }
                    </div>
                </div>

            );
    }
}
const mapStateToProps = (state: any) => ({
    user: state.user,
});
const matchActionToProps = {
    onUpdateUser: updateUser,
};
export default connect(mapStateToProps, matchActionToProps)(App);
