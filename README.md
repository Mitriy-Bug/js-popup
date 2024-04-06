# Модальное окно на чистом javaScript
## Контент модального окна размещается в скрытом блоке, в котором можно разместить что угодно
## Скрипт может выводить несколько различных окон на одной странице

### Инструкция

- Подключаем файлы popup.js и popup.css
- размещаем блок всплывающего окна, лучше в конце страницы. Скрывать дополнительно не надо, для его класса прописаны стили в файле popup.css. В примере используется код формы обратной связи, созданной на плагине [Radical Form]([http://example.com/](https://github.com/Delo-Design/radicalform)) для Joomla
```
<div class="popup__bg forma-zakaz">
    <div class="popup text-center">
        <div class="close-popup">
            <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg>
        </div>
        <div class="popup-main">
            <h2>Заказать продукцию</h2>
            <p>Отправьте заявку и наш специалист свяжется с вами!</p>
            <form class="form-horizontal needs-validation row">
              <div class="col-12 position-relative mb-3">
                <input type="text" class="form-control" name="name" placeholder="ФИО" required>
              </div>
              <div class="col-12 position-relative mb-3">
                <input type="tel" class="form-control" name="phone" placeholder="Телефон" required pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$">
              </div>
              <div class="col-12 position-relative mb-3">
                <input type="email" class="form-control" name="mail" placeholder="E-mail">
              </div>
              <div class="col-12 position-relative mb-3">
                <input type="text" class="form-control" name="count" placeholder="Сколько нужно кирпичей">
              </div>
              <div class="col-12 position-relative mb-3">
                <textarea class="form-control" name="message" placeholder="Комментарий к заявке" ></textarea>
              </div>
              <div class="col-12 position-relative text-center">
                <p style="text-align:center;" class="small">Отправляю данную форму,<br>я соглашаюсь с <a href="/agreement" target="_blank">политикой обработки персональных данных</a> сайта</p>
                <button type="submit" class="rf-button-send btn btn-success">Отправить</button>
              </div>
            </form>
        </div>
    </div>
</div>
```
