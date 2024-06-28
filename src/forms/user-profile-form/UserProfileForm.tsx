
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import LoadingButton from "../../components/LoadingButton";
import { Button } from "../../components/ui/button";
import { User } from "../../types";
import { useEffect } from "react";

const formSchema = z.object({
    email:z.string().optional(),
    name:z.string().min(1 , "Name is Required"),
    addressLine1:z.string().min(1 , "AddressLine1 is Required"),
    city:z.string().min(1 , "City is Required"),
    country:z.string().min(1 , "Country is Required"),

});

type UserFormData  =z.infer<typeof formSchema>;

type Props = {
    currentUser:User,
    onSave:(userProfileData :UserFormData) => void,
    isLoading:boolean,
}

function UserProfileForm({currentUser , onSave , isLoading}: Props) {

    const form = useForm<UserFormData>({
        resolver : zodResolver(formSchema),
        defaultValues:currentUser,
    })


    useEffect(()=>{
        form.reset(currentUser);
    },[currentUser , form]);

    
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSave)} className="space-y-4 w-full px-5 bg-gray-50 rounded-md md:p-10 ">

            <div className="">
                <h2 className="text-2xl font-bold"> User Profile Form</h2>
                <FormDescription>
                    View and update/change your information here
                </FormDescription>
            </div>

            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem > 
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input {...field} value={field.value || " "} disabled className="bg-white" />
                    </FormControl>
                </FormItem>
            )} />

            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input {...field} value={field.value || " "}  className="bg-white" />
                    </FormControl>
                    </FormItem>
                )} />   
            
            <div className="flex flex-col gap-5 md:justify-between md:flex-row">
                    <FormField
                        control={form.control}
                        name="addressLine1"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Address Line 1</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || " "}  className=" bg-white" />
                                    </FormControl>
                                <FormMessage/>
                            </FormItem>

                            
                        )} />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value || " "}  className="bg-white" />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} />

                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value || " "}  className="bg-white" />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} />
            </div>

            {isLoading? <LoadingButton/> : <Button className="bg-orange-500 " type="submit">Submit</Button>}

            
        </form>
    </Form>
  )
}

export default UserProfileForm