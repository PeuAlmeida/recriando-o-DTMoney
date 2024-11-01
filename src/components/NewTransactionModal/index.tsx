import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container action="">
        <h2>Cadastrar Transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
            <button type="button">
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </button>
            <button type="button">
                <img src={outcomeImg} alt="Saida" />
                <span>Saida</span>
            </button>

        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
