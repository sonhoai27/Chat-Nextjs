import * as React from "react";
import Head from 'next/head'
import { BASEURL } from './../config/const';
import LeftComponent from "./modules/main-chat/left-component/left-component";
import RightComponent from "./modules/main-chat/right-component/right-component";
class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    render(){
        return (
            <>
                <Head>
                    <title>Real Time Chat</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href={BASEURL+'static/css/cdn.css'}/>
                    <link rel="stylesheet" href={BASEURL+'static/css/styles.css'}/>
                    <link href="https://unpkg.com/ionicons@4.4.6/dist/css/ionicons.min.css" rel="stylesheet"/>
                </Head>
                <div className="col-12">
                    <div className="row">
                        <LeftComponent/>
                        <RightComponent/>
                    </div>
                </div>
            </>
        )
    }
}

export default App;