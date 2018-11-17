import React from "react";
import Page from "../reducers/page";
import Head from "../shared/components/Head";
import FireBase from "../config/firebase";
import Router from 'next/router'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }
  login = ()=> {
      FireBase.auth().signInWithEmailAndPassword('sonhoai272@gmail.com', 'admin@0123')
          .then(()=> {
            Router.push({
                pathname: '/'
            })
          })
          .catch((error: any) => {
              console.log(error)
          });
  }
  render() {
    return (
      <>
        <Head />
        <div className="col-12 login">
          <div className="container" style={{
              display: 'flex',
              alignItems: 'center',
              height: '100vh'
          }}>
            <div className="row" style={{alignItems: 'center'}}>
              <div className="col-sm-5">
                <h1>Luôn luôn bên nhau.</h1>
                <p>
                  Cách đơn giản để nhắn tin, chat video, lên kế hoạch - ở cùng
                  một nơi.
                </p>
                <span className="login_btn" onClick={this.login}>Đăng nhập</span>
              </div>
              <div className="col-sm-7">
                <img
                  src="https://www.pubnub.com/wp-content/uploads/2017/11/chat-app-messaging-app.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Page(LoginPage);
