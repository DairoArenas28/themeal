import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import AppLayout from "./layouts/AppLayout";
import CategoriesView from "./views/CategoriesView";
import CategoriesDetailsView from "./views/CategoriesDetailsView";
import MealsDetailsView from "./views/MealsDetailsView";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<AppLayout />}>
                    <Route index path="/home" element={<HomeView />}/>
                    <Route path="/categories" element={<CategoriesView />}/>
                    <Route path="/categories/:strCategory" element={<CategoriesDetailsView />}/>
                    <Route path="/categories/:strCategory/meals/:idMeal" element={<MealsDetailsView />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}