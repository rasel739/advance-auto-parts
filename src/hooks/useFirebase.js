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

   const [admin, setAdmin] = useState('')
  
    const [loading,setLoading] = useState(true)

    const [user, setUser] = useState({});

    const handleEmailSignUp = (email,password,name,history) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
            
              const user = result.user;

              updateProfile(auth.currentUser, {
                displayName: name,
              });

              setUser(user);
              
              

             
              
              setTimeout(() => {
                   handleUserData(user?.displayName, user?.email, "POST");
                    LogOut();
                    history.push("/login");
                    
               },2000)
            }).finally(() => setLoading(false)).catch(error => {
                console.log(error)
        })
    }

    const handleEmailSignIn = (email, password,location,history) => {
        
      const redirect_url = location?.state?.from || '/home';
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            handleUserData(user?.displayName, user?.email,"PUT");
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
            handleUserData(user?.displayName, user?.email,"PUT");
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
            handleUserData(user?.displayName, user?.email,"PUT");
            setUser(user);
           
               history.push(redirect_url);
           
          })
          .finally(() => {
            setLoading(false);
          });
  }
  
  const handleUserData = (name,email,method) => {

    const userData = { name: name, email: email }

    fetch("https://advance-auto-part.herokuapp.com/userLoginData", {
      
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData)
    });
    
  }

  useEffect(() => {
    fetch(`https://advance-auto-part.herokuapp.com/userAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data[0]?.role);
      })
      

  },[user?.email])

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
      admin
    };
};

export default useFirebase;

