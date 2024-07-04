import { useDispatch, useSelector } from "react-redux"
import style from "./signup.module.css"
import { useCallback } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/utils/firebase";
export default function SignupWithGoogle() {



    const dispatch = useDispatch();
    const user = useSelector(store => store?.user)
    console.log(user)

const signUp = useCallback(async () => {
    console.log("clicked")
    try {
      const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
      dispatch(addUser(userCred.user));
    } catch (error) {
      console.error("Error during sign up with Google:", error);
    }
  }, [dispatch]);


  return (
<>

      
<div className={style.wrapper}>
      {!user?
      <>
      <button onClick={signUp}>
        <i className="ri-google-fill"></i>
        Continue With Google
      </button>
      <p>We value your privacy. By signing in with Google, you agree to our Policies.</p>
      <p className='underline'>Continue Without Sign In</p>
      </>
    : <p>You Are Already Signed In</p>}
      </div>



</>


)
}
