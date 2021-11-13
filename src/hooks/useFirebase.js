import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import firebaseInitializeApp from "../Firebase/firebase.init";




firebaseInitializeApp();


const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const useFirebase = () => {

    const [loading,setLoading] = useState(true)

    const [user, setUser] = useState({});

    const handleEmailSignUp = (email,password,name,history) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
            
                const user = result.user;

              setUser(user);
              
              updateProfile(auth.currentUser, {
                
                  displayName:name,
              })

                setTimeout(() => {
                    LogOut();
                    history.push("/login");
                    
               },2000)
            }).finally(() => setLoading(false)).catch(error => {
                console.log(error)
        })
    }

    const handleEmailSignIn = (email, password,location,history) => {
        
         const redirect_url = location?.state?.from || "/home";

        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;

            setUser(user);
            history.push(redirect_url);
          })
          .finally(() => {
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    const handleGoogleSignIn = (location,history) => {

         const redirect_url = location?.state?.from || "/home";
        
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;

            setUser(user);
            history.push(redirect_url);
          })
          .finally(() => {
            setLoading(false);
          });
    }
    const handleGithubSignIn = (location,history) => {

         const redirect_url = location?.state?.from || "/home";
        
        signInWithPopup(auth, githubProvider)
          .then((result) => {
            const user = result.user;

            setUser(user);
            history.push(redirect_url);
          })
          .finally(() => {
            setLoading(false);
          });
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
         
            if (user) {
                
                setUser(user)

            } else {
                setUser({})
            }
            setLoading(false);
        })

        return () => unsubscribe;
    },[loading])

    const LogOut = () => {
        
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .finally(() => {
            setLoading(false);
          });
    }

    return {
      user,
      handleEmailSignUp,
      handleEmailSignIn,
      LogOut,
      handleGoogleSignIn,
      loading,
      handleGithubSignIn,
    };
};

export default useFirebase;

