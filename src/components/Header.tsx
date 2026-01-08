const Header = () => {
  return (
    <header className="pt-4 pb-4 pl-8 pr-8 w-full flex justify-between items-center bg-gray-300 rounded-b-xl ">
      <div>
        <h1 className=" text-3xl font-bold">Jonas Levy</h1>
      </div>
      <div>
        <nav>
          <ul className="flex gap-4 ">
            <li className="">
              <a href="#about" className="text-neutral-600 hover:underline">
                Sobre mim
              </a>
            </li>
            <li className="">
              <a href="#skills" className="text-neutral-600 hover:underline">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="text-neutral-600 hover:underline">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="text-neutral-600 hover:underline">
                Contatos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
