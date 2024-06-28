import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {;
  const navigate = useNavigate();

  const audience = "Foodie-Food-Ordering-API";
  const onRedirectCallback = () => {
    navigate('/auth-callback');
  };

  

  return (
    <Auth0Provider
      domain="dev-64w3dj2wdr0nhgvx.us.auth0.com"
      clientId="kV7uHD33xPK71v6JNGN5SWQqGrtyKJtl"
      authorizationParams={{
        audience,
        redirect_uri: "http://localhost:5173/"
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
