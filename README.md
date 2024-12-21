# Задание 1 - Разбиение проекта на микрофронты

Используем технологию Webpack Module Federation, поскольку требуется подключить небольшие компоненты на одном фреймворке - React.
Разделяем на 2 микрофронта:
1. Точка входа, основное приложение
2. auth-microfrontend - отвечает за авторизацию и регистрацию

Что сделано:
- предложена структура проекта с разбиением на микрофронтенды
- Проект запускается. Приложения host и auth-microfrontend работают, auth загружается внутри host. Однако есть баги с поехавшей версткой втроенных компонентов и не работает логика авторизации.


## Структура проекта

/frontend
  /src
    /components
      AddPlacePopup.js              // Компонент формы добавления места
      Card.js                       // Компонент карточки
      ImagePopup.js                 // Компонент картинки
      Main.js                       // Компонент главной страницы
      App.js                        // Компонент главного приложения
      EditAvatarPopup.js            // Компонент формы редактирования аватара
      EditProfilePopup.js           // Компонент формы редактирования профиля
      Footer.js                     // Футер
      Header.js                     // Хэдер
      InfoTooltip.js                // Компонент подсказки
      PopupWithForm.js              // Компонент модального окна
      ProtectedRoute.js             // Маршрутизация по страницам
    /blocks                         // Стили
    /context                        // Реакт-контекст
    /images                         // Ресурсы (изображения)
    /vendor                         // Шрифты
    /utils                          // Вспомогательные утилиты
    index.css                       // Стили точки входа
    index.js                        // Точка входа
    serviceWorker.js                // ?
    setupTests.js                   // Импорт тестов jset
  /public                           // index.html
  index.spec.js                     // Тестовые сценарии
  package.json                      // Зависимости и скрипты
  package-lock.json                 // Фиксация версий зависимостей
  webpack.config.js                 // Настройка Module Federation для хоста

  /auth-microfrontend
    /src
      /components
        Login.js                      // Компонент входа пользователя
        Register.js                   // Компонент регистрации пользователя
      /blocks                         // Стили
      /utils
        auth.js                       // Утилиты для аутентификации
      index.js                        // Точка входа микрофронтенда
    package.json                      // Зависимости и скрипты микрофронтенда
    webpack.config.js                 // Настройка Module Federation микрофронта


____

# Задание 2 - декомпозиция приложения

Ссылка на диаграмму:
https://drive.google.com/file/d/1uFhDHHD0L26yGgUfQ7xQV5C1vgX3PPx8/view?usp=sharing

