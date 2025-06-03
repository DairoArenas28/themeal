import { useParams } from "react-router-dom";
import CategoriesDetailsCard from "../components/CategoriesDetailsCard";


export default function CategoriesDetailsView() {
    const {strCategory} = useParams()
    console.log(strCategory)
    return (
        <>
            <CategoriesDetailsCard strCategory={strCategory}/>
        </>
    )
}