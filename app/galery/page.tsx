import Galery from "../_components/Galery";
import { auth } from "../_lib/auth";

import { getUserByName, getUsers } from "../_lib/data-service"

async function page() {
    const users = await getUsers() || []
    const session = await auth()
    const {id} = await getUserByName(session?.user?.name)
    const contacts = users.filter((user) => user.id !== id )

    return (
        <div>
            oooooooold page zbrisi!!!
            <Galery contacts={contacts} />
        </div>
    )
}

export default page
