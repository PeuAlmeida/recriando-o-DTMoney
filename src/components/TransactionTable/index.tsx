import { Container } from "./styles";

export default function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>29/10/2024</td>
          </tr>
          <tr>
            <td>Aluguel da casa</td>
            <td className="withdraw">- R$ 1.100</td>
            <td>Alguel</td>
            <td>29/10/2024</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>29/10/2024</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
