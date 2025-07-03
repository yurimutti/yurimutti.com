'use client';

import * as S from './styles';

export const Hero = () => {
  return (
    <S.Section>
      <S.Text>
        <S.HeroGradient>Criando</S.HeroGradient> coisas
        <br /> e <S.HeroGradient gradient="invert">
          resolvendo
        </S.HeroGradient>{' '}
        problemas.
      </S.Text>
    </S.Section>
  );
};
