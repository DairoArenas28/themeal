import CarouselCard from "../components/home/Carousel";

export default function HomeView() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <CarouselCard />
            </div>
            <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-4">Busca tu receta favorita</h1>
                <p className="text-lg mb-2">
                    Más de 14 categorías con sus recetas, paso a paso y sin complicaciones.
                </p>
                <p className="text-lg">
                    Cada receta cuenta con una excelente explicación e ingredientes detallados.
                </p>
            </div>
        </div>
    );
}