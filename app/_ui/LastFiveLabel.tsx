import { useAppSelector } from "../hooks"

function LastFiveLabel() {
    const {imageArray} = useAppSelector(store => store.galery)
    if(!!imageArray) return null
    return (
        <div>
            <p className="text-center">Zadnjih 5 naloženih slik</p>
        </div>
    )
}

export default LastFiveLabel
