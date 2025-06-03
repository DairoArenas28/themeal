import { useParams } from "react-router-dom"
import { getMealsDetails } from "../api/TheMealAPI";
import { useQuery } from "@tanstack/react-query";
import MealIngredientsList from "../components/MealIngredientsList";


export default function MealsDetailsView() {

    const ingredients = []

    const { strCategory, idMeal } = useParams()

    console.log(strCategory, idMeal)
    const { data, isLoading, isError } = useQuery({
        queryFn: () => getMealsDetails(idMeal),
        queryKey: ['mealdetails', idMeal],
        retry: 1,
        refetchOnWindowFocus: false
    })

    if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

    const meal = data[0]
    console.log(meal.idMeal)

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure} ${ingredient}`.trim());
        }
    }

    console.log(data)

    console.log(ingredients)

    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <p>Ocurrió un error al cargar los datos.</p>;
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 min-h-screen p-6 bg-gray-50">
            {/* Imagen */}
            <div className="bg-red-200 flex justify-center items-center p-4">
                <img src={meal.strMealThumb} alt="Meal" className="rounded-lg w-72" />
            </div>

            {/* Ingredientes */}
            <div className="bg-blue-200 flex justify-center items-start p-4">
                <MealIngredientsList ingredients={ingredients}/>
            </div>

            {/* Video */}
            <div className="bg-red-200 flex justify-center items-center p-4">
                <iframe
                    src={`https://www.youtube.com/embed/${meal.strYoutube?.split("v=")[1]}`}
                    title="Meal video"
                    className="w-full max-w-xl aspect-video rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Instrucciones */}
            <div className="bg-blue-200 p-4 overflow-auto text-justify rounded">
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    )
}