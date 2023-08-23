import PdfPage from "../components/Certificate";
import MainCarousel from "../components/MainCarousel";
import MainLayout from "../layouts/main.layout";

export default function Home() {
    return (
        <MainLayout>
            <MainCarousel />
            <PdfPage />
        </MainLayout>
    )
}