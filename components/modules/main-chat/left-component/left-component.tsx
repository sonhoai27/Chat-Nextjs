import * as React from "react";

class LeftComponent extends React.Component {
    render(){
        return (
            <div className="col-sm-3 left">
                <div className="left__header">
                    <div className="left__header--title ">Ping!</div>
                    <div className="left__header--new-message">
                        <i className="ion ion-ios-add"/>
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
export default LeftComponent