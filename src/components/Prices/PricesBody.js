import './Prices.css'
import Prices from './Prices'

function pricesBody (props) {
    return (
        <Prices isOpen={props.isOpen} onBurger={props.onBurger}>
          <div className='prices__catalog'>
                  <ul className='prices__elements'>
                    <li className='prices__items'>
                      <div className='prices__items-title'>
                        <p className='prices__number'>01/</p>
                        <p className='prices__items-subtitle'>АБДОМИНОПЛАСТИКА С ЛИПОСАКЦИЕЙ</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Консультация</p>
                        <p className='prices__price'>От 1700₽</p>
                      </div>
                    </li>
                    <li className='prices__items'>
                      <div className='prices__items-title'>
                        <p className='prices__number'>02/</p>
                        <p className='prices__items-subtitle'>АБДОМИНОПЛАСТИКА С ПЕРЕНОСОМ ПУПКА</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Операция</p>
                        <p className='prices__price'>От 352000₽</p>
                      </div>
                    </li>
                    <li className='prices__items'>
                      <div className='prices__items-title'>
                        <p className='prices__number'>03/</p>
                        <p className='prices__items-subtitle'>ИНТИМНАЯ ПЛАСТИКА</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Пластика половых губ</p>
                        <p className='prices__price'>От 42000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Восстановления целостности девственной плевы</p>
                        <p className='prices__price'>От 42000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Пластика малых половых губ </p>
                        <p className='prices__price'>От 58000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Пластика больших половых губ </p>
                        <p className='prices__price'>От 66000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Комплексная коррекция интимной зоны </p>
                        <p className='prices__price'>От 88000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Пластика влагалища </p>
                        <p className='prices__price'>От 99000₽</p>
                      </div>
                    </li>
                    <li className='prices__items'>
                      <div className='prices__items-title'>
                        <p className='prices__number'>04/</p>
                        <p className='prices__items-subtitle'>ЛИПОСАКЦИЯ СПИНЫ</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Операция</p>
                        <p className='prices__price'>От 135000₽</p>
                      </div>
                    </li>
                    <li className='prices__items'>
                      <div className='prices__items-title'>
                        <p className='prices__number'>05/</p>
                        <p className='prices__items-subtitle'>ЛИПОСАКЦИЯ ЖИВОТА</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Липосакция живота и боков</p>
                        <p className='prices__price'>От 46000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Липосакция боковых отделов живота</p>
                        <p className='prices__price'>От 46000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Липосакция надлобковой области</p>
                        <p className='prices__price'>От 93000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Липосакция задне-боковых поверхностей туловища </p>
                        <p className='prices__price'>От 148000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Липосакция зона живота </p>
                        <p className='prices__price'>От 149000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Липосакция передней стенки живота </p>
                        <p className='prices__price'>От 149000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Липосакция передней брюшной стенки живота </p>
                        <p className='prices__price'>От 352000₽</p>
                      </div>
                    </li>
                    <li className='prices__items'>
                      <div className='prices__items-title'>
                        <p className='prices__number'>06/</p>
                        <p className='prices__items-subtitle'>ЛИПОМОДЕЛИРОВАНИЕ<br></br>ЛИПОСКУЛЬПТУРИРОВАНИЕ ТЕЛА HD </p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Операция</p>
                        <p className='prices__price'>От 275000₽</p>
                      </div>
                    </li>
                    <li className='prices__items'>
                      <div className='prices__items-title'>
                        <p className='prices__number'>07/</p>
                        <p className='prices__items-subtitle'>ЛУДАЛЕНИЕ ГИНЕКОМАСТИИ У МУЖЧИН</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Коррекция гинекомастии </p>
                        <p className='prices__price'>От 130000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Коррекция гинекомастии<br></br>1 категория </p>
                        <p className='prices__price'>От 130000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Коррекция гинекомастии<br></br>2 категория </p>
                        <p className='prices__price'>От 135000₽</p>
                      </div>
                      <div className='prices__box'>
                        <p className='prices__name'>Коррекция гинекомастии<br></br>3 категория </p>
                        <p className='prices__price'>От 140000₽</p>
                      </div>
                    </li>
                  </ul>
              </div>
        </Prices>
      )
  }

  export default pricesBody;