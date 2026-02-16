export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-zinc-500">
          © {currentYear} The Cabins. Todos los derechos reservados.
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Creado por{" "}
          <a
            href="https://github.com/tyronejosee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Tyrone Jose
          </a>
        </p>
      </div>
    </footer>
  );
}
