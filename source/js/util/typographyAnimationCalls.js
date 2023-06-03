import AccentTypographyBuild from "./AccentTypographyBuildClass";

export const allInitialTypographyAnimationsRun = () => {
  const typographyAnimations = {
    introTitleTypographyAnimation:
      new AccentTypographyBuild(`.intro__title`, 500, `active`, `transform`),

    introDateTypographyAnimation:
      new AccentTypographyBuild(`.intro__date`, 500, `active`, `transform`),

    sliderItemTitleHistoryTypographyAnimation:
      new AccentTypographyBuild(`.slider__item-title`, 500, `active`, `transform`),

    prizesTitleTypographyAnimation:
      new AccentTypographyBuild(`.prizes__title`, 500, `active`, `transform`),
  }

  setTimeout(() => {
    Object.values(typographyAnimations).forEach(typography => typography.runAnimation());
  }, 500);
}
