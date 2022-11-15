import * as S from './styles';

export function Hero() {
  return (
    <S.Section>
      <S.Text>
        <S.HeroGradient>Building</S.HeroGradient> things and <br />
        <S.HeroGradient>Solving</S.HeroGradient> problems.
      </S.Text>
    </S.Section>
  );
}
