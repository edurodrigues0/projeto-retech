import { Button } from "@/components/ui/button";
import successSVG from "../../public/success.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Donor = {
  0: {
    ID: string;
    Nome: string;
    Componente: string;
  };
};

export function Success() {
  const { requestId } = useParams();
  const [donor, setDonor] = useState<Donor>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SHEET_API_URL}/query?ID=${requestId}`)
      .then((response) => setDonor(response.data));
  }, [requestId]);

  if (!donor) {
    return;
  }

  return (
    <div className="w-screen h-full p-5 flex items-center justify-evenly gap-24 max-lg:flex-col-reverse max-sm:justify-center max-sm:items-center max-sm:gap-16">
      <div className="flex flex-col gap-5 w-[50rem] max-sm:w-full max-sm:gap-2">
        <h1 className="text-2xl font-bold leading-10 max-sm:text-lg">
          Projeto Re-Tech Agradece
        </h1>
        <span className="text-base leading-10 max-sm:text-sm">
          Obrigado <span className="font-bold">{donor[0].Nome}</span>! <br /> Em
          nome de todos nós na instituição Madiba, gostaríamos de expressar
          nossa mais profunda gratidão pela generosa doação de componentes e
          peças de computadores que você gentilmente ofereceu. Sua contribuição
          é verdadeiramente inestimável e fará uma diferença significativa na
          experiência educacional dos nossos alunos. A generosidade que você
          demonstrou ao compartilhar{" "}
          <span className="font-bold">
            {donor[0].Componente.toLocaleLowerCase()}
          </span>{" "}
          não apenas enriquecerá nosso laboratório de informática, mas também
          proporcionará aos alunos acesso a recursos tecnológicos essenciais.
          Seu gesto solidário não só fortalece a infraestrutura da instituição,
          mas também inspira uma comunidade de aprendizado mais dinâmica e
          inovadora. Saiba que sua doação não é apenas material, mas uma valiosa
          oportunidade para o crescimento acadêmico e profissional de nossos
          alunos. Estamos comprometidos em garantir que esses recursos sejam
          utilizados da melhor maneira possível, proporcionando aos estudantes
          uma educação mais enriquecedora e prática. Mais uma vez, obrigado por
          sua generosidade e por acreditar na missão da instituição Madiba. Seu
          apoio faz toda a diferença e é fundamental para o nosso sucesso
          contínuo. Com gratidão,
        </span>
        <span className="text-xl leading-10 max-sm:text-base">
          &quot;A educação é a arma mais poderosa que você pode usar para mudar
          o mundo.&quot;
          <br />
          <span className="mt-1 font-bold">- Nelson Mandela</span>
        </span>

        <Button
          onClick={() => navigate("/")}
          className="w-32 font-bold text-lg max-sm:w-full max-sm:text-sm max-sm:font-normal"
        >
          Voltar :D
        </Button>
      </div>

      <img
        className="w-96 max-lg:w-64 max-sm:w-44 max-sm:mt-16"
        src={successSVG}
        alt="Menina segurando um balão"
      />
    </div>
  );
}
