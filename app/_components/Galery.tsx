"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImagesList from "./ImagesList";
import UserList from "./UserList";
import { Provider } from "react-redux";
import store from "../_lib/redux/store";

type UserType = {
    name: string;
    id: string;
}

type GaleryProps = {
    contacts: UserType[]
}

function Galery({ contacts }: GaleryProps) {
    // const slike = await getUserImagesById(1);
    const queryClient = new QueryClient();
    // const searchParams = useSearchParams();
    // const userFolder = searchParams?.get("id") || "1";
    // queryClient.invalidateQueries({ queryKey: ['user-images'] })

    // console.log(slike);
    return (
        <div className="flex flex-col gap-6">
            <UserList contacts={contacts} />
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <ImagesList />
                </Provider>
            </QueryClientProvider>
        </div>
    );
}

export default Galery;
