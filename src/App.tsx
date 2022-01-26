import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransacionModal";
import { TransactionsContext, TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      < Header onOpenNewTransactionsModal={handleOpenNewTransactionModal} />

      < Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}/>

      < GlobalStyle />
    </TransactionsProvider>
  );
}
