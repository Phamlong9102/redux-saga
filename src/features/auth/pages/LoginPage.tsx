import { useAppDispatch } from "app/hooks";
import { authActions } from "../authSlice";


export default function LoginPage() {

  const dispatch = useAppDispatch()



  const handleLogin = () => {
    // Get username + password from form
    dispatch(authActions.login({
      username: '', 
      password: '', 
    }))
  }

  return (
    <>
      <div className="mt-[100px]">
        <div className="flex justify-center">
          <span className="text-[40px] text-[red]">Fake Login</span>
        </div>
        <div className="flex justify-center mt-[30px]">
          <button onClick={handleLogin} className="w-[100px] h-[40px] bg-black text-white">Login</button>
        </div>
      </div>
    </>
  );
}
