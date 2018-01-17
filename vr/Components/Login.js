import { init} from '../../base';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';
import React from 'react';

class Login extends React.Component {


  constructor() {
    super();
    this.authenticate = this.authenticate.bind(this);
    // this.authHandler = this.authHandler.bind(this);
    this.state = {
      uid: null
    }
  }

 // componentDidMount() {
 //    base.onAuth((user) => {
 //      if(user) {
 //        this.authHandler(null, { user });
 //      }
 //    });
 //  }
  authenticate(provider) {
    console.log('Trying to log in with');
    config.authWithOAuthPopup(provider, this.authHandler);
  }


  // authHandler(err, authData)  {
  //   console.log(authData);
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   // grab the store info
  //   const storeRef = base.database().ref(this.props.storeId);
  //   // query the firebase once for the store data
  //   storeRef.once('value', (snapshot) => {
  //     const data = snapshot.val() || {};
  //     // claim it as our own if there is no owner already
  //     if(!data.owner) {
  //       storeRef.set({
  //         owner: authData.user.uid
  //       });
  //     }

  //     this.setState({
  //       uid: authData.user.uid,
  //       owner: data.owner || authData.user.uid
  //     });
  //   });
  // }


  render() {
    return (

 	<VrButton className="github" onClick={() => this.authenticate('github')}><Text
 		style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
          }}>Log In with Github</Text>

          </VrButton>


    )
  }

 }

export default Login;
