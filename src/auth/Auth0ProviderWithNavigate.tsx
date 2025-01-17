import { Auth0Provider } from "@auth0/auth0-react";
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
        redirect_uri: "https://fooodie-frontend.onrender.com"
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
