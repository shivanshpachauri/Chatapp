// // import React,{Alert} from 'react'
// import { Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
// import { auth, database } from '../misc/firebase';
// import firebase from 'firebase/app';
// import Alert from 'react-bootstrap/Alert';
// // import {Alert} from 'react-native';

// //   const signInWithProvider = async provider => {
// //     try {
// //       const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
// //       if (additionalUserInfo.isNewUser) {
// //         await database.ref(`/profiles/${user.uid}`).set({
// //           name: user.displayName,
// //           createdAt: firebase.database.ServerValue.TIMESTAMP,
// //         });
// //       }
// //       window.alert('Signed in successfully');
// //     } catch (err) {
// //       console.error('Sign-in error:', err);

// //       window.alert(`Error: ${err.message}`);
// //     }
// //   };
// const SignIn = () => {
//   const signInWithProvider = async provider => {
//     try {
//       const result = await auth.signInWithPopup(provider);
//       const user = result.user;
//       const additionalUserInfo = result.additionalUserInfo;

//       if (additionalUserInfo.isNewUser) {
//         await database.ref(`/profiles/${user.uid}`).set({
//           name: user.displayName,
//           createdAt: firebase.database.ServerValue.TIMESTAMP,
//         });
//       }
//       alert('Signed in successfully');
//     } catch (err) {
//       console.error('Sign-in error:', err); // Log the error for debugging
//       alert(`Error: ${err.message}`);
//     }
//   };

//   const onFacebookSignIn = () => {
//     signInWithProvider(new firebase.auth.FacebookAuthProvider());
//   };
//   const onGoogleSignIn = () => {
//     signInWithProvider(new firebase.auth.GoogleAuthProvider());
//   };
//   return (
//     <Container>
//       <Grid className="mt-page">
//         <Row>
//           <Col xs={24} md={12} mdOffset={6}>
//             <Panel>
//               <div className="text-center">
//                 <h2>Welcome to chat</h2>
//                 <p>Progressive chat platform for neophytes</p>
//               </div>
//               <div className="mt-3">
//                 <Button block color="blue" onClick={onFacebookSignIn}>
//                   <Icon icon="facebook" /> Continue with Facebook
//                 </Button>

//                 <Button block color="green" onClick={onGoogleSignIn}>
//                   <Icon icon="google" /> Continue with Google
//                 </Button>
//               </div>
//             </Panel>
//           </Col>
//         </Row>
//       </Grid>
//     </Container>
//   );
// };

// export default SignIn;
// // import React, { useState } from 'react';
// // import { Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
// // import { auth, database } from '../misc/firebase';
// // import firebase from 'firebase/app';
// // import { AlertProvider, Alert } from 'react-alert';
// // import { AlertTemplate, options } from './AlertTemplate'; // Assuming you have a custom AlertTemplate component

// // const SignIn = () => {
// //   const [alertMessage, setAlertMessage] = useState('');

// //   const signInWithProvider = async provider => {
// //     try {
// //       const result = await auth.signInWithPopup(provider);
// //       const user = result.user;
// //       const additionalUserInfo = result.additionalUserInfo;

// //       if (additionalUserInfo.isNewUser) {
// //         await database.ref(`/profiles/${user.uid}`).set({
// //           name: user.displayName,
// //           createdAt: firebase.database.ServerValue.TIMESTAMP,
// //         });
// //       }

// //       // Use the Alert component to display the success message
// //       alert.success('Signed in successfully');
// //     } catch (err) {
// //       console.error('Sign-in error:', err); // Log the error for debugging
// //       alert.error(`Error: ${err.message}`);
// //     }
// //   };

// //   const onFacebookSignIn = () => {
// //     signInWithProvider(new firebase.auth.FacebookAuthProvider());
// //   };

// //   const onGoogleSignIn = () => {
// //     signInWithProvider(new firebase.auth.GoogleAuthProvider());
// //   };

// //   return (
// //     <AlertProvider template={AlertTemplate} {...options}>
// //       <Container>
// //         <Grid className="mt-page">
// //           <Row>
// //             <Col xs={24} md={12} mdOffset={6}>
// //               <Panel>
// //                 <div className="text-center">
// //                   <h2>Welcome to chat</h2>
// //                   <p>Progressive chat platform for neophytes</p>
// //                 </div>
// //                 <div className="mt-3">
// //                   <Button block color="blue" onClick={onFacebookSignIn}>
// //                     <Icon icon="facebook" /> Continue with Facebook
// //                   </Button>

// //                   <Button block color="green" onClick={onGoogleSignIn}>
// //                     <Icon icon="google" /> Continue with Google
// //                   </Button>
// //                 </div>
// //               </Panel>
// //             </Col>
// //           </Row>
// //         </Grid>
// //       </Container>
// //     </AlertProvider>
// //   );
// // };

// // export default SignIn;
import { useState } from 'react';
import { Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import { auth, database } from '../misc/firebase';
import firebase from 'firebase/app';
import Alert from 'react-bootstrap/Alert'; // Import Alert from react-bootstrap

const SignIn = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const signInWithProvider = async provider => {
    try {
      const result = await auth.signInWithPopup(provider);
      const user = result.user;
      const additionalUserInfo = result.additionalUserInfo;

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      // Use the Alert component to display the success message
      setAlertMessage('Signed in successfully');
    } catch (err) {
      console.error('Sign-in error:', err); // Log the error for debugging
      setAlertMessage(`Error: ${err.message}`);
    }
  };

  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSignIn}>
                  <Icon icon="facebook" /> Continue with Facebook
                </Button>

                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
            {alertMessage && (
              <Alert
                variant={alertMessage.includes('Error') ? 'danger' : 'success'}
              >
                {alertMessage}
              </Alert>
            )}
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
