import React, { useState, useEffect } from 'react';

// Componente funcional Navbar que representa a barra de navegação do site
const Navbar = () => {
    // Estado que controla se o menu mobile está aberto ou fechado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Estado que indica se o usuário está autenticado
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Hook que roda uma vez após o componente montar, para checar se há usuário logado no localStorage
    useEffect(() => {
        // Pega o item 'user' do localStorage (pode ser token ou info do usuário)
        const user = localStorage.getItem('user');
        // Atualiza o estado isAuthenticated para true se user existir, ou false se não
        setIsAuthenticated(!!user);
    }, []);

    // Função para alternar a abertura/fechamento do menu mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função que executa logout do usuário
    const handleLogout = () => {
        // Remove o usuário do localStorage
        localStorage.removeItem('user');
        // Atualiza estado para não autenticado
        setIsAuthenticated(false);
        // Redireciona o usuário para a página inicial
        window.location.href = '/';
    };

    // JSX que representa os links do menu (desktop e mobile)
    // Exibe diferentes opções dependendo se o usuário está autenticado ou não
    const menuLinks = (
        <>
            {/* Links públicos */}
            <a href="/" className="text-amber-300 hover:text-amber-200 transition-colors duration-300 text-lg font-medium">Home</a>
            <a href="/about" className="text-amber-300 hover:text-amber-400 transition-colors duration-300 text-lg font-medium">Sobre</a>
            <a href="/service" className="text-amber-400 hover:text-amber-400 transition-colors duration-300 text-lg font-medium">Serviços</a>
            <a href="/contact" className="text-amber-200 hover:text-amber-400 transition-colors duration-300 text-lg font-medium">Contato</a>

            {/* Se o usuário estiver autenticado mostra perfil e botão sair */}
            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-amber-300 hover:text-amber-300 transition-colors duration-300 text-lg font-medium">Perfil</a>
                    <button onClick={handleLogout} className="text-amber-300 hover:text-amber-400 transition-colors duration-300 text-lg font-medium">Sair</button>
                </>
            ) : (
                // Se não estiver autenticado, mostra o link para login
                <a href="/login" className="text-amber-400 hover:text-amber-400 transition-colors duration-300 text-lg font-medium">Login</a>
            )}
        </>
    );

    return (
        // Tag <nav> que engloba toda a barra de navegação
        <nav className="w-full bg-gradient-to-r from-blue-50 to-blue-50 text- py-0 px-2 shadow-lg fixed top-0 left-0 z-30">
            {/* Container interno com limite máximo de largura e flexbox para espaçar os itens */}
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo/título do site */}
                <div className="flex items-center">
                    <a href="/" className="ml-[7.5px] text-2xl font-extrabold text-shadow-teal-300 hover:text-shadow-lime-800  transition-colors duration-300">
                        Nova Serra Verde
                    </a>
                </div>

                {/* Links do menu visíveis apenas no desktop (lg e acima) */}
                <div className="hidden lg:flex space-x-8">
                    {menuLinks}
                </div>

                {/* Botão para abrir o menu mobile, visível só em telas menores que lg */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-blue-900 focus:outline-none">
                        {/* Ícone hamburguer SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu mobile que aparece/oculta conforme o estado isMenuOpen */}
            <div className={`lg:hidden bg-gradient-to-r from-emerald-900 to-amber-950 p-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                {menuLinks}
            </div>
        </nav>
    );
};

export default Navbar;
