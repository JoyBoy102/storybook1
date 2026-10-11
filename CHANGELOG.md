# Changelog

Все заметные изменения дизайн-системы **NextStep** документируются в этом файле.
Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/),
версионирование — на [Semantic Versioning](https://semver.org/lang/ru/).

## [1.2.0] — 2026-10-11

### Added
- Компонент `Badge` с вариантами info/success/warning/error
- Компонент `Spinner` с размерами sm/md/lg
- Компоненты `FormField`, `Pagination`, `Tabs`, `Tooltip`
- Организмы `Banner`, `CheapsSection`, `CourseCardsSection`, `ReviewsSection`
- Страница `HomePage`, собирающая главную страницу NextStep
- Документация токенов `Foundations/Tokens`

### Changed
- `Card` приведена к горизонтальному макету `.course-card` (картинка слева)
- `ReviewCard` — добавлена рамка `--color-border-card`
- Компоненты переведены на токены NextStep (светлая и тёмная темы)

### Removed
- Компоненты `Avatar`, `Icon`, `Rating`, `ThemeToggle`, `Breadcrumbs`

## [1.1.0] — 2026-10-11

### Added
- Тёмная тема на уровне токенов (`tokens-dark.css`, `[data-theme="dark"]`)
- Переключатель темы в Storybook (глобальный toolbar в `preview.js`)
- Компонент `ReviewCard` (карточка отзыва)

### Changed
- Токены NextStep вынесены в `tokens/global`, `tokens/light`, `tokens/dark`
- Style Dictionary: сборка светлой и тёмной тем отдельными конфигами

## [1.0.0] — 2026-10-01

### Added
- Первая версия дизайн-системы NextStep
- Дизайн-токены в формате W3C (colors, typography, spacing, radii, shadows, motion)
- Атомы: `Button`, `Input`, `Checkbox`, `Chip`
- Молекулы: `Card`, `SearchInput`
- Генерация CSS-переменных через Style Dictionary
- Документация компонентов в Storybook
