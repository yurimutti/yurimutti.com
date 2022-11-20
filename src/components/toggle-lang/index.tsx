import { useRef, useState } from 'react';
import { MdLanguage, MdClose } from 'react-icons/md';

import { AnimatePresence } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';

import * as S from './styles';
interface Languages {
  name: string;
  code: string;
}

const languages: Languages[] = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Português (Brasil)',
    code: 'pt-BR',
  },
];

export function ToggleLang() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handlCloseModal = () => {
    setOpen(false);
  };

  const handleClickOutside = () => {
    handlCloseModal();
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <AnimatePresence>
      <S.ToggleLang onClick={() => setOpen(!open)}>
        <MdLanguage />
        EN
      </S.ToggleLang>

      {open && (
        <S.LangModal
          ref={ref}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, origin: 1 }}
        >
          <S.Container>
            <S.CloseButton onClick={handlCloseModal}>
              <MdClose />
            </S.CloseButton>
            <S.LangTitle>Selecione o idioma de sua preferência</S.LangTitle>

            <S.Languages>
              <S.LanguagesList>
                {languages.map((lang) => (
                  <S.LanguageItem isActive key={lang.code}>
                    {lang.name}
                  </S.LanguageItem>
                ))}
              </S.LanguagesList>
            </S.Languages>
          </S.Container>
        </S.LangModal>
      )}
    </AnimatePresence>
  );
}
