import paywall from './paywall.js';

const upsell = {
  upgrade_plan: 'Повысить план',
  compare_plans: 'Сравнить планы',
  view_plans: 'Просмотреть планы',
  create_tenant: {
    title: 'Выберите план арендатора',
    description:
      'Logto предоставляет конкурентные варианты планов с инновационной и доступной ценой, специально разработанными для растущих компаний. <a>Узнать больше</a>',
    base_price: 'Базовая цена',
    monthly_price: '{{value, number}}/мес.',
    mau_unit_price: 'Стоимость единицы MAU',
    view_all_features: 'Просмотреть все функции',
    select_plan: 'Выбрать <name/>',
    free_tenants_limit: 'До {{count, number}} бесплатного арендатора',
    free_tenants_limit_other: 'До {{count, number}} бесплатных арендаторов',
    most_popular: 'Самый популярный',
    upgrade_success: 'Успешно повышен до <name/>',
  },
  mau_exceeded_modal: {
    title: 'Превышено количество активных пользователей (MAU). Повысьте свой план.',
    notification:
      'Текущее количество активных пользователей (MAU) превысило лимит в плане <planName/>. Пожалуйста, незамедлительно обновите свой план до премиум-версии, чтобы избежать приостановки сервиса Logto.',
    update_plan: 'Обновить план',
  },
  payment_overdue_modal: {
    title: 'Просрочен платеж за счет',
    notification:
      'Упс! Оплата счета арендатора <span>{{name}}</span> не удалась. Пожалуйста, оплатите счет немедленно, чтобы избежать приостановки сервиса Logto.',
    unpaid_bills: 'Неоплаченные счета',
    update_payment: 'Обновить платеж',
  },
  /** UNTRANSLATED */
  charge_notification_for_quota_limit:
    'You have reached your quota limit. We may add charges for features that go beyond your quota limit as add-ons, once we finalize the prices.',
  /** UNTRANSLATED */
  charge_notification_for_token_limit:
    'You have reached your {{value}}M token quota limit. We may add charges for features that go beyond your quota limit as add-ons, once we finalize the prices.',
  /** UNTRANSLATED */
  charge_notification_for_m2m_app_limit:
    'You have reached your machine-to-machine quota limit. We may add charges for features that go beyond your quota limit as add-ons, once we finalize the prices.',
  paywall,
};

export default Object.freeze(upsell);
