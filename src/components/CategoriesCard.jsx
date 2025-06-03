import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../api/TheMealAPI"
import { Link } from "react-router-dom"


export default function CategoriesCard() {

    const { data, isLoading, isError } = useQuery({
        queryFn: getCategories,
        queryKey: ['categories'],
        retry: 1,
        refetchOnWindowFocus: false
    })

    console.log(data)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-5">
            {data?.map((category) => (
                <div
                    key={category.idCategory}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                    <Link to={`/categories/${category.strCategory}`}>
                        <img
                            className="rounded-t-lg w-full h-48 object-cover"
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                        />
                    </Link>
                    <div className="p-5">
                        <Link to={`/categories/${category.strCategory}`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {category.strCategory}
                            </h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
                            {category.strCategoryDescription}
                        </p>
                        <Link
                            to={`categories/${category.strCategory}`}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            ))}
        </div>


    )
}