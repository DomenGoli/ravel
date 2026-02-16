"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImagesList from "./ImagesList";
import UserList from "./ContactList";
import { Provider } from "react-redux";
import store from "../_lib/redux/store";
import LastFive from "./LastFive";
// import LastFive from "./LastFive";


type lastUplodedImageType = {
    name:string;
    userId:string;
}

type UserType = {
    name: string;
    id: string;
};

type GaleryProps = {
    contacts: UserType[];
    lastFiveImages?: lastUplodedImageType[] | undefined
};

function Galery({ contacts }: GaleryProps) {
    // const slike = await getUserImagesById(1);
    const queryClient = new QueryClient();
    // const searchParams = useSearchParams();
    // const userFolder = searchParams?.get("id") || "1";
    // queryClient.invalidateQueries({ queryKey: ['user-images'] })

    // console.log(slike);
    return (
        <div className="grid h-full grid-rows-[auto_1fr]">
            <UserList contacts={contacts} />
            <div className="overflow-scroll no-scrollbar">
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <ImagesList />
                        <LastFive />
                    </Provider>
                </QueryClientProvider>
            </div>
        </div>
    );
}

export default Galery;
