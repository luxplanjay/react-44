# Admin panel workshop

- Разбираем макет
  - Проектируем маршруты и компоненты
- Компонент **Layout**
- Сайдбар **AppBar**
  - Главная навигация **Nav**
    - Список элементов навигации
    - Используем **NavLink**
    - Активные ссылки
- Страница продаж, компонент **Sales**
  - Шапка с навигацией
  - Список инвойсов в сайдбаре
- Компонент деталей инвойса **InvoiceDetails**
  - Динамические параметры и **useParams**

## Маршруты

- / Layout
  - /dashboard
  - /sales Sales
    - /analytics
    - /invoices Invoices
      - /:invoiceId InvoiceDetails
    - /deposits
  - /reports
  - /feedback
  - /customers
