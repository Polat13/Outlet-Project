import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="flex min-h-screen text-white">
      <div className="flex flex-1 flex-col">
        <header className="bg-gray-800 p-6 flex justify-between px-20">
            <h1 className="text-lg font-semibold">Hoşgeldiniz</h1>
            <nav className="flex gap-7 flex-row">
          <Link to="/" className="hover:text-teal-400">🏠 Ana Sayfa</Link>
          <Link to="/dashboard" className="hover:text-teal-400">📊 Panel</Link>      
          <Link to="/profile" className="hover:text-teal-400">👤 Profil</Link>
          </nav>
        </header>

        <main className="flex-1 p-6 bg-gray-900">
          <Outlet /> 
        </main>

        <footer className="bg-gray-800 p-4 text-center text-sm text-gray-400">
          <Link to="/about" className="hover:text-teal-400">ℹ️ Hakkında</Link>    
        </footer>
      </div>
    </div>
  );
}

export default Layout;
