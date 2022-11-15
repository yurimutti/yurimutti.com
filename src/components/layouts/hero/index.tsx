import * as S from './styles';

export function Hero() {
  return (
    <S.Section>
      <S.Text>
        <S.HeroGradient>Building</S.HeroGradient> products
        <br /> and <S.HeroGradient>solving</S.HeroGradient> problems.
      </S.Text>
    </S.Section>
  );
}
