import * as S from './styles';

export const Hero = () => {
  return (
    <S.Section>
      <S.Text>
        <S.HeroGradient>Creating</S.HeroGradient> things
        <br /> and <S.HeroGradient gradient="invert">
          solving
        </S.HeroGradient>{' '}
        problems.
      </S.Text>
    </S.Section>
  );
};
