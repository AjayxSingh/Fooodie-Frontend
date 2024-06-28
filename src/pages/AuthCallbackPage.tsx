import { useAuth0 } from '@auth0/auth0-react'
import {useEffect , useRef} from 'react'
import { useCreateMyUser } from '../api/MyUserApi';
import { useNavigate } from 'react-router-dom';

type Props = {}

function AuthCallbackPage({}: Props) {
    const navigate = useNavigate();
    const { user } = useAuth0();
    const { createUser} = useCreateMyUser();
    const hasCreatedUser = useRef(false);

    useEffect(() => {
        if(user?.sub && user?.email && !hasCreatedUser.current){
            console.log(user);
            createUser({ auth0Id:user.sub, email:user.email });
            hasCreatedUser.current = !true;
          }
          navigate('/');
    }, [createUser , navigate , user])
    
  return (
    <>Loading....</>
  )
}

export default AuthCallbackPage