import { useState } from 'react';
import { Header } from './Header';

type MessageProps = {
  name: string;
};

export function Main() {
  const [pessoas, setPessoas] = useState<string[]>(['José', 'Maria', 'João']);
  const [numPessoas, setNumPessoas] = useState<number>(pessoas.length - 3);

  const insertName = () => {
    const newNumPessoas = numPessoas + 1;
    setPessoas([...pessoas, `Nova Pessoa ${newNumPessoas}`]);
    setNumPessoas(newNumPessoas);
  };

  function Message(props: MessageProps) {
    return <p>{'Hello ' + props.name}</p>;
  }

  return (
    <div>
      <Header />
      {pessoas.map((pessoa) => {
        return <Message key={pessoa} name={pessoa} />;
      })}
      <button onClick={insertName}>Adicionar pessoa</button>
    </div>
  );
}
