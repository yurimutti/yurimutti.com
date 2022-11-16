import * as S from './styles';

export function Hero() {
  return (
    <S.Section>
      <S.Text>
        <S.HeroGradient gradient="pink">Creating</S.HeroGradient> things
        <br /> and <S.HeroGradient gradient="blue">solving</S.HeroGradient>{' '}
        problems.
      </S.Text>
    </S.Section>
  );
}
