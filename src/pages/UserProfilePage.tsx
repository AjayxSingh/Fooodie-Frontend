
import { useGetMyUser, useUpdateMyUser } from '../api/MyUserApi'
import UserProfileForm from '../forms/user-profile-form/UserProfileForm'

function UserProfilePage() {
    const {updateUser , isLoading : isUpdateLoading} =useUpdateMyUser();
    const {currentUser , isLoading:isGetLoading} = useGetMyUser();


    if(isGetLoading){
      return <span>Loading.....</span>
    }
    if(currentUser){
      return  <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />
    }
    else{
      return <span>Unable To load User</span>
    }
}

export default UserProfilePage