import '../MainContainer/MainContainer.css';

export default function MainContainer ({ children }){
    return(
        <main className="main-container">
            { children }
        </main>
    );
}
