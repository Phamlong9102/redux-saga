import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { push } from 'redux-first-history';
import { authActions } from '../authSlice';

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.auth.logging);
  
  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };

  return (
    <>
      <div className="mt-[100px]">
        <div className="flex justify-center">
          <span className="text-[40px] text-[red]">Fake Login</span>
        </div>
        {isLogging && (
          <div className="text-center">
            <CircularProgress size={20} color="secondary" />
          </div>
        )}
        <div className="flex justify-center mt-[30px]">
          <button
            onClick={handleLogin}
            className="w-[100px] h-[40px] bg-black text-white"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
