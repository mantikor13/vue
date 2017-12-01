<template>
  <div id="app">

    <div class="table-container">
      <div class="table car-table" data-empty="Автомобили не найдеы">
        <div class="thead" id="vueTest">
          <div class="thead__cell">Фото</div>
          <div class="thead__cell">Лот</div>
          <div class="thead__cell">Год</div>
          <div class="thead__cell">Марка</div>
          <div class="thead__cell">Модель</div>
          <div class="thead__cell">Двигатель</div>
          <div class="thead__cell">Топливо</div>
          <div class="thead__cell">КПП</div>
          <div class="thead__cell">Одометр</div>
          <div class="thead__cell">Тип привода</div>
          <div class="thead__cell">Основные моменты</div>
          <div class="thead__cell">Основные повреждения</div>
          <div class="thead__cell">Вторичные повреждения</div>
          <div class="thead__cell">Дата</br> аукциона</div>
          <div class="thead__cell">Текушая</br> ставка</div>
          <div class="thead__cell">Купить сейчас</div>
          <div class="thead__cell">Расположение</div>
          <div class="thead__cell">Тип документа</div>
        </div>
        <div class="tbody" id="table-body">

          <div class="table__row" v-for="item in cars">

            <div class="table__row-cell" v-for="items in item">{{items}}</div>

          </div>
        </div>
      </div>
      <div class="table-pagination">
      </div>
    </div>
  </div>
</template>

<script>

  let car = {model: 'Totota', year: '2000', test: 'test'};

    export default {
        data () {
            return {
                cars: {
                    car,
                    car2: {model: 'Totota', year: '2000'},
                    car3: {model: 'Totota', year: '2000', test: 'test'},
                    car4: {model: 'Totota', year: '2000', test1: 'test', test: 'test'}
                }
            }
        }
    }

</script>

<style>
  .table {
    display: flex;
    flex-direction: column;

    margin-bottom: 0;
    border-radius: 6px;

    font-size: 13px;
    background-color: #fff;
  }

  .thead{
    border-radius: 5px 5px 0 0;
    height: 40px;

    background-color: #6A0000;
  }

  .table .thead div{
    display: inline-block;
    width: 100px;
    height: 40px;

    padding: 8px 0 !important;

    word-wrap: break-word;
    text-align: center;
    color: white;
  }

  .tbody{

  }

  .table__row{

    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  .table__row-cell{
    display: inline-block;
    width: 100px;

    text-align: center;
    padding: 8px 0 !important;
  }

  .table__row .table__row-cell:first-child img{
    margin-left: 5px;
  }

  .bottom-cell_wrap{
    display: flex;
  }

  .bottom-cell_wrap > div:nth-child(1){
    width: 200px;
  }

  .bottom-cell_wrap > div:nth-child(2){
    width: 100%;
  }

  .bottom-cell_wrap .thead__cell, .bottom-cell_wrap .table__row-cell{
    display: flex !important;
    justify-content: space-between;
    align-items: center;

    height: 40px;
    padding: 0 10px !important;
    border-bottom: 1px solid black;
  }

  .bottom-cell_wrap .table__row-cell{
    width: 100%;
  }

  .table-pagination{
    text-align: center;
  }
</style>
