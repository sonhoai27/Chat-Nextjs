import * as React from "react";
import Head from '../shared/components/Head'
import LeftComponent from "./modules/main-chat/left-component/left-component";
import RightComponent from "./modules/main-chat/right-component/right-component";
import { connect } from "react-redux";
import { reDemo } from './../reducers/init';
import Router from 'next/router'
import FireBase from "../config/firebase";

interface IProps {
    resDemo:any;
    reDemo: ()=> void;
}
interface IState {
    isLogin: boolean;
}
class App extends React.Component<IProps, IState>{
    constructor(props){
        super(props)
        this.state = {
            isLogin: false
        }
    }
    componentDidMount(){
        this.props.reDemo()
        FireBase.auth().onAuthStateChanged((user)=> {
            if (user) {
             this.setState({
                 isLogin: !this.state.isLogin
             })
            } else {
                Router.push({
                    pathname: '/login'
                })
            }
          });
    }
    render(){
        if(this.state.isLogin){
            return (
                <>
                    <Head/>
                    <div className="col-12">
                        <div className="row">
                            <LeftComponent/>
                            <RightComponent/>
                        </div>
                    </div>
                </>
            )
        }else {
            return <></>
        }
    }
}

const mapStateToProps = storeState => ({
    resDemo: storeState.reInit.resDemo
});
const mapDispatchToProps = {
    reDemo
}
export default connect(mapStateToProps, mapDispatchToProps)(App);