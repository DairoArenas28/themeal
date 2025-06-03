

export default function MealIngredientsList(props) {
    const { ingredients } = props
    return (
        <>
            <ul className="list-disc list-inside space-y-1">
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                ))}
            </ul>
        </>
    )
}