import { isAxiosError } from "axios"
import api from "../config/axios"


export async function getCategories() {
    try {
        const response = api.get('/categories.php')
        return (await response).data.categories
    } catch (error) {
        if(isAxiosError(error) && error.message){
            throw new Error(error.response.data.error);
        }
    }
}

export async function getCategoriesDetails(strCategory) {
    try {
        const response = api.get(`/filter.php?c=${strCategory}`)
        return (await response).data.meals
    } catch (error) {
        if(isAxiosError(error) && error.message){
            throw new Error(error.response.data.error);
        }
    }
}

export async function getMealsDetails(idMeal) {
    try {
        const response = api.get(`/lookup.php?i=${idMeal}`)
        return (await response).data.meals
    } catch (error) {
        if(isAxiosError(error) && error.message){
            throw new Error(error.response.data.error);
        }
    }
}