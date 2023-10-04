import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import Main  from '../components/Main'

export default function Cadastro() {

    const router = useRouter()
    let {name} = router.query
    return (
        <main className={`${styles.main}`}>
            <h1>Cadastrar projeto administrador: {name}</h1>
            <Main title="Cadastro" />
        </main>
    )
}    