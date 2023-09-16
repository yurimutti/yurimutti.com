import * as S from './styles';

export const Hero = () => {
  const teste = [1, 2, 3, 4];

  teste.filter((item: number) => item > 2);

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
