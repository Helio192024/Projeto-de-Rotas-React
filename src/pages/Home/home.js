import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category from "../../components/Category/category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import CustomHeader from "../../components/Header";
import video from "../../json/videos.json";

const categories = [
    "Rock",
    "Rap",
    "Eletronica",
    "Funk",
    "Sertanejo",
]
function filterCategory(id) {
    return video.filter(video => video.category === categories[id])
}

function Home() { 

    let nomeDigitado = ""
    function pegarNome(event) {
       console.log(event.target.value)
        nomeDigitado = event.target.value
       setNome(event.target.value)
   }

    // Hook = gancho -> useState
    const [nome, setNome] = useState();


    return (
        <>
            <CustomHeader />
            <Banner />
            <Container>
                <input
                    type="text"
                    placeholder="Nome"
                    onChange={pegarNome}
                />
                <h2>{nome}</h2>



                {/* <Category category={categories[0]}>
                    {filterCategory(0).map((video) => <Card id={video.id} key={video.id} />)}
                </Category>

                <Category category={categories[1]}>
                    {filterCategory(1).map((video) => <Card id={video.id} key={video.id} />)}
                </Category>

                <Category category={categories[2]}>
                    {filterCategory(2).map((video) => <Card id={video.id} key={video.id} />)}
                </Category>

                <Category category={categories[3]}>
                    {filterCategory(3).map((video) => <Card id={video.id} key={video.id} />)}
                </Category>

                <Category category={categories[4]}>
                    {filterCategory(4).map((video) => <Card id={video.id} key={video.id} />)}
                </Category>
 */}

            </Container>
            <Footer />
        </>
    );
}

export default Home;



