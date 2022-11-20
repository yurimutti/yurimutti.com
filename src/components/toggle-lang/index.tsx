import { useRef, useState } from 'react';
import { MdLanguage, MdClose } from 'react-icons/md';

import { AnimatePresence } from 'framer-motion';
import { useOnClickOutside } from 'usehooks-ts';

import * as S from './styles';

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

  // EN // PT-BR

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
                <S.Language isActive>English</S.Language>
                <S.Language>Português (Brasil)</S.Language>
              </S.LanguagesList>
            </S.Languages>
          </S.Container>
        </S.LangModal>
      )}
    </AnimatePresence>
  );
}
