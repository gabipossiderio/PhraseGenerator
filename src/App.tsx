import { useState } from "react";
import "./App.css";

import logoImg from "./assets/logo.png";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "O talento vence jogos, mas o trabalho em equipe e a inteligência vencem campeonatos.",
        "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
        "O maior prazer do ser humano é conquistar aquilo que dizem que ele não é capaz.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "O talento vence jogos, mas o trabalho em equipe e a inteligência vencem campeonatos.",
        "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
        "O maior prazer do ser humano é conquistar aquilo que dizem que ele não é capaz.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "O talento vence jogos, mas o trabalho em equipe e a inteligência vencem campeonatos.",
        "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Bom dia, comece o seu dia com um sorriso no rosto e uma roupa nova!",
        "Hoje é um ótimo dia para experimentar algo novo!",
        "Bom dia, estamos aqui para ajudá-lo a encontrar o seu estilo perfeito!",
        "Bom dia, inspire-se com nossas novas coleções e modelos!",
        "Deixe a gente te ajudar a se sentir incrível hoje!",
        "O que você vai escolher para se destacar hoje?",
        "Sabe que dia é hoje? O dia perfeito para experimentar algo fora da sua zona de conforto!",
        "Bom dia, vamos encontrar a roupa perfeita para você!",
        "Bom dia! Você vai querer conferir as nossas peças em destaque hoje!",        "Bom dia, estamos aqui para ajudá-lo a se sentir incrível!",
        "Bom dia! Vamos encontrar a roupa perfeita para o seu dia hoje!",
        "Bom dia! Dê um toque especial ao seu guarda-roupa, hoje!",
        "Bom dia! Vamos encontrar a peça perfeita para o seu próximo evento?",
        "Bom dia! Já estamos super animados para encontrar a roupa perfeita para o seu estilo!",
        "Que tal transformar o seu guarda-roupa hoje?",
        "Bom dia, venha conferir nossos produtos para completar o seu look!",
        "Que dia bom para experimentar uma roupa linda, não acha? Vem curtir isso com a gente!",
      ],
    },
    {
      id: 3,
      nome: "Educação",
      frases: [
        "Educação é um processo social; é desenvolvimento. Não é a preparação para a vida; é a própria vida.",
        "O objetivo da educação é a virtude e o desejo de se tornar um bom cidadão.",
        "A criança é um ser humano, com os mesmos direitos humanos que os adultos.",
        "A educação é um ato de amor, por isso, um ato de coragem.",
        "Não é suficiente termos um bom cérebro. O mais importante é usá-lo bem.",
        "O educador moderno deve ser capaz de transmitir um ardente amor pela vida e pelas pessoas.",
        "Educação é o que resta depois que você esqueceu tudo que aprendeu na escola.",
        "Educar é impregnar de sentido o que fazemos a cada instante!",
        "As crianças precisam da liberdade de experimentar, errar e tentar de novo.",
        "Educar é mostrar a vida a quem ainda não a viu.",
        "A educação é um processo natural realizado pelo próprio ser humano e não por professores.",
        "O desenvolvimento da mente da criança vem através das mãos.",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrases(){
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length);
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img src={logoImg} alt="Logo Dev Frases" className="logo" />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-btn"
            style={{
              outlineWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 3 : 0,
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="btn-frase" onClick={gerarFrases}>
        Gerar Frase
      </button>

      {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>}
    </div>
  );
}

export default App;
