interface HeaderProps {
    onAbrirConta: () => void
}

export function Header({onAbrirConta}: HeaderProps) {
    return(
        <header className="mb-10 flex justify-between items-center">
            <div>
                <h1 className="text-4xl font-bold text-white">Byte<span className="text-purple-800">Bank</span></h1>
                <p className="text-gray-400 mt-1">Painel de contas</p>
            </div>
            
            <button
            onClick={onAbrirConta}
            className="bg-purple-800 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors "
            >
                + Abrir conta
            </button>
        </header>
    )
}