import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionsModal: () => void;
}

export function Header ({onOpenNewTransactionsModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="logo dtmoney" />
                <button type='button' onClick={onOpenNewTransactionsModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}