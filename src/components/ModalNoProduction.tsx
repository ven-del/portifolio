import * as Dialog from '@radix-ui/react-dialog';
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';

interface ModalNoProductionProps {
  githubUrl: string;
  children: React.ReactNode;
  isPortfolio?: boolean;
}

const ModalNoProduction = ({ githubUrl, children, isPortfolio = false }: ModalNoProductionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <Dialog.Content className="card bg-(--cosmic-darkest)/50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-1/3 w-full h-1/3 p-6 border border-gray-700 rounded-lg shadow-lg z-50">
          <div
            className={`flex flex-col items-center justify-between ${
              isPortfolio ? "h-1/2" : "h-full"
            } text-center`}
          >
            <Dialog.Title className="text-2xl font-bold mb-4">
              {isPortfolio ? "Você já está aqui!" : "Calma lá!"}
            </Dialog.Title>

            <Dialog.Description className="text-white/80 text-lg mb-4 max-w-md">
              {isPortfolio
                ? "Esta já é a versão em produção do portfólio."
                : "O site ainda não está em produção. Mas já possui um repositório no GitHub. Quer ver por lá?"}
            </Dialog.Description>

            {!isPortfolio && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center justify-center gap-2 mt-2"
              >
                <FaGithub /> Ver no GitHub
              </a>
            )}

            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white"
                aria-label="Fechar"
              >
                ✕
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalNoProduction;