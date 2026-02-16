"use client";
import { Provider } from "react-redux";
import ContactCard from "./ContactCard";
import store from "../_lib/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type UserType = {
    name: string;
    id: string;
};

type UserListProps = {
    contacts: UserType[];
};

function ContactList({ contacts }: UserListProps) {
    const queryClient = new QueryClient();

    function toggleFullScreen() {
        const element = document.body;

        // if (event instanceof HTMLElement) {
        //     element = event;
        // }
        if (!document.fullscreenElement) {
            // If the document is not in full screen mode
            // make the video full screen
            element.requestFullscreen();
        } else {
            // Otherwise exit the full screen
            document.exitFullscreen?.();
        }
    }

    return (
        <div className="flex items-center justify-center w-screen h-15 gap-1">
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    {contacts.map((user) => (
                        <ContactCard user={user} key={user.id} />
                    ))}
                </QueryClientProvider>
            </Provider>
            <button onClick={toggleFullScreen}>testt</button>
        </div>
    );
}

export default ContactList;
