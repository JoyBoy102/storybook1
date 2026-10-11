# NextStep Design System

Дизайн-система для образовательной платформы **NextStep** (агрегатор онлайн-курсов).
Построена по методологии **Atomic Design** (Atoms → Molecules → Organisms → Pages).

## Принципы
1. **Ясность** — каждый компонент понятен без документации
2. **Консистентность** — одинаковые элементы выглядят одинаково во всех сценариях
3. **Доступность** — соответствие WCAG 2.1 AA (aria-атрибуты, focus-состояния)
4. **Адаптивность** — компоненты работают на всех разрешениях
5. **Расширяемость** — систему можно дополнять без пересмотра существующего

## Структура (Atomic Design)

```
src/components/
├── atoms/           # Атомы — базовые элементы
│   ├── Button/      # primary/secondary/ghost/danger × sm/md/lg
│   ├── Input/       # text/email/password
│   ├── Checkbox/
│   ├── Chip/        # кнопки-категории
│   ├── Badge/       # info/success/warning/error
│   └── Spinner/     # индикатор загрузки
├── molecules/       # Молекулы — комбинация атомов
│   ├── Card/        # карточка курса
│   ├── SearchInput/ # строка поиска
│   ├── FormField/   # label + input + helper/error
│   ├── Pagination/
│   ├── Tabs/
│   └── Tooltip/
├── organisms/       # Организмы — сложные блоки
│   ├── Header/      # шапка с навигацией
│   ├── Footer/      # подвал
│   ├── Banner/      # hero-секция
│   ├── ReviewCard/  # карточка отзыва
│   ├── CheapsSection/      # секция фильтров-чипов
│   ├── CourseCardsSection/ # сетка курсов
│   ├── ReviewsSection/     # карусель отзывов
│   └── HomePage/    # собранная главная страница
└── index.js
```

## Итого компонентов
- **Atoms:** 6 (Button, Input, Checkbox, Chip, Badge, Spinner)
- **Molecules:** 6 (Card, SearchInput, FormField, Pagination, Tabs, Tooltip)
- **Organisms:** 8 (Header, Footer, Banner, ReviewCard, CheapsSection, CourseCardsSection, ReviewsSection, HomePage)

## Дизайн-токены (W3C)

Токены описаны в JSON в папке `tokens/`:
- `global/` — spacing, radii, shadows, motion, typography
- `light/colors.json` — светлая тема
- `dark/colors.json` — тёмная тема

Генерация CSS-переменных через **Style Dictionary**:

```bash
npm run tokens
```

Результат:
- `src/styles/tokens.css` — светлая тема (`:root`)
- `src/styles/tokens-dark.css` — тёмная тема (`[data-theme="dark"]`)

## Тёмная тема

Переключение через атрибут `data-theme` на `<html>`. В Storybook добавлен
глобальный переключатель темы в тулбаре (см. `.storybook/preview.js`).

## Запуск Storybook

```bash
npm run storybook     # http://localhost:6006
npm run build-storybook
```

## Версионирование

SemVer: MAJOR.MINOR.PATCH. См. CHANGELOG.md.
