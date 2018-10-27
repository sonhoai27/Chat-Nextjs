import * as React from "react";
import { reDemo } from "../../../../reducers/init";
import { connect } from "react-redux";
interface IProps {
    resDemo:any;
    reDemo: ()=> void;
}
class LeftComponent extends React.Component<IProps, {}> {
    constructor(props){
        super(props)
    }
    componentDidMount(){
    }
    render(){
        return (
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