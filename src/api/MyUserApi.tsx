import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { User } from "../types";

type CreaseUserRequest = 
{
    auth0Id : String,
    email : String,
};


export const useGetMyUser = ()=>{

  const { getAccessTokenSilently} = useAuth0();

  const geyMyuser=async (): Promise<User> =>{
    const accessToken  = await getAccessTokenSilently();
    const response = await fetch(`https://fooodie-backend.onrender.com/api/my/user`,{
      method: "GET",
      headers: {
        Authorization:`Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
    });

    if(!response){
      throw new Error("Failed to Get User");
    }
    return response.json();
  }

  const {data : currentUser , isLoading  ,error} = useQuery("fetchCurrentUser",geyMyuser);
  if(error){
    toast.error(error.toString());
  }
  return ({
    currentUser,
    isLoading
  })
}

export const useCreateMyUser = () => {
    const { getAccessTokenSilently} = useAuth0();

    const createMyUserRequest = async (user:CreaseUserRequest) => {
        const accessToken  = await getAccessTokenSilently();
        const response = await fetch(`https://fooodie-backend.onrender.com/api/my/user`, {
            method: "POST",
            headers: {
                Authorization:`Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
        console.log(response);
        if(!response.ok){
            throw new Error("Failed to Create User");
        }
    }

    const {mutateAsync : createUser , isLoading , isError , isSuccess} = useMutation(createMyUserRequest);

    return ({
        createUser,
        isLoading , 
        isError , 
        isSuccess,
    })
}
type UpdateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };
  
export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  
  const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
    const accessToken = await getAccessTokenSilently();
  
    const response = await fetch(`https://fooodie-backend.onrender.com/api/my/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response.json);
      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      return response.json();
    };
  
    const {
      mutateAsync: updateUser,
      isLoading,
      isSuccess,
      error,
      reset
    } = useMutation(updateMyUserRequest);

    if(isSuccess){
      toast.success("User Profile Updated")
    }

    if(error){
      toast.error(error.toString());
      reset();
    }
  
    return { updateUser, isLoading };
  };
