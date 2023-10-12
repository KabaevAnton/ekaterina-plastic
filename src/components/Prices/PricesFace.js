import "./Prices.css"
import Prices from "./Prices";

function PricesFace (props) {
    return (
      <Prices isOpen={props.isOpen} onBurger={props.onBurger}>
        <div className='prices__catalog'>
                <ul className='prices__elements'>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>01/</p>
                      <p className='prices__items-subtitle'>CORTEXIL PRP ИННОВАЦИОННАЯ ТЕХНОЛОГИЯ<br></br> Cortexil PRP </p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>1 пробирка Cortexil PRP</p>
                      <p className='prices__price'>От 7850₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>2 пробирки Cortexil PRP</p>
                      <p className='prices__price'>От 12350₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>3 пробирки Cortexil PRP</p>
                      <p className='prices__price'>От 19850₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Пакет комплексный "5 процедур PRP-терапии Cortexil"</p>
                      <p className='prices__price'>От 30400₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>02/</p>
                      <p className='prices__items-subtitle'>УВЕЛИЧЕНИЕ ГУБ ГИАЛУРОНОВОЙ КИСЛОТОЙ </p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Увеличение губ</p>
                      <p className='prices__price'>От 13500₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Juvederm Ultra 2 0,6 мл </p>
                      <p className='prices__price'>От 13500₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Juvederm Ultra Smail 0,6 мл</p>
                      <p className='prices__price'>От 13500₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Препарат Belotero Balance 1 мл</p>
                      <p className='prices__price'>От 18500₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Препарат Belotero Lips Contour</p>
                      <p className='prices__price'>От 18500₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Препарат Belotero Intense 1 мл</p>
                      <p className='prices__price'>От 19500₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Контурная пластика<br></br>препаратом ART Filler Lips 1 мл </p>
                      <p className='prices__price'>От 21000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Juvederm Ultra 3 1мл </p>
                      <p className='prices__price'>От 21500₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Juvederm Volbella с лидокаином 1 мл </p>
                      <p className='prices__price'>От 23500₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>03/</p>
                      <p className='prices__items-subtitle'>ЭНДОСКОПИЧЕСКАЯ ПОДТЯЖКА ЛИЦА</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Операция</p>
                      <p className='prices__price'>От 370000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>04/</p>
                      <p className='prices__items-subtitle'>ЭНДОСКОПИЧЕСКИЙ ЛИФТИНГ ЛИЦА</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Эндоскопический лифтинг лба и бровей</p>
                      <p className='prices__price'>От 33000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Пересадка бровей</p>
                      <p className='prices__price'>От 33000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Наружный лифтинг бровей </p>
                      <p className='prices__price'>От 45000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Броулифтинг </p>
                      <p className='prices__price'>От 66000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Лифтинг лба</p>
                      <p className='prices__price'>От 110000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Эндоскопический лифтинг бровей</p>
                      <p className='prices__price'>От 263999₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Эндоскопический лифтинг лба</p>
                      <p className='prices__price'>От 264000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>05/</p>
                      <p className='prices__items-subtitle'>ПОДТЯЖКА ШЕИ</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Изпластика</p>
                      <p className='prices__price'>От 132000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>06/</p>
                      <p className='prices__items-subtitle'>ЛИПОФИЛИНГ ЛИЦА</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Операция</p>
                      <p className='prices__price'>От 132000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>07/</p>
                      <p className='prices__items-subtitle'>SMAS-ЛИФТИНГ — КРУГОВАЯ ПОДТЯЖКА ЛИЦА</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Операция</p>
                      <p className='prices__price'>От 365000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>08/</p>
                      <p className='prices__items-subtitle'>ОТОПЛАСТИКА</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Отопластика</p>
                      <p className='prices__price'>От 19800₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Устранение мелкого дефекта ушной раковины<br></br>под местной анестезией</p>
                      <p className='prices__price'>От 19800₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Односторонняя пластика ушных раковин<br></br>под местной анестезией</p>
                      <p className='prices__price'>От 42000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Устранение крупного дефекта ушной раковины<br></br>под местной анестезией </p>
                      <p className='prices__price'>От 52800₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Пластика ушных раковин<br></br>общий наркоз</p>
                      <p className='prices__price'>От 54000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Двусторонняя пластика ушных раковин<br></br>под местной анестезией </p>
                      <p className='prices__price'>От 75000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Создание (реконструкция) ушной раковины при анотии</p>
                      <p className='prices__price'>От 118000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>09/</p>
                      <p className='prices__items-subtitle'>РИНОПЛАСТИКА</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Ринопластика</p>
                      <p className='prices__price'>От 30000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Подслизистная коррекция носовой перегородки</p>
                      <p className='prices__price'>30000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Закрытая коррекция кончика носа</p>
                      <p className='prices__price'>75000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Закрытая коррекция костного отдела носа</p>
                      <p className='prices__price'>106000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Пластика посттравматической деформации носа</p>
                      <p className='prices__price'>162000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Коррекция посттравматической деформации носа</p>
                      <p className='prices__price'>180000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Ринопластика</p>
                      <p className='prices__price'>352000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Ринопластика реконструктивная</p>
                      <p className='prices__price'>385000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Вторичная ринопластика </p>
                      <p className='prices__price'>495000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Посттравматическая ринопластика</p>
                      <p className='prices__price'>495000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>10/</p>
                      <p className='prices__items-subtitle'> УДАЛЕНИЕ МАЛЯРНЫХ МЕШКОВ ПОД ГЛАЗАМИ</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Операция</p>
                      <p className='prices__price'>От 58000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>11/</p>
                      <p className='prices__items-subtitle'>БЛЕФАРОПЛАСТИКА</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Блефаропластика нижних век</p>
                      <p className='prices__price'>От 70000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Блефаропластика верхних век</p>
                      <p className='prices__price'>От 70000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>12/</p>
                      <p className='prices__items-subtitle'>ХЕЙЛОПЛАСТИКА — ПЛАСТИКА ГУБ</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Операция</p>
                      <p className='prices__price'>От 54000₽</p>
                    </div>
                  </li>
                  <li className='prices__items'>
                    <div className='prices__items-title'>
                      <p className='prices__number'>13/</p>
                      <p className='prices__items-subtitle'>БИШЕКТОМИЯ</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Удаление комков Биша</p>
                      <p className='prices__price'>От 54000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Удаление комков Биша<br></br>местная анестезия</p>
                      <p className='prices__price'>От 54000₽</p>
                    </div>
                    <div className='prices__box'>
                      <p className='prices__name'>Удаление комков Биша<br></br>общий наркоз</p>
                      <p className='prices__price'>От 62000₽</p>
                    </div>
                  </li>
                </ul>
            </div>
      </Prices>
    )
}

export default PricesFace;