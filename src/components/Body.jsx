import Footer from "./Footer";
import Header from "./header";

export default function body(){
    return(
        <>
                <Header/>
        <div className="flex justify-center items-center w-screen h-screen">

        <div className="flex bg-zinc-200 w-5xl h-90 justify-evenly rounded-2xl">
            <div>
            payments
            </div>
            <div>
            expenses
            </div>


        </div>
        </div>
            <Footer/>
        </>
    )
}