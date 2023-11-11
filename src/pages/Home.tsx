import { useAuth } from '../context/auth-context'


const Home = () => {
    const {account} = useAuth();
    return (
        <>
            <h1 className='font-bold text-3xl'>Hi {account.name}</h1>
        </>
    )
}

export default Home