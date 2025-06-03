import { useQuery } from "@tanstack/react-query";
import { getCategoriesDetails } from "../api/TheMealAPI"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";


export default function CategoriesDetailsCard(props) {
    const { strCategory } = props

    const [categoriesDetails, setCategoriesDetails] = useState(null)

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(8)

    const { data, isLoading, isError } = useQuery({
        queryFn: () => getCategoriesDetails(strCategory),
        queryKey: ['categories', strCategory],
        retry: 1,
        refetchOnWindowFocus: false
    })

    useEffect(() => {
        if (data && !isLoading && !isError) {
            setCategoriesDetails(data)
        }
    }, [data, categoriesDetails])

    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <p>Ocurrió un error al cargar los datos.</p>;
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
                {categoriesDetails?.slice(start, end).map((categoryDetails) => (
                    <div
                        key={categoryDetails.idMeal}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                    >
                        <Link to={`/categories/${strCategory}/meals/${categoryDetails.idMeal}`}>
                            <img
                                className="rounded-t-lg w-full h-48 object-cover"
                                src={categoryDetails.strMealThumb}
                                alt={categoryDetails.strCategory}
                            />
                        </Link>
                        <div className="p-5">
                            <Link to={`/categories/${strCategory}/meals/${categoryDetails.idMeal}`}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {categoryDetails.strMeal}
                                </h5>
                            </Link>
                            <Link
                                to={`/categories/${strCategory}/meals/${categoryDetails.idMeal}`}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow z-50">
                <Pagination data={categoriesDetails} setStart={setStart} setEnd={setEnd} />
            </div>
        </>
    )
}