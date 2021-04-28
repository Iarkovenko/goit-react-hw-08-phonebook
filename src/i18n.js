import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      homeView: "Home",
      phonebookView: "Personal Phonebook",
      title: "Phonebook",
      formName: "Name",
      formNumber: "Number",
      formBtn: "Add Contact",
      loading: "Loading...",
      subtitle: "Contacts",
      filter: "Find contacts by name",
    },
  },
  ru: {
    translation: {
      homeView: "Главная",
      phonebookView: "Персональный блокнот",
      title: "Блокнот",
      formName: "Имя",
      formNumber: "Номер",
      formBtn: "Добавить контакт",
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
