import Footer from "./Footer"
import Header from "./header"

export default function About() {
    return (
        <>
            <div className=" justify-center items-center">
                <Header />

                <div className="flex justify-center items-center w-100% h-500px bg-sky-100">
                    <p>about page</p>
                </div>
                <div className="fixed bottom-0 w-full">
                    <Footer />
                </div>
            </div>
        </>
    )
}