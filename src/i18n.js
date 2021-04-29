import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      homeView: "Home",
      phonebookView: "Personal Phonebook",
      title: "Welcome!",
      description:
        "You are presented with a free application for organizing your phone contacts. In it you can create not only your own contact list with a convenient structure, but also a list of notes (this section is under development). The application has a convenient graphical shell and a simple interface in which to understand even an inexperienced computer user. This application is useful for users who have a lot of phone numbers or notes",
      contactFormName: "Name",
      contactFormNumber: "Number",
      contactFormBtn: "Add Contact",
      registerFormName: "Name",
      registerFormEmail: "E-mail",
      registerFormPassword: "Password",
      registerFormBtn: "Add New User",
      loginFormEmail: "E-mail",
      loginFormPassword: "Password",
      loginFormBtn: "Come in",
      loading: "Loading...",
      subtitle: "Contacts",
      filter: "Find contacts by name",
    },
  },
  ru: {
    translation: {
      homeView: "Главная",
      phonebookView: "Персональная телефонная книга",
      title: "Добро пожаловать!",
      description:
        "Вам представлено бесплатное приложение для упорядочивания Ваших телефонных контактов.В нем Вы сможете создать не только собственный список контактов с удобной структурой, но и список заметок(данный раздел находится на стадии разработки).В приложении имеется удобная графическая оболочка и простой интерфейс, в котором разберётся даже неопытный пользователь компьютера.Это приложение пригодится пользователям, у которых очень много телефонных номеров или заметок",
      contactFormName: "Имя",
      contactFormNumber: "Номер",
      contactFormBtn: "Добавить контакт",
      registerFormName: "Имя",
      registerFormEmail: "Электр.почта",
      registerFormPassword: "Пароль",
      registerFormBtn: "Добавить нового пользователя",
      loginFormEmail: "Электр.почта",
      loginFormPassword: "Пароль",
      loginFormBtn: "Войти",
      loading: "Загружаем...",
      subtitle: "Контакты",
      filter: "Поиск контактов по имени",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
