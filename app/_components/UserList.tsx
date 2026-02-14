"use client"
import { Provider } from "react-redux";
import UserButton from "./UserButton";
import store from "../_lib/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type UserType = {
    name: string;
    id: string;
}

type UserListProps = {
    contacts: UserType[]
}

function UserList({ contacts }: UserListProps) {
    const queryClient = new QueryClient()
    

    return (
        <div className="flex w-screen gap-1 pl-5">
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>

                {contacts.map((user) => (
                    <UserButton user={user} key={user.id} />
                ))}
                </QueryClientProvider>
            </Provider>
        </div>
    );
}

export default UserList;
