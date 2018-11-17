import * as React from "react";
import { reDemo } from "../../../../reducers/init";
import { connect } from "react-redux";
import Head from 'next/head'
import axios from 'axios'
interface IProps {
    resDemo:any;
    reDemo: ()=> void;
}
interface IState {
    seo: any;
}
class LeftComponent extends React.Component<IProps, IState> {
    constructor(props){
        super(props)
        this.state = {
            seo: {}
        }
    }
    componentDidMount(){
        axios.post("http://nguyenminhchi.com/api/blog/detail-alias", {
            key: "cau-chuyen-cai-ken-buom"
        })
        .then(result => {
            console.log(result)
            this.setState({
                seo: result.data.list
            })
        })
    }
    render(){
        return (
            <>
            <Head>
                <title>{this.state.seo.blog_title}</title>
            </Head>
            <div className="col-sm-3 left">
                <div className="left__header">
                    <div className="left__header--title ">Ping!</div>
                    <div className="left__header--new-message">
                        <i className="ion ion-ios-add" onClick={()=> {
                            console.log(this.props.resDemo)
                        }}/>
                    </div>
                </div>
                <div className="left__search-bar">
                    <div>
                        <i className="ion ion-ios-search"/>
                        <input placeholder="Tìm kiếm trên Ping!"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = storeState => ({
    resDemo: storeState.reInit.resDemo
});
const mapDispatchToProps = {
    reDemo
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftComponent);